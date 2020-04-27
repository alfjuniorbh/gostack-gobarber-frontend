import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface ToastContentProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={20} />,
  error: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />,
};

const ToastContent: React.FC<ToastContentProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default ToastContent;
