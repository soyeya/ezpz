import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/Page';
import Title from '../components/Title';


const Home = () => {

     return(
        <Page 
          header={<Title>이모저모 EZPZ</Title>}
          backColor
          >
          <div className="main">
              <span>이모저모 ezpz <em>생활속의 꿀팁_ 서울</em></span>
              <ul>
                 <li><Link to="/weather"><img src='/assets/img/weather.png' alt="weather1" />날씨<p>weather</p></Link></li>
                 <li><Link to="/subway"><img src='/assets/img/subway.png' alt="transport" />지하철<p>transport</p></Link></li>
                 <li><Link to="/recycling"><img src='/assets/img/trashcan.png' alt="trashcan" />분리수거<p>recycling</p></Link></li>
                 <li><Link to="/restaurant"><img src='/assets/img/restaurant.png' alt="restaurant" />음식점<p>restaurant</p></Link></li>
              </ul>
          </div>
          </Page>
     )
}

export default Home;