import React , { useState, useEffect } from 'react';
import axios from 'axios';
import Page from '../../../components/Page';
import Title from '../../../components/Title';
import Navi from '../../../components/Navi';
import Search from '../../Search';
import * as MyLayout from '../../../lib/Layout';


const AmericanFood = () => {

     const [open , setOpen] = useState(false);
     const [address, setAddress] = useState(null);
     const [content, setContent ] = useState(null);
     const { startLoading, finishLoading } = MyLayout.useLoading();

     const new_api = (value) => {

        const keyword = value;
        if(!address);
        setAddress(keyword);
        if(value == "") return setAddress(null), setContent(null), setOpen(false);

     }

     const handleClick = async() => {

         if(!address) return;
         startLoading('데이터 불러오는 중...');
         try{
         const res = await axios.get(`http://openapi.seoul.go.kr:8088/4b79795070636a6437326e4c544946/json/LOCALDATA_072404/1/1000/`);
         const data = res.data.LOCALDATA_072404.row;
         setOpen(true);
         setContent(data);


        }catch(e){
            console.log('AmericanFood 오류');
            finishLoading();
         }
         finishLoading();
     }

     useEffect(() => {
       
        handleClick();

     },[])

     return(
      <Page
       header={<Title backURL={'/restaurant'}>양식</Title>}
       footer={<Navi />}
       >
         <Search
          placeholder={'동네명을 입력해주세요'}
          onChange={(e) => new_api(e.target.value)}
          onClick={handleClick}
         >
             {!open && '검색결과가 없습니다'}
              <ul>
                {content && (content.filter((result) => result.RDNWHLADDR.includes(address)).map((result,i) => (
                  (result.DTLSTATENM == "영업" && result.UPTAENM == "경양식") && (<li key={'restaurant' + i}>
                        <p>가게명 : <strong>{result.BPLCNM}</strong></p>
                        <p>{result.DTLSTATENM}합니다.</p>
                        <p>주소 : <strong>{result.RDNWHLADDR}</strong></p>
                        <p>구분 : <strong>{result.UPTAENM}</strong></p>
                        </li>))
                )
                )
                }
                </ul>
         

             </Search>

      </Page>
     )
}

export default AmericanFood;