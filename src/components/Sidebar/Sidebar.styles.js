import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SidebarWrapper = styled(motion.div)`
  background-color: ${(props) =>
    props.$color === 'light'
      ? 'var(--color-sidebar-background-light-default)'
      : 'var(--color-sidebar-background-dark-default)'};
  height: 100vh;
  min-width: ${(props) => (props.$isOpened ? '250px' : '86px')};
  @supports (height: 100dvh) {
    height: 100dvh;
  }
  min-height: 0;
  display: flex;
  flex-direction: column;
  transition: 0.3s linear;
`;

export const NavWrapper = styled(motion.div)`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  justify-content: space-between;
  transition: linear;
`;

export const NavItemWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 10px 18px;
  border-radius: 12px;
  margin-top: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.2s linear;
  color: ${(props) =>
    props.$active
      ? props.$color === 'dark'
        ? 'var(--color-text-dark-active)'
        : 'var(--color-text-light-active)'
      : 'var(--color-text-light-default)'};

  background-color: ${(props) =>
    props.$active
      ? props.$color === 'dark'
        ? 'var(--color-sidebar-nav-item-background-dark-active)'
        : 'var(--color-sidebar-background-light-active)'
      : 'transparent'};

  &:hover {
    background-color: ${(props) =>
      props.$color === 'dark'
        ? 'var(--color-sidebar-background-dark-hover)'
        : 'var(--color-sidebar-background-light-hover)'};
  }
`;

export const NavItemText = styled(motion.span)`
  margin-left: 12px;
  font-size: 0.95rem;
  font-weight: 500;
`;

export const SidebarHeader = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 1rem;

  img {
    padding-left: 2px;
    width: 50px;
    height: 50px;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) =>
      props.$color === 'dark'
        ? 'var(--color-text-dark-active)'
        : 'var(--color-text-light-active)'};
  }

  button {
    position: absolute;
    height: 30px;
    width: 30px;
    background-color: ${(props) =>
      props.$color === 'light'
        ? props.$isOpen
          ? 'var(--color-button-background-light-active)'
          : 'var(--color-button-background-light-default)'
        : props.$isOpen
        ? 'var(--color-sidebar-background-dark-active)'
        : 'var(--color-sidebar-background-dark-default)'};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    color: ${(props) =>
      props.$color === 'dark'
        ? 'var(--color-text-dark-default)'
        : 'var(--color-text-light-default)'};
  }
`;

export const SidebarFooter = styled(motion.div)`
  display: flex;
  background: ${(props) =>
    props.$isOpened
      ? 'transparent'
      : props.$color === 'dark'
      ? 'var(--color-devider-dark)'
      : 'var(--color-devider-light)'};
  max-height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  padding-block: 14px 26px;
  margin-top: 20px;
  border-top: 1px solid
    ${(props) =>
      props.$color === 'dark'
        ? 'var(--color-devider-dark)'
        : 'var(--color-devider-light)'};
  transition: 0.3s linear;

  img {
    padding-left: 2px;
    width: 50px;
    height: 50px;
    border-radius: 12px;
  }

  p {
    margin: 0;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 500;
    color: ${(props) =>
      props.$color === 'dark'
        ? 'var(--color-text-dark-default)'
        : 'var(--color-text-light-default)'};
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) =>
      props.$color === 'dark'
        ? 'var(--color-text-dark-active)'
        : 'var(--color-text-light-active)'};
  }

  button {
    width: 25px;
    height: 25px;
    background-color: ${(props) =>
      props.$color === 'light'
        ? 'var(--color-sidebar-background-light-active)'
        : 'var(--color-sidebar-background-dark-active)'};
    border: none;
    border-radius: 9px;
    padding: 5px;
    cursor: pointer;
    color: ${(props) =>
      props.$color === 'dark'
        ? 'var(--color-text-dark-default)'
        : 'var(--color-text-light-default)'};
  }
`;
