import React from 'react';
//! Routes has been swapped for Switch in react-router-dom v6
import { Route, Routes, BrowserRouter } from "react-router-dom"

//! Import Components
import Login from './components/Login';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Login /> } />
    </Routes>
    </>
  );
}

export default App;
