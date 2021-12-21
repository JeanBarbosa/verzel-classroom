import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  FiList,
  FiVideo,
  FiUserCheck
} from 'react-icons/fi';

import {
  Container,
  Graphics,
  Lessons,
  Cards,
  Card
} from './styles';

const Dashboard: React.FC = () => {

  const history = useHistory();

  const handleClickCard = (page: string) => {
    history.push(page);
  }

  return (
    <Container>
      <Graphics>
        <Cards>
          <Card onClick={() => handleClickCard('/courses/new')}>
            <FiList strokeWidth="1" size={50} />
            <span>
              Criar <br />
              Módulo
            </span>
          </Card>

          <Card onClick={() => handleClickCard('/lessons')}>
            <FiVideo strokeWidth="1" size={50} />
            <span>
              Criar <br />
              Aula
            </span>
          </Card>

          <Card className='destaque' onClick={() => { }}>
            <FiUserCheck strokeWidth="1" size={50} />
            <span>
              Inscritos <br />
            </span>
          </Card>
        </Cards>

        {/* <CoursesChart /> */}

      </Graphics>

      <Lessons>
        {/* <LatestLessons /> */}
      </Lessons>
    </Container>
  );
};

export default Dashboard;
