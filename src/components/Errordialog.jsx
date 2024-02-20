import React from 'react';
import Dialog from './Dialog';
import * as MyLayout from '../lib/Layout';

const Errordialog = () => {

     const { closeDialog } = MyLayout.useLoading();

     return(
      <Dialog 
        title={'오류발생'}
        footer={<button onClick={closeDialog}>네, 알겠습니다.</button>}>
         <p>잠시 후 다시 시도해주세요</p>
      </Dialog>
     )
}

export default Errordialog;