import React, { useCallback, useRef } from 'react';
import { FiChevronLeft, FiTag } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';

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
} from './styles';

interface SignUpFormData {
  tags: string;
  aceite?: boolean;
}

const BankForm: React.FC = (props: any) => {

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
          tags: Yup.string(),
          aceite: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', props.state)

        addToast({
          type: 'success',
          title: 'Cadastro criado',
          description:
            'Acesse o dashboard e crie a vontade!! 😀',
        });


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
            escolhas as categorias de interesse...
          </h1>

          <Benefit>
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a onClick={() => { }}>
              Conheça as vantagens da<br />
              Verzel Classroom, <b>Clique aqui!</b>
            </a>
          </Benefit>
        </Section>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>
              Passo 2 <br />
              Dados Bancários
            </h1>

            <Input
              name="tags"
              icon={FiTag}
              placeholder="ex: react, nodejs"
              required
              onChange={(e) => {
                props.setState('tags', e.target.value)
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
                  Li e aceito os <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/docs/terms.pdf" > Termos</a> de uso e a  <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/docs/terms.pdf">política de privacidade.</a>
                </LabelRadio>
              </Radio>
            </RadioGroup>

            <Button type="submit">Criar Conta</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default BankForm;
