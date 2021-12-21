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
import { youtubeGetID } from '../../utils/youtubeGetId';

const LatestLessons: React.FC = () => {

  const history = useHistory();
  const [lessons, setlessons] = useState<Array<any>>([]);

  useEffect(() => {
    api.get('/classes').then(res => {
      const { data } = res;
      setlessons(data.data);
    })
  }, [])

  const handleClickIndicated = (id: number) => {
    // history.push(`/lesson?id=${id}`);
  }

  const renderCard = (index: any, key: any) => {
    return (
      <Card key={key} onClick={() => handleClickIndicated(lessons[index].id)}>
        <LessonInfo>
          <img src={`https://img.youtube.com/vi/${youtubeGetID(lessons[index].url)}/0.jpg`} alt="avatar" />
          <Info>
            <h6>
              {abridgedControl(lessons[index].name, 8)}
            </h6>
            <span>
              {format(new Date(lessons[index].start_date), 'dd/MM/yy')}
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
