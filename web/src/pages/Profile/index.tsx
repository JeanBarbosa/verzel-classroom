import React, { ChangeEvent, useCallback, useRef } from 'react';
import { FiUser, FiMail, FiLock, FiCamera, FiTag } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Userdefault from '../../assets/default.png';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, FormSection, FormGroup, AvatarInput } from './styles';

interface ProfileFormData {
  username: string;
  email: string;
  tags: string;
  old_password?: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const { user, updateUser, signOut } = useAuth();

  const styles = { borderColor: '#111', borderWidth: '1px' }
  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Nome obrigatório'),
          tags: Yup.string(),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: val => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: val => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password')], 'Confirmação incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          username,
          email,
          tags,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          username,
          email,
          tags,
          ...(old_password
            ? {
              old_password,
              password,
              password_confirmation,
            }
            : {}),
        };

        const response = await api.put(`/users/${user.id}`, formData);

        updateUser(response.data);

        // history.push('/dashboard');

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description:
            'As informações do seu perfil foram atualizadas com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description: 'Ocorreu um erro ao atualizar perfil, tente novamente',
        });
      }
    },
    [addToast, updateUser, user],
  );

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/files', data).then(response => {
          updateUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado!',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  return (
    <Container>
      <Content>
        <FormSection>
          <AvatarInput>
            {user.avatar ? <img
              src={user.avatar}
              alt={user.username}
            /> : <img
              src={Userdefault}
              alt={user.username}
            />}

            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>

          <Form
            ref={formRef}
            initialData={{
              username: user.username,
              email: user.email,
              tags: user.tags,
            }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Input
                containerStyle={styles}
                name="username" icon={FiUser}
                placeholder="Nome" />

              <Input
                containerStyle={styles}
                name="email"
                icon={FiMail}
                placeholder="E-mail" />

              <Input
                containerStyle={styles}
                name="tags"
                icon={FiTag}
                placeholder="ex: react, nodejs" />

            </FormGroup>
            <FormGroup>

              <Input
                containerStyle={styles}
                name="old_password"
                icon={FiLock}
                type="password"
                placeholder="Senha atual"
              />

              <Input
                containerStyle={styles}
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Nova senha"
              />

              <Input
                containerStyle={styles}
                name="password_confirmation"
                icon={FiLock}
                type="password"
                placeholder="Confirmar senha"
              />

              <Button type="submit">Confirmar mudanças</Button>
              <Button className="signout" type="button" onClick={signOut}>Sair</Button>
            </FormGroup>
          </Form>
        </FormSection>
      </Content>
    </Container>
  );
};

export default Profile;
