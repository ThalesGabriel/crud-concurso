import React from 'react';

import Home from './components/home/index'
import Navbar from './components/navbar/index'
import Footer from './components/footer/index'
import Login from './components/login/index'

function App() {
  return (
    <div>
      <Navbar/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
