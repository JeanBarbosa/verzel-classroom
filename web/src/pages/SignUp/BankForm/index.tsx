import React, { useCallback, useRef } from 'react';
import { FiChevronLeft, FiCreditCard, FiKey } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';
import ReactPlayer from 'react-player/lazy'
import { isValidCPF } from '../../../utils/cpf';

import { useToast } from '../../../hooks/toast';

import getValidationErrors from '../../../utils/getValidationErrors';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import {
  Container,
  Section,
  Content,
  AnimationContainer,
  Background,
  Benefit,
  RadioGroup,
  Radio,
  LabelRadio,
  PlayerWrapper
} from './styles';
import { useState } from 'react';

interface SignUpFormData {
  document: string;
  pix: string;
  aceite?: boolean;
}

const BankForm: React.FC = (props: any) => {

  const [openYoutube, setOpenYoutube] = useState(false)
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const back = () => {
    props.prev()
  }

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          document: Yup.string().required('CPF obrigatório').test('CPF', 'Cpf inválido', (value) => isValidCPF(value)),
          pix: Yup.string().required('PIX obrigatório'),
          aceite: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', props.state)

        history.push('/signin');

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, props, history],
  );

  return (
    <Container>
      <Content>
        <Section>
          <button onClick={back}>
            <FiChevronLeft />
          </button>
          <h1>
            agora! <br />
            digite sua chave Pix...
          </h1>

          <Benefit>
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a onClick={() => setOpenYoutube(!openYoutube)}>
              Saiba o que é pix e como <br />
              cadastrar sua chave, <b>Clique aqui!</b>
            </a>

            {
              !!openYoutube &&
              <PlayerWrapper>
                <ReactPlayer
                  className='react-player'
                  url='https://www.youtube.com/watch?v=ar-ynWFzEGs'
                />
              </PlayerWrapper>
            }

          </Benefit>
        </Section>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>
              Passo 2 <br />
              Dados Bancários
            </h1>

            <Input
              name="document"
              icon={FiCreditCard}
              placeholder="CPF"
              required
              onChange={(e) => {
                props.setState('document', e.target.value)
              }}
            />

            <Input
              name="pix"
              icon={FiKey}
              type="text"
              placeholder="chave PIX"
              onChange={(e) => {
                props.setState('pix', e.target.value)
              }}
            />

            <RadioGroup>
              <Radio>
                <input
                  type="radio"
                  value="true"
                  required
                />
                <LabelRadio>
                  Li e aceito os <a target="_blank" rel="noopener noreferrer" href="https://www.club.finmarc.com.br/docs/terms.pdf" > Termos</a> de uso e a  <a target="_blank" rel="noopener noreferrer" href="https://www.finmarc.com.br/docs/Politica_de_privacidade.pdf">política de privacidade.</a>
                </LabelRadio>
              </Radio>
            </RadioGroup>

            <Button type="submit">Finalizar</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default BankForm;
