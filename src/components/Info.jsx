import React from 'react';
import { Link } from 'react-router-dom';

const Info = ({title , data}) =>{

     return(
        <>
          <div className="info">
              <p>{title}</p>
                <ul>
                {data.map((v, i) => (
                   <li key={'menu' + i}><Link to={v.href}><img src={`/assets/img/${v.img}`} alt={v.title} />{v.title}</Link></li>
                ))}
                </ul>
          </div>
        </>
     )
}

export default Info;