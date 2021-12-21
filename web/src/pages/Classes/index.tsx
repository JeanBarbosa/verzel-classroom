import React, { useEffect, useState } from 'react';
import api, { useQuery } from '../../services/api'
import { youtubeGetID } from '../../utils/youtubeGetId';
import {
  Container,
  Content,
  AnimationContainer,
  Lessons,
  Lesson
} from './styles';

const Classes: React.FC = () => {

  const courseId = Number(useQuery().get('cid'));
  const [course, setCourse] = useState<any>()

  useEffect(() => {

    if (courseId) {
      api.get(`courses/${courseId}`).then(res => {
        const { data } = res
        console.log(data)
        setCourse(data)
      })
    }

  }, [courseId])

  if (!courseId) {
    return <Container>
      <Content>
        <h2>Não encontrado!</h2>
      </Content>
    </Container>
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          {
            course &&
            <><h2>
              {course?.name}
            </h2>
              <p>{course?.short_description}</p>
            </>
          }
          <Lessons>
            {course &&
              course?.lessons.map((item: any, index: number) => (
                <Lesson key={index}>
                  <iframe width="340" height="315" title={item.index}
                    src={`https://www.youtube.com/embed/${youtubeGetID(item.url)}?controls=0`}>
                  </iframe>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </Lesson>
              ))
            }
          </Lessons>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Classes;
