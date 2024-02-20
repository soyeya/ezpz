import React from 'react';
import { Link } from 'react-router-dom';

const Title = ({children, backURL}) => {

     if(backURL){
        return(
            <>
            <div className="title active">
                <Link to={backURL} />
                <p style={{"color" : "#114b02", "fontSize" : "1.5em"}}>{children}</p>
            </div>
            </>
        )
     }
     return(
        <>
        <div className="title">
           <p style={{"color" : "#ffc000", "fontSize" : "1.5em"}}>{children}</p>
        </div>
        </>
     )
}

export default Title;