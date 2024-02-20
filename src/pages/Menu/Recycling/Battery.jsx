import React ,  { useState, useEffect } from 'react';
import axios from 'axios';
import Page from '../../../components/Page';
import Title from '../../../components/Title';
import Navi from '../../../components/Navi';
import Detail from '../../Detail';
import batterDB from '../../../json/select.json';
import { BATTER_API, batter_controller } from '../../../api/recycling';
import * as MyLayout from '../../../lib/Layout';

const Battery = () => {

    const [address, setAddress] = useState(null);
    const { startLoading , finishLoading } = MyLayout.useLoading();

    const handleChange = async(value) => {
          
        const new_value = value;
 
        if(!new_value) return;
        batter_controller(value);
        startLoading('데이터 불러오는 중...')
        try{
          const res = await axios.get(BATTER_API);
          const data = await res.data.data;
          
          setAddress(data);

        } catch(e){
            console.log('폐건전지오류')
            finishLoading()
        }
        finishLoading();
    }

    useEffect(() => {
 
          handleChange();

    },[address])
    return(
        <>
        <Page
          header={<Title backURL={'/recycling'}>폐건전지함</Title>}
          footer={<Navi/>}
          > 
           <Detail
           title={'구역을 선택해주세요.'}
           id={'battery'}
           list={batterDB.battery}
           onChange={(e) => handleChange(e.target.value)}
           >
           { address && (
             <ul>
                <h3 className='title'>총 {address.length} 곳이 검색되었습니다.</h3>
                {address.map((v,i) => (
                    <li key={'battery'+ i} style={{"padding" : "5px"}}>
                        {(v.구분 || v.수거함종류) && (<p>구분 : <strong>{v.구분 || v.수거함종류}</strong></p>)}
                        {(v.유형 || v.수거품목)&& (<p>유형 : <strong>{v.유형 || v.수거품목}</strong></p>)}
                        <p>위치 : <strong>{v.주소 || v.지번주소 || v.설치위치 || v.설치주소 || v.장소 || v.도로명주소}</strong></p>
                        {(v.세부위치 || v.설치건물 || v.상세위치)&& (<p><strong>{v.세부위치 || v.설치건물 || v.상세위치}</strong></p>)}
                        {(v.박스수량 || v.개수) && (<p>수량:<strong>{v.박스수량 || v.개수}</strong>개</p>)}
                        </li>
                ))}
             </ul>
           )}
           </Detail>
        </Page>
        </>
    )
}

export default Battery;
