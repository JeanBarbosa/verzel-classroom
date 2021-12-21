import React from 'react';
import { BsCheckBox } from 'react-icons/bs';
import stars from '../../assets/stars.svg';
import { Cards, Card } from './styles';

export const Rewards: React.FC = () => {
  return (
    <Cards>
      <Card>
        <img src={stars} alt="stars" />
        <span>
          Suas aulas são <br />
          valiosas na nossa base
        </span>
      </Card>
      <Card>
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
      </Card>
    </Cards>
  );
}
