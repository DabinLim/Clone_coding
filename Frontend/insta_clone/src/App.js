import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Main from './pages/Main';
import React from 'react';
import SignUp from './components/SignUp';
import NewPost from './pages/NewPost';
import {ConnectedRouter} from 'connected-react-router';
import {history} from './redux/configStore';


function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
      
      <BrowserRouter>
      <Route path='/' exact component={Main}/>
      <Route path='/newpost' exact component={NewPost}/>
      <Route path='/signup' exact component={SignUp}/>
      </BrowserRouter>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
