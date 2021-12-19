import React, { useCallback, useRef, useEffect, useState } from 'react';
import { FiChevronLeft, FiUser, FiMail, FiLock, FiPhone } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

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
  Benefit
} from './styles';

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  job: string;
}

const UserForm: React.FC = (props: any) => {

  const [userData, setUserData] = useState<SignUpFormData>()
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const back = () => {
    history.push('/');
  }

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          job: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        props.next()

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
    [addToast, props],
  );

  useEffect(() => {
    const init = async () => {
      if (userData === undefined)
        await setUserData({
          username: props.getState('username', ''),
          job: props.getState('job', ''),
          email: props.getState('email', ''),
          password: props.getState('password', ''),
        })
    }
    init()
  }, [props, userData])

  return (
    <Container>
      <Content>
        <Section>
          <button onClick={back}>
            <FiChevronLeft />
          </button>
          <h1>
            Cadastres-e e tenha
            acesso a vários
            Cursos personalizados
            da Verzel Classroom.
          </h1>

          <Benefit>
            <Link to="/">
              Conheça as vantagens da <br /> Verzel Classroom, <b>Clique aqui!</b>
            </Link>
          </Benefit>
        </Section>
        <AnimationContainer>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            initialData={userData}
          >
            <h1>
              Passo 1 <br />
              Dados pessoais
            </h1>

            <Input
              name="username"
              icon={FiUser}
              placeholder="Como gostaria de ser chamado?"
              required
              onChange={(e) => {
                props.setState('username', e.target.value)
              }
              }
            />

            <Input
              name="job"
              icon={FiPhone}
              type="text"
              placeholder="Profissão"
              onChange={(e) => {
                props.setState('job', e.target.value)
              }}
            />

            <Input
              name="email"
              icon={FiMail}
              placeholder="Qual o seu melhor e-mail?"
              required
              onChange={(e) => {
                props.setState('email', e.target.value)
              }}
            />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              required
              placeholder="Senha"
              onChange={(e) => {
                props.setState('password', e.target.value)
              }}
            />

            <Button type="submit">Continuar</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default UserForm;
