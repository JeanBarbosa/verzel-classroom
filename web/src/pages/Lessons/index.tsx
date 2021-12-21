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

interface LessonsData {
  meta: any;
  data: any;
}

interface LessonsFormData {
  keyword: string;
}

const Lessons: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const [data, setData] = useState<LessonsData>()
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    const url = `/lessons`;

    api.get(url).then(res => {
      setData(res.data)
    })
  }, [])

  const handleSubmit = useCallback(
    async (data: LessonsFormData, { reset }) => {

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          keyword: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { keyword } = data
        const res = await api.get(`/lessons?keyword=${keyword}&page=${page}`);

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
          description: 'Ocorreu um erro ao pesquisar suas aulas, tente novamente',
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
              placeholder="Pesquise suas aulas"
            />
            <Button type="submit">Pesquisar</Button>
          </Form>
        </Search>
        <table className="fl-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data de início</th>
              <th>Link</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.data.map((item: any) => (
                <tr key={item.id}>
                  {/* <Link to={`lessons/edit?id=${item.id}`}> */}
                  <td>{item.name}</td>
                  {/* </Link> */}
                  <td>
                    {item.start_date}
                  </td>
                  <td>
                    <a rel="noopener noreferrer" target="_blank" href={item.url}>
                      Assistir
                    </a>
                  </td>
                  <td>
                    {item.description.substring(0, 30) + '...'}
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

export default Lessons;
