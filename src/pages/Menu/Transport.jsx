import React from 'react';
import Info from '../../components/Info';
import Page from '../../components/Page';
import Title from '../../components/Title';
import Navi from '../../components/Navi';
import categoryDB from '../../json/category.json';

const Transport = () => {

     return(
        <>
        <Page 
          header={<Title backURL={'/'}>교통</Title>}> 
          <Info title={'서울교통정보'} data={categoryDB.transport}></Info>
        </Page>
        </>
     )
}

export default Transport;