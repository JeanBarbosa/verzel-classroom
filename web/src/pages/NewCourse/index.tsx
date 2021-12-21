import React, { useCallback, useRef } from 'react';
import { FiList, FiFileText } from 'react-icons/fi';
import { BsCheckBox } from 'react-icons/bs';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import stars from '../../assets/stars.svg';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import { useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  FormSection,
  Title,
  Aside,
  Cards,
  Card
} from './styles';

interface CourseFormData {
  name: string;
  short_description: string;
}

const NewCourse: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const history = useHistory()
  const styles = { borderColor: '#111', borderWidth: '1px' }

  const handleSubmit = useCallback(
    async (data: CourseFormData, { reset }) => {

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          short_description: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/courses', data);

        reset()

        addToast({
          type: 'success',
          title: 'Módulo salvo!',
          description:
            'As informações do módulo foram salvas com sucesso!',
        });

        history.push('/courses')

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao salvar',
          description: 'Ocorreu um erro ao salvar o módulo, tente novamente',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Content>
        <FormSection>
          <Title>
            <FiList strokeWidth="1" size={50} />
            <h1>Novo Módulo</h1>
          </Title>

          <Form
            ref={formRef}
            initialData={{
              name: "",
              document: "",
            }}
            onSubmit={handleSubmit}
          >

            <Input
              containerStyle={styles}
              name="name"
              icon={FiList}
              placeholder="Qual nome do seu módulo?"
            />

            <Input containerStyle={styles}
              name="short_description" icon={FiFileText}
              placeholder="pequena descrição" />

            <Button type="submit">Salvar</Button>
          </Form>
        </FormSection>
      </Content>

      <Aside>
        <Cards>
          <Card>
            <img src={stars} alt="stars" />
            <span>
              Suas aulas são <br />
              valiosas na nossa base
            </span>
          </Card>
          <Card>
            <ul>
              <li>
                <BsCheckBox size={20} />
                <span>
                  Crie, Assitiu? Ganhou!
                </span>
              </li>
              <li>
                <BsCheckBox size={20} />
                <span>
                  Faça uma integraçao completa
                  com sua playlist do youtube
                </span>
              </li>
              <li>
                <BsCheckBox size={20} />
                <span>
                  Ofereça vantagens exclusivas
                  para amigos e parentes.
                </span>
              </li>
            </ul>
          </Card>
        </Cards>
      </Aside>
    </Container>
  );
};

export default NewCourse;
