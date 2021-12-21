import styled from 'styled-components';

export const Container = styled.div`

  /* @media(max-width: 1024px){
    position: relative;
    width: 100vw;
    height: 70px;
    background: var(--color-primary);
    z-index: 999;
  } */

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 28px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #111;
    height: 10% !important;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #373a47;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #fff;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #fff;
  }

  /* Wrapper for item list */
  .bm-item-list {
    padding: 0.8em;

    h1 {
      color: var(--color-primary); /* b8b7ad */
    }
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    color: #203459;
    margin-top: 30px;
    padding: 5px;

    text-decoration: none;

    &:hover {
      background: var(--color-primary);
      color: #fff;
      margin-right: -50px;
      border-radius: 4px;
      opacity: 0.8;
    }

    svg {
      margin-right: 14px;
    }

    ::selection {
      background: #fff;
    }
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;
