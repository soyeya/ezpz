import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import '../src/css/main.css';
import Home from './pages/Home.jsx';
import Weather from './pages/Menu/Weather.jsx';
import Transport from './pages/Menu/Transport.jsx';
import Subway from './pages/Menu/Transport/Subway.jsx';
import Recycling from './pages/Menu/Recycling.jsx';
import Cloths from './pages/Menu/Recycling/Cloths.jsx';
import Battery from './pages/Menu/Recycling/Battery.jsx';
import Restaurant from './pages/Menu/Restaurant.jsx';
import KoreanFood from './pages/Menu/Restaurant/KoreanFood.jsx';
import JapaneseFood from './pages/Menu/Restaurant/JapanFood.jsx';
import ChinseFood from './pages/Menu/Restaurant/ChinaFood.jsx';
import AmericanFood from './pages/Menu/Restaurant/AmericanFood.jsx';
import * as MyLayout from './lib/Layout.jsx';

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MyLayout.Layout>
       <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/weather"} element={<Weather />}></Route>
        <Route path={"/transport"} element={<Transport />}></Route>
        <Route path={"/subway"} element={<Subway />}></Route>
        <Route path={"/restaurant"} element={<Restaurant />}></Route>
        <Route path={"/korean"} element={<KoreanFood />}></Route>
        <Route path={"/japan"} element={<JapaneseFood />}></Route>
        <Route path={"/china"} element={<ChinseFood />}></Route>
        <Route path={"/american"} element={<AmericanFood />}></Route>
        <Route path={"/recycling"} element={<Recycling />}></Route>
        <Route path={"/cloths"} element={<Cloths />}></Route>
        <Route path={"/battery"} element={<Battery />}></Route>
       </Routes>
       </MyLayout.Layout>
      </BrowserRouter>
  );
}

export default App;
