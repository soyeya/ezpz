import React from 'react';

const Detail = ({ onChange, list , children, title, id }) => {

     return(
      <div className="detail">
         <form id='myForm'>
             <p className='selectTitle'>{title}</p>
             <select id={id} form="myForm" onChange={onChange}>
               {list.map((v, i) => (
                   <option key={'select'+i} value={v.value}>{v.title}</option>
               ))}
            </select>
            </form>
            <div className="detailContent">
              { list && children}
            </div>
         </div>
     )
}

export default Detail;