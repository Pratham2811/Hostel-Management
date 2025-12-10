import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HostelListPage } from './features/listings/pages/HostelListPage.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HostelDetails from './features/HostelDetails/components/HostelDetails.jsx'
import HostDetailspage from './features/HostelDetails/pages/HostDetailspage.jsx'
import HostelRegistrationPage from './features/hostels/pages/HostelRegisterPage.jsx'
function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<HostelListPage/>}/>
        <Route path='/api/v1/hostels' element={<HostelListPage/>}/>
          <Route path='/api/v1/hostels/:id' element={<HostDetailspage/>}/>
           <Route path='/api/v1/register-hostel' element={<HostelRegistrationPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
