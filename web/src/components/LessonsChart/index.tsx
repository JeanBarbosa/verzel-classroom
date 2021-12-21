import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import {
  Container,
  Header,
  Msg
} from './styles'

const LessonsChart: React.FC = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    api.get('graphics').then(res => {
      const { data } = res;
      setData(data);
    })

  }, [])

  return (
    <Container>
      <Header>
        <span>
          Gráfico
        </span>

      </Header>
      <ResponsiveContainer width="100%" height="100%">
        {data.length >= 1 ?
          <LineChart
            width={500}
            height={300}
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Criadas" stroke="#0965cb" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="assistidas" stroke="#FB6D3A" />
          </LineChart>
          : <Msg><span> carregando gráfico aulas criadas/assistidas</span></Msg>
        }
      </ResponsiveContainer>
    </Container>
  );
}

export default LessonsChart;
