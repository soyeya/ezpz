import React from 'react';


const Dialog = ({ title , childern,  footer}) => {

     return(
        <>
         <div className="dialog">
             <ul>
                <header>{title}</header>
                <main>{childern}</main>
                <footer>{footer}</footer>
             </ul>
         </div>
        </>
     )
}

export default Dialog;