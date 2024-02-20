
const today = new Date();
let month = today.getMonth() + 1;
let years = today.getFullYear();
let dates = today.getDate();

const ResultToday = (...boxes) => {
    
     if(month < 10) {
        month = ['0'+ month];}

     if(dates < 10){
        dates = ['0'+ dates];}
    
     return [years]+[month]+[dates];
};

export const todayALL = String(ResultToday(month, years, dates));

let Hours = today.getHours();
let Minutes = today.getMinutes();

// const timeReset = () => {

//     if(Hours < 10){
//        Hours = '0' + Hours;
//     }
//     if(Minutes < 10){
//        Minutes = '0' + Minutes; 
//     }    
// };

let timeALL = [Hours] + [Minutes];
export const TimeTable = () => {


   if(Hours < 10){
      Hours = '0' + Hours;
   }
   if(Minutes < 10){
      Minutes = '0' + Minutes; 
   }    
     if(Minutes < 30){

        timeALL = [Hours - 1] + 30;
     }
     if(Minutes > 30){
        timeALL = [Hours] + 30;
     }
     return String(timeALL);

}


export let NOW_API = "";
export let DUST_API = `https://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D&returnType=json&numOfRows=100&pageNo=1&year=${years}`;

//select 박스값에 따른 api값 변경 
export const ApiInfo = async(value) => {

   const nx = [60, 55, 60, 60, 61 ,62, 62 ,61, 61, 59, 58, 58, 59, 59, 61, 61]; //위치 격자x
   const ny = [127, 124, 120, 126, 127 ,126, 128, 128, 129, 127, 126, 125, 124, 125, 125, 126]//위치 격자y
   const SERVICE_KEY = "hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D";
   const API_URL = {
      Jongnogu: `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[0]}&ny=${ny[0]}`,
      Junggu : `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[0]}&ny=${ny[0]}`,
      Yongsangu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[3]}&ny=${ny[3]}`,
      Seongdonggu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[4]}&ny=${ny[4]}`,
      Gwangjingu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[5]}&ny=${ny[5]}`,
      Dongdaemungu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[5]}&ny=${ny[5]}`,
      Jungnanggu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[6]}&ny=${ny[6]}`,
      Seongbukgu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[4]}&ny=${ny[4]}`,
      Gangbukgu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[7]}&ny=${ny[7]}`,
      Dobonggu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[8]}&ny=${ny[8]}`,
      Nowongu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[8]}&ny=${ny[8]}`,
      Eunpyeonggu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[9]}&ny=${ny[9]}`,
      Seodaemungu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[9]}&ny=${ny[9]}`,
      Mapogu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[9]}&ny=${ny[9]}`,
      Yangcheongu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[10]}&ny=${ny[10]}`,
      Gangseogu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[10]}&ny=${ny[10]}`,
      Gurogu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[11]}&ny=${ny[11]}`,
      Geumcheongu:`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[12]}&ny=${ny[12]}`,
      Yeongdeungpogu:`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[10]}&ny=${ny[10]}`,
      Dongjakgu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[13]}&ny=${ny[13]}`,
      Gwanakgu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[13]}&ny=${ny[13]}`,
      Seochogu:`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[14]}&ny=${ny[14]}`,
      Gangnamgu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[15]}&ny=${ny[15]}`,
      Songpagu :`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[5]}&ny=${ny[5]}`,
      Gangdonggu:`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=50&dataType=JSON&base_date=${todayALL}&base_time=${timeALL}&nx=${nx[5]}&ny=${ny[5]}`
   };

      
   const values = value;

   if(values == 'Jongno-gu'){
     NOW_API = API_URL.Jongnogu;
   }else if(values == 'Jung-gu'){
     NOW_API = API_URL.Junggu
   }else if(values == 'Yongsan-gu'){
     NOW_API = API_URL.Yongsangu;
   }else if(values == 'Seongdong-gu'){
      NOW_API = API_URL.Seongdonggu;
   }else if(values == 'Gwangjin-gu'){
      NOW_API = API_URL.Gwangjingu;
   }else if(values == 'Dongdaemun-gu'){
      NOW_API = API_URL.Dongdaemungu;
   }else if(values == 'Jungnang-gu'){
      NOW_API = API_URL.Jungnanggu;
   }else if(values == 'Seongbuk-gu'){
      NOW_API = API_URL.Seongbukgu;
   }else if(values == 'Gangbuk-gu'){
      NOW_API = API_URL.Gangbukgu;
   }else if(values == 'Dobong-gu'){
      NOW_API = API_URL.Dobonggu;
   }else if(values == 'Nowon-gu'){
      NOW_API = API_URL.Nowongu;
   }else if(values == 'Eunpyeong-gu'){
      NOW_API = API_URL.Eunpyeonggu;
   }else if(values == 'Seodaemun-gu'){
      NOW_API = API_URL.Seodaemungu;
   }else if(values == 'Mapo-gu'){
      NOW_API = API_URL.Mapogu;
   }else if(values == 'Yangcheon-gu'){
      NOW_API = API_URL.Yangcheongu;
   }else if(values == 'Gangseo-gu'){
      NOW_API = API_URL.Gangseogu;
   }else if(values == 'Guro-gu'){
      NOW_API = API_URL.Gurogu
   }else if(values == 'Geumcheon-gu'){
      NOW_API = API_URL.Geumcheongu
   }else if(values == 'Yeongdeungpo-gu'){
      NOW_API = API_URL.Yeongdeungpogu
   }else if(values == 'Dongjak-gu'){
      NOW_API = API_URL.Dongjakgu
   }else if(values == 'Gwanak-gu'){
      NOW_API = API_URL.Gwanakgu
   }else if(values == 'Seocho-gu'){
      NOW_API = API_URL.Seochogu
   }else if(values == 'Gangnam-gu'){
      NOW_API = API_URL.Gangnamgu
   }else if(values == 'Songpa-gu'){
      NOW_API = API_URL.Songpagu
   }else if(values == 'Gangdong-gu'){
      NOW_API = API_URL.Gangdonggu
   }

   console.log(NOW_API);
   
    
}



