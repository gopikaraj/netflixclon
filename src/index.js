import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import SectionWrapper from './components/SectionWrapper';
// import ModuleWrapper from './components/ModuleWrapper';

export default function RoutingModule(){
  return (
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/home' element={<Hero/>}/>
      <Route path='/sections/:param/:id' element={<SectionWrapper/>} />  
    </Routes>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutingModule/>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
