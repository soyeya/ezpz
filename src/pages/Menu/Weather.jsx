import React ,  { useState, useEffect } from 'react';
import axios from 'axios';
import Detail from '../Detail';
import Page from '../../components/Page';
import Title from '../../components/Title';
import selectDB from '../../json/select.json';
import weatherIMG from '../../json/weatherIMG.json';
import { ApiInfo, NOW_API , TimeTable  , todayALL , DUST_API } from '../../api/weather';
import * as MyLayout from '../../lib/Layout';
import Errordialog from '../../components/Errordialog';

const Weather = () => {

    const [PTY , setPTY] = useState(null);
    const [SKY , setSKY] = useState(null);
    const [T1H , setT1H] = useState(null);
    const [REH , setREH] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);
    const [dry , setDry] = useState(null);
    const [ptyState, setPtystate] = useState(null);
    const [dust , setDust] = useState(null);
    const [region , setRegion] = useState(null);
    const { startLoading, finishLoading } = MyLayout.useLoading();
    
    const handleClick = async(value) => {
       
        const new_value = value;

        if(!new_value) return SkyController(), PtyController();

        setRegion(new_value);
        TimeTable();
        ApiInfo(new_value);
        startLoading('데이터 불러오는 중...');

        try{

         const res = await axios.get(NOW_API);
         const dustRes = await axios.get(DUST_API);
         const data01 = await res.data;
         console.log(data01);
         const data02 = await dustRes.data;
         
         setPTY(data01.response.body.items.item[6].fcstValue); //강수량
         setSKY(data01.response.body.items.item[18].fcstValue); //하늘상태
         setT1H(data01.response.body.items.item[24].fcstValue); //온도
         setREH(data01.response.body.items.item[31].fcstValue); //습도
         setDust(data02.response.body.items[3].issueGbn);
         SkyController();
         PtyController();
        

        }catch(e){
    
            console.log('error');
            finishLoading();
            
        }
        finishLoading();
    
    }

    const SkyController = () => {

        if(SKY == null) return;
        if(SKY == "1"){
            return setWeatherIcon(weatherIMG.SKY[0]);
        }
        else if(SKY == "3"){
            return setWeatherIcon(weatherIMG.SKY[1]);
        }else if(SKY == "4"){
            return setWeatherIcon(weatherIMG.SKY[2]);
        }return;
    
    }

    const PtyController = () => {

        if(PTY == null) return;
        if(PTY == "0") return setPtystate("없습니다"), setDry("빨래건조를 추천합니다.");
        else if(PTY == "1") return setPtystate("비소식 있습니다"), setDry("빨래건조를 다음으로 미루는게 좋습니다.");
        else if(PTY == "2") return setPtystate("비 또는 눈"), setDry("빨래건조를 추천하지 않습니다.");
        else if(PTY == "3") return setPtystate("눈"), setDry("빨래건조를 추천하지 않습니다.");
        else if(PTY == "4") return setPtystate("소나기"), setDry("빨래건조를 추천하지 않습니다.");
        else if(PTY == "5") return setPtystate("빗방울"), setDry("빨래건조를 추천하지 않습니다.");
        else if(PTY == "6") return setPtystate("빗방울 또는 눈날림"), setDry("빨래건조를 추천하지 않습니다.");
        else if(PTY == "7") return setPtystate("눈날림"), setDry("빨래건조를 추천하지 않습니다.")
        return;
    }
    
        useEffect(() => {

            handleClick();
     
        },[]);
        
    return(
  
        <Page
          header={<Title backURL={'/'}>날씨</Title>}
        >
            <Detail 
            title={'구역을 선택해주세요'}
            id={'weather'}
            list={selectDB.weather}
            onChange={(e) => handleClick(e.target.value)}>
            { PTY && (
            <ul>
                <li><h3>{region}</h3></li>
                <li><strong className='today'>TODAY IS {todayALL}</strong></li>
                <li>오늘의 날씨는<img src={`/assets/img/${weatherIcon}`} alt="weatherIcon" /></li>
                <li>미세먼지 <strong>{dust}</strong> 입니다</li>
                <li>현재 강수량 <strong>{ptyState}</strong></li>
                <li>현재 온도는 <strong>{T1H}°C</strong> 입니다</li>
                <li>현재 습도는 <strong>{REH}%</strong> 입니다</li>
                <li>{dry}</li>
            </ul> )}
            </Detail>
        </Page>
 
    )
}
export default Weather;