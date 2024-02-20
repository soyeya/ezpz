import React , { useState ,  useContext, createContext } from 'react';
import {createPortal} from 'react-dom';
import Dialog from '../components/Dialog';
import Errordialog from '../components/Errordialog';

export const layoutContext = createContext({});
layoutContext.displayName = 'LayoutContext';

export const Layout = ( { children }) => {

     const [dialog, setDialog] = useState();
     return (
        <layoutContext.Provider value={{ dialog, setDialog }}>
          {children}
        </layoutContext.Provider>
     )
}


export const useDialog = () => {

     const { dialog , setDialog } = useContext(layoutContext);
     const loadingDialog = (element) => setDialog(element);
     const closeDialog = () => setDialog(null);
     return{ dialog, loadingDialog, closeDialog };

}


export const useLoading = () => {

     const { loadingDialog, closeDialog: finishLoading  } = useDialog();
     const startLoading = (message) => loadingDialog(<Dialog title={message}></Dialog>);
     return { startLoading , finishLoading};
}


export const DialogContainer = () => {
    const { dialog } = useDialog();
    return (
      <>
        {dialog &&
          createPortal(
            dialog,
            document.querySelector("#dialog")
          )}
      </>
    );
  };

