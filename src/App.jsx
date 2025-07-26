import React, { useEffect, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './components/Sidebar';
import { motion } from 'framer-motion';

library.add(fas);

export default function App() {
  const [color, setColor] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', color === 'dark');
  }, [color]);

  return (
    <div className="appWrapper">
      <Sidebar color={color} />
      <button
        className="light"
        onClick={() => {
          setColor(color === 'light' ? 'dark' : 'light');
        }}
      >
        Switch the lights {color === 'dark' ? 'on' : 'off'}
      </button>
    </div>
  );
}
