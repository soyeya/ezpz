import React from 'react';
import Page from "../../components/Page";
import Title from "../../components/Title";
import Info from "../../components/Info";
import categoryDB from '../../json/category.json';


const Recycling = () => {
     return(
        <>
         <Page 
          header={<Title backURL={'/'}>분리수거</Title>}
          > 
          <Info title={'분리수거정보'} data={categoryDB.recycling}></Info>
        </Page>
        </>

     )
}

export default Recycling;