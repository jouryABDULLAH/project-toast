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

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({variant='notice', message='', isVisible, setIsVisible}) {
 

  const className = isVisible ? `${styles.toast} ${styles[variant]}` : '';

  // const inlineStyles = !isVisible ? { visibility: 'hidden', pointerEvents: 'none' } : {};
  const inlineStyles = !isVisible ? { display: 'none', pointerEvents: 'none' } : {};
  const Icon = ICONS_BY_VARIANT[variant].render;
  return (
    <div className={className} style={inlineStyles}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button className={styles.closeButton} onClick={()=>{setIsVisible(false)}}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
