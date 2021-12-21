import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiVideo, FiLink, FiCalendar, FiFileText } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api, { useQuery } from '../../services/api';
import { useToast } from '../../hooks/toast';
import { useHistory, useLocation } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';

import {
  Container,
  Content,
  FormSection,
  Title,
  Aside
} from './styles';
import { Rewards } from '../../components/Rewards';

interface LessonFormData {
  course_id?: number;
  name: string;
  start_date: string;
  url: string;
  description: string;
}

const NewLesson: React.FC = () => {

  const id = Number(useQuery().get('id'));
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const [courses, setCourses] = useState([])

  const location = useLocation();
  const lesson = (location.state as LessonFormData);

  const history = useHistory()
  const styles = { borderColor: '#111', borderWidth: '1px' }

  const handleSubmit = useCallback(
    async (data: LessonFormData, { reset }) => {

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          course_id: Yup.string(),
          name: Yup.string().required('Nome obrigatório'),
          start_date: Yup.string().required('Data de início obrigatório'),
          url: Yup.string().required('Link do youtube obrigatório'),
          description: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/lessons', data);

        reset()

        addToast({
          type: 'success',
          title: 'Módulo salvo!',
          description:
            'As informações da aula foram salvas com sucesso!',
        });

        history.push('/lessons')

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao salvar',
          description: 'Ocorreu um erro ao salvar a aula, tente novamente',
        });
      }
    },
    [addToast, history],
  );

  useEffect(() => {
    api.get('courses').then(res => {
      const { data } = res
      const courseParse = data.data.map((item: any) => {
        return {
          value: item.id,
          label: item.name
        }
      })

      setCourses(courseParse)
    })
  }, [])

  return (
    <Container>
      <Content>
        <FormSection>
          <Title>
            <FiVideo strokeWidth="1" size={50} />
            {id ? <h1>Editar Aula</h1>
              : <h1>Nova Aula</h1>
            }
          </Title>

          <Form
            ref={formRef}
            initialData={id ? lesson : {}}
            onSubmit={handleSubmit}
          >
            <Select
              name="course_id"
              options={courses}
              icon={FiVideo}
              defaultValue={{ value: '', label: '-- selecione o módulo --' }}
            />

            <Input
              containerStyle={styles}
              name="name"
              icon={FiVideo}
              placeholder="Qual nome da Aula?"
            />

            <Input
              containerStyle={styles}
              name="start_date"
              type="date"
              icon={FiCalendar}
              placeholder="Data de início"
            />

            <Input
              containerStyle={styles}
              name="url"
              type="url"
              icon={FiLink}
              placeholder="link do vídeo"
            />

            <Input containerStyle={styles}
              name="description" icon={FiFileText}
              placeholder="pequena descrição" />

            <Button type="submit">Salvar</Button>
          </Form>
        </FormSection>
      </Content>

      <Aside>
        <Rewards />
      </Aside>
    </Container>
  );
};

export default NewLesson;
