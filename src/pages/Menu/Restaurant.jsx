import React from 'react';
import Page from '../../components/Page';
import Title from '../../components/Title';
import Info from '../../components/Info';
import restaurantDB from '../../json/category.json';


const Restaurant = () => {
      
    return(
     <Page 
      header={<Title backURL={'/'}>음식점</Title>}>
         <Info 
         title={'메뉴선택'}
         data={restaurantDB.restaurant}></Info>
     </Page>
    )
}

export default Restaurant;