import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LandingPagesScreen from './pages/LandingPagesScreen';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Services from './pages/Services';
import SharpLoginDesign from './pages/Login';
import SharpRegisterDesign from './pages/Register';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPagesScreen />} />
        <Route path="Aboutus" element={< Aboutus />} />
        <Route path="Contactus" element={< Contactus />} />
        <Route path="Services" element={< Services />} />
        <Route path="Login" element={< SharpLoginDesign />} />
        <Route path="Register" element={< SharpRegisterDesign/>} />
      </Routes>
    </div>
  )
}

export default App;
