import React, { useCallback, useRef, useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  Content,
  Search,
  Pagination
} from './styles';

interface CoursesData {
  meta: any;
  data: any;
}

interface CoursesFormData {
  keyword: string;
}

const Courses: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const [data, setData] = useState<CoursesData>()
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    const url = `/courses`;

    api.get(url).then(res => {
      setData(res.data)
    })
  }, [])

  const handleSubmit = useCallback(
    async (data: CoursesFormData, { reset }) => {

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          keyword: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { keyword } = data
        const res = await api.get(`/courses?keyword=${keyword}&page=${page}`);

        setData(res.data)

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao pesquisar',
          description: 'Ocorreu um erro ao pesquisar os módulos, tente novamente',
        });
      }
    },
    [addToast, page],
  );

  const handleClickPaginate = (cpage: number) => {
    setPage(cpage)
  }

  return (
    <Container>
      <Content>
        <Search>
          <Form
            ref={formRef}
            initialData={{
              keyword: "",
            }}
            onSubmit={handleSubmit}
          >
            <Input
              name="keyword"
              icon={FiSearch}
              placeholder="Pesquise seus módulos"
            />
            <Button type="submit">Pesquisar</Button>
          </Form>
        </Search>
        <table className="fl-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.data.map((item: any) => (
                <tr key={item.id}>
                  {/* <Link to={`courses/edit?id=${item.id}`}> */}
                  <td>{item.name}</td>
                  {/* </Link> */}
                  <td>
                    {item.short_description}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Pagination>
          <span>
            Página {data?.meta.first_page} de {data?.meta.last_page}
          </span>

          <button onClick={() => { handleClickPaginate(page - 1) }}>
            <FcPrevious />
          </button>
          <button onClick={() => { handleClickPaginate(page + 1) }}>
            <FcNext />
          </button>
        </Pagination>
      </Content>
    </Container>
  );
};

export default Courses;
