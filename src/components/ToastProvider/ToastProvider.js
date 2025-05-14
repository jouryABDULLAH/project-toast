import React, { Children } from 'react';

export const ToastContext = React.createContext();


function ToastProvider({children}) {

  const [toastList, setToastList] = React.useState([]);
  
  function createToast(message, variant){
    const nextToast = {
      id: crypto.randomUUID(),
      variant: variant,
      children: message,
    };

    setToastList([...toastList, nextToast]);
    
  }

  function dismissToast(id){
    const nextToastList = toastList.filter((toast)=> { 
      return toast.id != id;
    });

    setToastList(nextToastList);
  }

  // const value = React.useMemo(()=> {
  //   toastList,
  //   setToastList,
  //   handleDismiss
  // });

  const value = {toastList, createToast, dismissToast};

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
