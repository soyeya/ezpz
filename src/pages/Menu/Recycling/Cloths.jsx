import React , { useState, useEffect } from 'react';
import axios from 'axios';
import Page from '../../../components/Page';
import Title from '../../../components/Title';
import Navi from '../../../components/Navi';
import Detail from '../../Detail';
import clothDB from '../../../json/select.json';
import { CLOTHAPI, cloth_controller  } from '../../../api/recycling';
import * as MyLayout from '../../../lib/Layout';

const Cloths = () => {

     const [content , setContent] = useState(null);
     const { startLoading ,  finishLoading } = MyLayout.useLoading();
     
     const handleClick = async(value) => {

         const new_value = value;
         if(!new_value) return;

         cloth_controller(new_value);
         startLoading('데이터 불러오는 중...')
         
         try{

             const res = await axios.get(CLOTHAPI);
             const data = await res.data.data;
             console.log(data);
             setContent(data);


         }catch(e){
            console.log('cloth오류')
            finishLoading()
         }
         finishLoading();
     }

     useEffect(() => {
   
         handleClick();

     },[content])
    return(
        <>
         <Page
         header={<Title backURL={'/recycling'}>헌옷수거함</Title>}
         footer={<Navi></Navi>}
         >
           <Detail
           title={'구역을 선택해주세요'}
           id={'cloths'}
           list={clothDB.cloths}
           onChange={(e) => handleClick(e.target.value)}
           >
            { content && (
                <ul>
                    <h3 className='title'> 총 {content.length} 곳이 검색되었습니다</h3>
                    {content.map((v,i) => ( 
                      <li key={'동대문구'+ i} style={{"display" : "block"}}>
                        <p>위치는 <strong>{v.행정동 || v.위치}</strong></p>
                        <p><strong>{v.주소 || v.도로명주소 || v.위치 || v.지번주소}</strong> 입니다</p>
                      </li>
                    ))}
                </ul>
            )}
           </Detail>
         </Page>
        </>
    )
}

export default Cloths;