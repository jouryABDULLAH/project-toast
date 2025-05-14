import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

import { ToastContext } from '../ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};


function Toast({id, variant='notice', children}) {
  const { dismissToast } = React.useContext(ToastContext);
  
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        dismissToast(id);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dismissToast]);

 
  const className = `${styles.toast} ${styles[variant]}`;
  const Icon = ICONS_BY_VARIANT[variant].render;
  return (
    <div className={className} >
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          {variant} -
        </VisuallyHidden>
        {children}
      </p>
      <button 
        aria-label="Dismiss message"
        aria-live="off"
        className={styles.closeButton}
        onClick={()=> dismissToast(id)}
      >
        <X size={24} />

      </button>
    </div>
  );
}

export default Toast;
