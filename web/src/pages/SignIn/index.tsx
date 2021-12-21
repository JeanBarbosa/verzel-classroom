import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  Content,
  AnimationContainer,
  ButtonGroup,
  Footer
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Acesso Exclusivo</h1>
            <p>
              nos cursos da<br />
              Verzel Classroom
            </p>

            <Input name="email" icon={FiMail} placeholder="Digite seu e-mail cadastrado" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha de acesso"
            />
            <ButtonGroup>
              <Button type="submit">Acessar</Button>
              <Link to="/forgot-password">Esqueceu sua senha?</Link>
            </ButtonGroup>

          </Form>
        </AnimationContainer>
      </Content>
      <Footer>
        <Link to="/signup">
          Ainda não tem conta? <br />
          <b> Cadastre-se </b>
        </Link>
        <Link to="/signin">
          Conheça as vantagens da <br /> Verzel Classroom, <b>Clique aqui!</b>
        </Link>
      </Footer>
    </Container>
  );
};

export default SignIn;
