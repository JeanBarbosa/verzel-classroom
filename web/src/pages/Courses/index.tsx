import React, { useState, useEffect } from 'react';
import { FiCopy, FiEye, FiTrash } from 'react-icons/fi';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import medias from '../../assets/medias.jpg';
import Button from '../../components/Button';

import {
  Container,
  Content,
  Aside,
  Section,
  Cards,
  Card,
  SocialMedia,
  Header,
  Title,
  Subtitle,
  InviteLink,
  Body,
  Footer,
  Empty
} from './styles';

interface CourseData {
  meta: any;
  data: any;
}

const Courses: React.FC = () => {

  const { addToast } = useToast();
  const history = useHistory();

  const [data, setData] = useState<CourseData>()

  useEffect(() => {
    api.get('/courses').then(res => {
      setData(res.data)
    })
  }, [])

  const handleClickCopy = () => {
    addToast({
      type: 'info',
      title: 'Copiado!!',
      description: 'Link do módulo copiado para área de transferência',
    });
  }

  const handleCreateCourse = () => {
    history.push('/courses/new');
  }

  const handleDeleteCourse = (id: number) => {
    api.delete(`/courses/${id}`).then(res => {
      //TODO remover do state o módulo
      api.get('/courses').then(res => {
        setData(res.data)
      })
    })
  }

  const handlePreview = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <Container>
      <Aside>
        <Section>
          <Button disabled={data?.data.length < 3 ? false : true} onClick={handleCreateCourse} > Criar Módulo </Button>
        </Section>

        <Cards>
          <SocialMedia>
            <img src={medias} alt="social medias" width="280px" />
            <span>
              Crie seus módulos <br />
              e compartilhe nas redes sociais
            </span>
          </SocialMedia>
        </Cards>
      </Aside>
      <Content>
        <h3>
          Meus Módulos
        </h3>
        {
          data?.data.length <= 0 ? (<Empty><p> Nenhum módulo foi criado!</p></Empty>) :
            (
              <Cards>
                {
                  data?.data.map((item: any, index: number) => (
                    <Card key={index}>
                      <Header />
                      <Body>
                        <Title>
                          {item.name}
                        </Title>
                        <Subtitle>
                          {item.short_description}
                        </Subtitle>
                        <InviteLink>
                          {`http://localhost:3000/modules?q=${item.id}`}
                        </InviteLink>
                      </Body>
                      <Footer>
                        <CopyToClipboard text={`http://localhost:3000/modules?q=${item.id}`}
                          onCopy={handleClickCopy}>
                          <FiCopy strokeWidth={1} size={20} />
                        </CopyToClipboard>
                        <FiEye strokeWidth={1} size={20} onClick={() => handlePreview(`http://localhost:3000/modules?q=${item.id}`)} />
                        <FiTrash strokeWidth={1} size={20} onClick={() => handleDeleteCourse(item.id)} />
                      </Footer>
                    </Card>
                  ))
                }
              </Cards>
            )}
      </Content>
    </Container>
  );
};

export default Courses;
