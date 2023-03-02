import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import { Header, Footer, NotFound } from '../components';
import Cases from '../pages/Cases';
import Team from '../pages/Team';
import NewCase from '../pages/NewCase';
import DetectiveDetails from '../pages/DetectiveDetails';
import CaseDetails from '../pages/CaseDetails';

const Index = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/team' element={<Team />}/>
            <Route path='/cases' element={<Cases />}/>
            <Route path='/new-case' element={<NewCase />}/>
            <Route path='/detective' element={<DetectiveDetails />}/>
            <Route path='/edit-case' element={<CaseDetails />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Index