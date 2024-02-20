 
 /* cloths */

 export let CLOTHAPI = ``;
 export const cloth_controller = async(value) => {

     const cloth_api = {
         
       dongdaemon :  "https://api.odcloud.kr/api/15112228/v1/uddi:67d42349-302e-40f6-af11-c496e532d090?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D",
       seodaemon : "https://api.odcloud.kr/api/15068863/v1/uddi:d306939e-fc51-4317-9fac-e8e610a02bb4?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D",
       gwanakgu : "https://api.odcloud.kr/api/15076398/v1/uddi:6dec2a8d-6404-4318-8767-85419b3c45a0?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D",
       gurogu : "https://api.odcloud.kr/api/15068871/v1/uddi:4205fe5b-ffe3-4730-a57e-afbd8c338dc7?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D",
       dongjakgu : "https://api.odcloud.kr/api/15068021/v1/uddi:11168719-6301-4ff2-873d-e44e26511d89?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D",
       yeongdeungpogu : "https://api.odcloud.kr/api/15106473/v1/uddi:c0982c3d-865d-4a96-897c-a67f24baeed5?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D",
       gwangjingu : "https://api.odcloud.kr/api/15109594/v1/uddi:d63e68bf-e03d-4d3c-a203-fd9add3d372c?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D",
       yangcheongu : "https://api.odcloud.kr/api/15105196/v1/uddi:bafee858-4544-4459-9a19-c186818a120f?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D",
       jongnogu : "https://api.odcloud.kr/api/15104622/v1/uddi:34ca4455-457d-4a50-ad1a-9b373f0f08eb?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D",
       geumcheongu : "https://api.odcloud.kr/api/15106679/v1/uddi:2a54e58d-6b54-46de-9de1-cc3a6887ccb8?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D"

     }

     if(value == 'Dongdaemun-gu') return CLOTHAPI = cloth_api.dongdaemon;
     else if(value == 'Seodaemun-gu') return CLOTHAPI = cloth_api.seodaemon;
     else if(value == 'Dongjak-gu') return CLOTHAPI = cloth_api.dongjakgu;
     else if(value == 'Gwanak-gu') return CLOTHAPI = cloth_api.gwanakgu;
     else if(value == 'Guro-gu') return CLOTHAPI = cloth_api.gurogu;
     else if(value == 'Yeongdeungpo-gu') return CLOTHAPI = cloth_api.yeongdeungpogu;
     else if(value == 'Gwangjin-gu') return  CLOTHAPI = cloth_api.gwangjingu;
     else if(value == 'Yangcheon-gu') return CLOTHAPI = cloth_api.yangcheongu;
     else if(value == 'Jongno-gu') return CLOTHAPI = cloth_api.jongnogu;
     else if(value == 'Geumcheon-gu') return CLOTHAPI = cloth_api.geumcheongu;
 }

 
 /* battery */

 export let BATTER_API = ``;
 export const batter_controller = async(value) => {

     const batter_api = {

      gangnamgu : `https://api.odcloud.kr/api/15038090/v1/uddi:254381dc-ecce-413b-a222-d70a2fceb2cd?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
      seongbukgu : `https://api.odcloud.kr/api/15038083/v1/uddi:302eeaec-65b4-469a-b6d6-c9de7080b1d4?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
      dongjakgu : `https://api.odcloud.kr/api/15038384/v1/uddi:81585802-7ce5-4157-8d60-9479424bdbc4?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
      gwangjingu : `https://api.odcloud.kr/api/15038095/v1/uddi:a737eb22-aec7-4970-9fe7-964c3d918bb1?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
      gwanakgu : `https://api.odcloud.kr/api/15038224/v1/uddi:4e0d26e6-83f0-40b7-9182-9a330c2edafb?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
      songpagu : `https://api.odcloud.kr/api/15038206/v1/uddi:0735463f-2f54-47c6-874f-c46f42c7201d?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
      jungnanggu: `https://api.odcloud.kr/api/15038000/v1/uddi:7ee716c9-a9ea-46d8-8c9c-e3e73ae72f67?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
      dongdaemungu : `https://api.odcloud.kr/api/15038091/v1/uddi:2636cb3c-30e3-4ce3-aca9-ca040f5deb27?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
      yeongdeungpogu : `https://api.odcloud.kr/api/15038093/v1/uddi:09db8c4d-fa37-4bfb-bddb-caabef8d2805?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
      seongdonggu : `https://api.odcloud.kr/api/15038110/v1/uddi:8ea07f7b-adcc-4095-a2cf-80e20a003bbe?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
      mapogu : `https://api.odcloud.kr/api/15113235/v1/uddi:83224b12-d479-4ad2-a3da-b52a769ec2da?page=1&perPage=10&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`

     }

     if(value === 'Mapo-gu') return BATTER_API = batter_api.mapogu;
     else if(value === 'Gwanak-gu') return BATTER_API = batter_api.gwanakgu;
     else if(value === 'Dongjak-gu') return BATTER_API = batter_api.dongjakgu;
     else if(value === 'Gangnam-gu') return BATTER_API = batter_api.gangnamgu;
     else if(value === 'Seongbuk-gu') return BATTER_API = batter_api.seongbukgu;
     else if(value === 'Gwangjin-gu') return BATTER_API = batter_api.gwangjingu;
     else if(value === 'Songpa-gu') return BATTER_API = batter_api.songpagu;
     else if(value === 'Jungnang-gu') return BATTER_API = batter_api.jungnanggu;
     else if(value === 'Dongdaemun-gu') return BATTER_API = batter_api.dongdaemungu;
     else if(value === 'Yeongdeungpo-gu') return BATTER_API = batter_api.yeongdeungpogu;
     else if(value === 'Seongdong-gu') return BATTER_API = batter_api.seongdonggu;
 }