import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf/ToastShelf';

import { ToastContext } from '../ToastProvider'

const VARIANT_OPTIONS = ['notice','warning', 'error', 'success'];

function ToastPlayground() {
  const {    
    createToast
  } = React.useContext(ToastContext);

  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  // const [toastList, setToastList] = React.useState([]);

  function handleSubmit(){
    // const currentToast = {
    //   id: crypto.randomUUID(),
    //   variant: variant,
    //   children: message,
    // };

    // setToastList([...toastList, currentToast]);
    createToast(message, variant);
  }

  // function handleDismiss(id){
  //   const nextToastList = toastList.filter((toast)=> { 
  //     return toast.id != id;
  //   });

  //   setToastList(nextToastList);
  // }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf/>


      <form
        className={styles.controlsWrapper}
        onSubmit={(e)=>{
          e.preventDefault();
          handleSubmit();
          setMessage('');
          setVariant('notice');
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
             id="message" 
             className={styles.messageInput} 
             vlaue={message} 
             onChange={event => {
              setMessage(
                event.target.value
              );
              }} 
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option)=>{
              return(
                <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={`${option}`}
                  checked={variant === `${option}`}
                  onChange={(e)=>{
                    setVariant(e.target.value);
                  }}  
                />
                {option}
              </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
