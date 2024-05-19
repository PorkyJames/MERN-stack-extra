import React from 'react';
//! Routes has been swapped for Switch in react-router-dom v6
import { Router, Route, Routes } from "react-router-dom"

//! Import Components
import Login from './components/Login';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" component={Login} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
