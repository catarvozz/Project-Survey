import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SesiSatuSurveySatu from './Pages/sesi_1/survey1';
import SesiSatuSurveyDua from './Pages/sesi_1/survey2';
import SesiSatuSurveyTiga from './Pages/sesi_1/survey3';
import SesiSatuSurveyEmpat from './Pages/sesi_1/survey4';
import SesiSatuSurveyLima from './Pages/sesi_1/survey5';
import SesiSatuSurveyKomentar from './Pages/sesi_1/comment';
import SesiDuaKunjunganSatu from './Pages/sesi_2/kunjungan1';
import SesiDuaKunjunganDua from './Pages/sesi_2/kunjungan2';
import SesiDuaKunjunganTiga from './Pages/sesi_2/kunjungan3';
import SesiDuaKunjunganAlasan from './Pages/sesi_2/alasan';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path='/survey1' element={<SesiSatuSurveySatu/>} />
            <Route path='/survey2' element={<SesiSatuSurveyDua/>} />
            <Route path='/survey3' element={<SesiSatuSurveyTiga/>} />
            <Route path='/survey4' element={<SesiSatuSurveyEmpat/>} />
            <Route path='/survey5' element={<SesiSatuSurveyLima/>} />
            <Route path='/comment' element={<SesiSatuSurveyKomentar/>} />
            <Route path='/kunjungan1' element={<SesiDuaKunjunganSatu/>} />
            <Route path='/kunjungan2' element={<SesiDuaKunjunganDua/>} />
            <Route path='/kunjungan3' element={<SesiDuaKunjunganTiga/>} />
            <Route path='/alasan' element={<SesiDuaKunjunganAlasan/>} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
