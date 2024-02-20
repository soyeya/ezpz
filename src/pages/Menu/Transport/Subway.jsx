import React , { useState, useEffect } from 'react';
import axios from 'axios';
import Page from "../../../components/Page"
import Title from "../../../components/Title"
import Navi from "../../../components/Navi";
import Detail from "../../Detail";
import subwayDB from '../../../json/select.json';
import { subwayAPI , subWayLine } from '../../../api/transport';
import * as MyLayout from '../../../lib/Layout';

const Subway = () => {

    const { startLoading, finishLoading } = MyLayout.useLoading();
    const [statnTnm_1, setStatnTnm_1] = useState(null);
    const [statnNm_1, setStatnNm_1] = useState(null);
    const [directAt_1, setdirectAt_1] = useState(null);
    const [trainSttus_1, setTrainSttus_1] = useState(null);
    const [stateTEXT_1, setStateTEXT_1] = useState(null);
    const [statnTnm_2, setStatnTnm_2] = useState(null);
    const [statnNm_2, setStatnNm_2] = useState(null);
    const [directAt_2, setdirectAt_2] = useState(null);
    const [trainSttus_2, setTrainSttus_2] = useState(null);
    const [stateTEXT_2, setStateTEXT_2] = useState(null);
    const [nextTrain1, setNestTrain1] = useState(null);
    const [nextTrain2, setNestTrain2] = useState(null);
    const [today, setToday] = useState(null);




    const trainState1 = () => {

         if(trainSttus_1 == null) return setStateTEXT_1(null);
         if(trainSttus_1 == 0){
            setStateTEXT_1("진입");
         }else if(trainSttus_1 == 1){
            setStateTEXT_1("도착");
         }else if(trainSttus_1 == 2){
            setStateTEXT_1("출발");
         }else if(trainSttus_1 == 3){
            setStateTEXT_1("전역출발");
         }
    }

    const trainState2 = () => {

         if(trainSttus_2 == null) return setStateTEXT_2(null);
         if(trainSttus_2 == 0){
            setStateTEXT_2("진입");
         }else if(trainSttus_2 == 1){
            setStateTEXT_2("도착");
         }else if(trainSttus_2 == 2){
            setStateTEXT_2("출발");
         }else if(trainSttus_2 == 3){
            setStateTEXT_2("전역출발");
         }
    }

    const handleClick = async(value) => {

          const new_value = value;
          if(!new_value) return trainState1(), trainState2();
          subWayLine(new_value);
          startLoading('데이터 불러오는 중...')

          try{

            const res = await axios.get(subwayAPI);
            console.log(res.data);
            const firstSpot = await res.data.realtimePositionList[0];
            const secondSpot = await res.data.realtimePositionList[1];
            const nextStation1 = await res.data.realtimePositionList[2];
            const nextStation2 = await res.data.realtimePositionList[3];

            if(firstSpot){

                setToday(firstSpot.lastRecptnDt);//오늘날짜
                setStatnTnm_1(firstSpot.statnTnm); //종착역1번
                setStatnNm_1(firstSpot.statnNm); //현재역
                setdirectAt_1(firstSpot.directAt); //급행여부
                setTrainSttus_1(firstSpot.trainSttus); //열차상태

            }else setStatnTnm_1 (false);

            if(secondSpot){
                
                setStatnTnm_2(secondSpot.statnTnm); //종착역1번
                setStatnNm_2(secondSpot.statnNm); //현재역
                setdirectAt_2(secondSpot.directAt); //급행여부
                setTrainSttus_2(secondSpot.trainSttus); //열차상태

            }else setStatnTnm_2(false);

            if(nextStation1) setNestTrain1(nextStation1.statnNm);//다음열차 위치
            if(nextStation2) setNestTrain2(nextStation2.statnNm);//다음열차 위치

            trainState1();
            trainState2();

          }catch(e){

            console.log('오류');
            finishLoading();
          }

          finishLoading();

    }

    useEffect(() => {
      
        handleClick();

    },[])
    
    return(
        <>
         <Page header={<Title backURL={'/'}>지하철</Title>}>
            <Detail 
             title={'호선을 선택해주세요'}
             id={'transport'}
             list={subwayDB.subway}
             onChange={(e) => handleClick(e.target.value)}
             >
                { statnTnm_1 && (
                    <ul>
                        <li style={{"letterSpacing" : "2px" , "fontWeight" : "lighter" , "fontSize" : "0.8em" , "marginBottom" : "10px"}}>{today} 운행정보</li>
                        <li><h3>{statnTnm_1}방면 {directAt_1 == 1 && '급행'}</h3> 열차가 <strong>{stateTEXT_1}</strong>했습니다</li>
                        <li>현재역은 <strong>{statnNm_1}</strong> 입니다</li>
                        <li>다음열차는<strong>{nextTrain1}</strong>역에 있습니다</li>
                    </ul> )}
                   {statnTnm_2 &&  (<ul>
                        <li style={{"letterSpacing" : "2px" , "fontWeight" : "lighter" , "fontSize" : "0.8em" , "marginBottom" : "10px"}}>{today} 운행정보</li>
                        <li><h3>{statnTnm_2}방면 {directAt_2 == 1 && '급행'}</h3> 열차가 <strong>{stateTEXT_2}</strong>했습니다</li>
                        <li>현재역은 <strong>{statnNm_2}</strong> 입니다</li>
                        <li>다음열차는<strong>{nextTrain2}</strong>역에 있습니다</li>
                    </ul>)}
             </Detail>
         </Page>
        </>
    )
}

export default Subway;