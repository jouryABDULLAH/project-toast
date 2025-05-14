import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toastList, setToastList}) {

  

  return (
    <ol className={styles.wrapper}>
      
      {toastList.map((toast)=>{
          return (
            <li key={toast.id} className={styles.toastWrapper}>
                <Toast variant={toast.variant} handleDismiss={() => {
                  const nextToastList = [...toastList];
                  const idToRemove = toast.id;
                  const index = nextToastList.findIndex(obj => obj.id === idToRemove);
                  if (index !== -1) {
                    nextToastList.splice(index, 1);
                  }
                  setToastList(nextToastList);
                }}>
                  {toast.children}
                </Toast>
            </li>
          );
        })
      }
    </ol>
  );
}

export default ToastShelf;
