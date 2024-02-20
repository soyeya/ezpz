import React from 'react';
import * as MyLayout from '../lib/Layout';

const Page = ({header, children, footer , backColor}) => {

     if(backColor){
        return (
        <div className="page">    
          <header style={{'backgroundColor' : '#114b02'}}>{header}</header>
            <main>{children}</main>
          <footer>{footer}</footer>
          <MyLayout.DialogContainer />
          </div>
         )
     }
     return (
      <div className="page">    
      <header>{header}</header>
        <main>{children}</main>
      <footer>{footer}</footer>
      <MyLayout.DialogContainer />
    </div>
     )
}

export default Page;