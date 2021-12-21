import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'
import ReactList from 'react-list';
import { BsCheckBox } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { abridgedControl } from '../../utils/abridgedControl';
import { FaEllipsisH } from 'react-icons/fa';
import userAvatar from '../../assets/avatars/user1.png';
import api from '../../services/api';
import stars from '../../assets/stars.svg';

import {
  Container,
  Card,
  Header,
  Indicated,
  Info,
  Status,
  RewardsCards,
  RewardsCard
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
        <Indicated>
          <img src={userAvatar} alt="avatar" />
          <Info>
            <h6>
              {abridgedControl(lessons[index].name, 8)}
            </h6>
            <span>
              {format(new Date(lessons[index].created_at), 'dd/MM/yy hh:mm')}
            </span>
          </Info>
        </Indicated>
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
      <RewardsCards>
        <RewardsCard>
          <img src={stars} alt="stars" />
          <span>
            Suas aulas são <br />
            valiosas na nossa base
          </span>
        </RewardsCard>
        <RewardsCard>
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
                com suas playlist do youtube
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
        </RewardsCard>
      </RewardsCards>
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
