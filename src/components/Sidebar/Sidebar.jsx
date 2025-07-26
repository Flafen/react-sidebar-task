import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import PropTypes from 'prop-types';
import {
  NavItemText,
  NavItemWrapper,
  NavWrapper,
  SidebarFooter,
  SidebarHeader,
  SidebarWrapper,
} from './Sidebar.styles';
import { motion } from 'framer-motion';

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
  const { color } = props;
  const [isOpened, setIsOpened] = useState(true);
  const [activeBar, setActiveBar] = useState(1);
  const containerClassnames = classnames('sidebar', { opened: isOpened });

  const goToRoute = (path, id) => {
    console.log(`going to "${path}"`);
    setActiveBar(id);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <SidebarWrapper
      initial={{ width: isOpened ? 86 : 250 }} // начальное значение
      animate={{ width: isOpened ? 250 : 86 }} // к чему анимируем
      transition={{ duration: 0.3, ease: 'linear' }}
      $isOpened={isOpened}
      $color={color}
    >
      <SidebarHeader
        $isOpen={isOpened}
        $color={color}
      >
        <img
          src={logo}
          alt="TensorFlow logo"
        />
        <motion.span
          initial={{ opacity: isOpened ? 0 : 1 }}
          animate={{ opacity: isOpened ? 1 : 0 }}
          transition={{
            duration: 0.25,
            ease: 'linear',
            delay: isOpened ? 0.35 : 0.05,
          }}
        >
          TensorFlow
        </motion.span>
        <motion.button
          initial={{ right: isOpened ? -60 : -25 }}
          animate={{ right: isOpened ? -25 : -60 }}
          transition={{ duration: 0.45, type: 'linear' }}
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
        </motion.button>
      </SidebarHeader>
      <NavWrapper $color={color}>
        <div>
          {routes.map((route, id) => (
            <NavItemWrapper
              key={route.title}
              onClick={() => {
                goToRoute(route.path, id);
              }}
              $active={id === activeBar}
              $color={color}
            >
              <FontAwesomeIcon icon={route.icon} />
              <NavItemText
                initial={{ opacity: isOpened ? 0 : 1 }}
                animate={{ opacity: isOpened ? 1 : 0 }}
                transition={{
                  duration: 0.25,
                  ease: 'linear',
                  delay: isOpened ? 0.35 : 0.05,
                }}
              >
                {route.title}
              </NavItemText>
            </NavItemWrapper>
          ))}
        </div>
        <div>
          {bottomRoutes.map((route, id) => (
            <NavItemWrapper
              key={route.title}
              onClick={() => {
                goToRoute(route.path, id + routes.length);
              }}
              $active={id + routes.length === activeBar}
            >
              <FontAwesomeIcon icon={route.icon} />
              <NavItemText
                initial={{ opacity: isOpened ? 0 : 1 }}
                animate={{ opacity: isOpened ? 1 : 0 }}
                transition={{
                  duration: 0.25,
                  ease: 'linear',
                  delay: isOpened ? 0.35 : 0.05,
                }}
              >
                {route.title}
              </NavItemText>
            </NavItemWrapper>
          ))}
        </div>
      </NavWrapper>
      <SidebarFooter
        $color={color}
        $isOpened={isOpened}
      >
        <img
          src={user}
          alt="TensorFlow logo"
        />
        <motion.div
          initial={{ opacity: isOpened ? 0 : 1 }}
          animate={{ opacity: isOpened ? 1 : 0 }}
          transition={{
            duration: 0.15,
            ease: 'linear',
            delay: isOpened ? 0.5 : 0,
          }}
        >
          <p>User Account</p>
          <span>Mark T.</span>
        </motion.div>

        <motion.button
          initial={{ opacity: isOpened ? 0 : 1 }}
          animate={{ opacity: isOpened ? 1 : 0 }}
          transition={{
            duration: 0.15,
            ease: 'linear',
            delay: isOpened ? 0.5 : 0,
          }}
        >
          <FontAwesomeIcon icon={'arrows-up-down'} />
        </motion.button>
      </SidebarFooter>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
