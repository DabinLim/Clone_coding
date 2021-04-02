import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Main from './pages/Main';
import React from 'react';
import NewPost from './pages/NewPost';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Route path='/' exact component={Main}/>
      <Route path='/newpost' exact component={NewPost}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
