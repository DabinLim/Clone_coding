import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Main from './pages/Main';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Route path='/' exact component={Main}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
