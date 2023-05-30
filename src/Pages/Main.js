import React from 'react'
import Home  from './Home/Home'
import Map  from './MapFolder/Map'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Index';
import Register from './Register/Index'
import Admin from './Admin/Admin';
import Dashboard from "../componant/AdminPanal/Pages/Dashboard"
import RequestForAdmin from "../componant/AdminPanal/Pages/RequestForAdmin"
import UploadMaterial from '../componant/AdminPanal/Pages/UploadMaterial';
import StudyMaterial from './Study_Material/StudyMaterial';
import TimeTable from './Time Table/Time_Table'
import DeleteStudyMaterial from '../componant/AdminPanal/Pages/DeleteMaterial';
import Team from '../componant/AdminPanal/Pages/Team';
import Bot from './ChatBot/Bot';
// import Home from './Home/Home';

function Main() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/adminLogin" element={<Login/>}/>
        <Route path="/adminRegister" element={<Register/>}/>
        <Route path="/adminPanal" element={<Admin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/adminRequest" element={<RequestForAdmin/>}/>
        <Route path="/UploadMaterial" element={<UploadMaterial/>}/>
        <Route path="/studyMaterial" element={<StudyMaterial/>}/>
        <Route path="/TimeTable" element={<TimeTable/>}/>
        <Route path="/deleteStudyMaterial" element={<DeleteStudyMaterial/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/googleMap" element={<Map/>}/>
        <Route path="/chatBot" element={<Bot/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default Main