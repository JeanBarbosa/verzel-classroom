import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {
  Container,
} from './styles';

const LatestCourses: React.FC = () => {

  const history = useHistory();
  const [courses, setCourses] = useState<any>();

  useEffect(() => {
    api.get('/courses').then(res => {
      const { data } = res;
      setCourses(data);
    })
  }, [])

  const handleClick = (ev: any) => {
    const { id } = courses.data[ev]

    history.push({
      pathname: '/classes',
      search: `?cid=${id}`
    });
  }

  if (courses?.data.length <= 0) {
    return <Container>
      <p>carregando...</p>
    </Container>
  }

  const getIdRand = () => {
    return parseInt(String((Math.random() * 4) + 1))
  }

  return (
    <Container>
      <Carousel autoPlay onClickItem={handleClick}>
        {
          courses?.data.map((item: any, index: any) => (
            <div key={index}>
              <img src={require(`../../assets/imgfakes/${getIdRand()}.jpeg`)} alt="módulo" />
              <div className="legend">
                <span>
                  total de aulas: {item.lessons.length}
                </span>
                <h4>{item.name}</h4>
                <p>{item.short_description}</p>
                Ver Aulas
              </div>
            </div>
          ))
        }
      </Carousel>
    </Container>
  );
}

export default LatestCourses;
