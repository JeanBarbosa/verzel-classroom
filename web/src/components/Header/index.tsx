import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useHistory } from 'react-router-dom';
import { FiList, FiVideo } from 'react-icons/fi';
import Userdefault from '../../assets/default.png';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  HeaderContent,
  Profile,
  Btn
} from './styles';
import { abridgedControl } from '../../utils/abridgedControl';

const Header: React.FC = () => {

  const history = useHistory();
  const { user } = useAuth();

  const handleListCourses = () => {
    history.push('/courses');
  }

  const handleClickLessons = () => {
    history.push('/lessons');
  }

  return (
    <Container>
      <HeaderContent>

        <Btn onClick={handleListCourses}>
          <FiList strokeWidth="1" color="#111" size={40} />
        </Btn>

        <Btn onClick={handleClickLessons}>
          <FiVideo strokeWidth="1" color="#111" size={40} />
        </Btn>

        <Link to="/profile">
          <Profile>
            {user.avatar ? <img
              src={user.avatar}
              alt={user.username}
            /> : <img
              src={Userdefault}
              alt={user.username}
            />}

            <div className="stars">

              <ReactStars
                count={5}
                size={20}
                value={5}
                activeColor="var(--color-primary)"
                isHalf={true}
                edit={false}
              />
              <span>
                <strong>{abridgedControl(user.username, 13)}</strong>
              </span>
            </div>
          </Profile>
        </Link>
      </HeaderContent>
    </Container>
  );
}

export default Header;
