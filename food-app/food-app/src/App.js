import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Items from './Components/Items';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/Items" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
