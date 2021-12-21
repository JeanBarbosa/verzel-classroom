import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'
import ReactList from 'react-list';
import { useHistory } from 'react-router-dom';
import { abridgedControl } from '../../utils/abridgedControl';
import { FaEllipsisH } from 'react-icons/fa';
import api from '../../services/api';
import { Rewards } from '../Rewards';

import {
  Container,
  Card,
  Header,
  LessonInfo,
  Info,
  Status
} from './styles';

const LatestLessons: React.FC = () => {

  const history = useHistory();
  const [lessons, setlessons] = useState<Array<any>>([]);

  useEffect(() => {
    api.get('/lessons').then(res => {
      const { data } = res;
      setlessons(data.data);
    })
  }, [])

  const handleClickIndicated = (id: number) => {
    history.push(`reports?id=${id}`);
  }

  const renderCard = (index: any, key: any) => {
    return (
      <Card key={key} onClick={() => handleClickIndicated(lessons[index].id)}>
        <LessonInfo>
          <img src={`https://img.youtube.com/vi/EPXz7700lfY/0.jpg`} alt="avatar" />
          <Info>
            <h6>
              {abridgedControl(lessons[index].name, 8)}
            </h6>
            <span>
              {format(new Date(lessons[index].created_at), 'dd/MM/yy hh:mm')}
            </span>
          </Info>
        </LessonInfo>
        <Status>
          <p>
            ver
          </p>
          <span>
            assistido
          </span>
        </Status>
      </Card>
    )
  }

  const handleScroll = (e: any) => {
    console.log('scroll')
  }

  const handleClick = () => {
    history.push('/lessons')
  }

  if (lessons.length <= 0) {
    return <Container>
      <Rewards />
    </Container>
  }

  return (
    <Container>
      <Header>
        <h4>Últimas
          Aulas</h4>
        <FaEllipsisH color="#8598ad" onClick={handleClick} />
      </Header>
      <div style={{ overflow: 'auto', maxHeight: 400 }} onScroll={handleScroll}>
        <ReactList
          itemRenderer={renderCard}
          length={lessons.length}
          type='uniform'
        />
      </div>
    </Container>
  );
}

export default LatestLessons;
