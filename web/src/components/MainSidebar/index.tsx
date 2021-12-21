import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiMessageSquare, FiList, FiVideo } from 'react-icons/fi';
import { scaleDown as Menu } from 'react-burger-menu';

import { Container } from './styles';

const MainSidebar: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: any) => {
    setIsOpen(state.isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <Container>
      <Menu isOpen={isOpen} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} onStateChange={handleStateChange}>
        <h1>Verzel < br />
          Classroom</h1>
        <Link id="home" onClick={closeMenu} className="menu-item" to="/dashboard">
          <FiHome />
          Dashboard
        </Link>
        <Link id="lessons" onClick={closeMenu} className="menu-item" to="/lessons">
          <FiList />
          Módulos
        </Link>
        <Link id="lessons" onClick={closeMenu} className="menu-item" to="/lessons">
          <FiVideo />
          Aulas
        </Link>
        <Link id="profile" onClick={closeMenu} className="menu-item" to="/profile">
          <FiUser />
          Perfil
        </Link>
        <Link onClick={closeMenu} className="menu-item--small" to="/contact">
          <FiMessageSquare />
          Dúvidas
        </Link>
      </Menu>
    </Container>
  )
}

export default MainSidebar;
