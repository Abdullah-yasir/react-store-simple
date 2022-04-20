import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './style.css';
import './App.css';

import Login from './auth/Login';
import Listing from './products/Listing';
import Signup from './auth/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
