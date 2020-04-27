import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';
import ToastContent from './ToastContent';

interface ToastProps {
  messages: ToastMessage[];
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
  const messageWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );
  return (
    <Container>
      {messageWithTransitions.map(({ item, key, props }) => (
        <ToastContent key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default Toast;
