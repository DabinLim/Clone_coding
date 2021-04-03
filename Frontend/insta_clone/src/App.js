import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import React from "react";
import SignUp from "./components/SignUp";
import NewPost from "./pages/NewPost";
import PostWrite from "./pages/PostWrite";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";
import Header from './components/Header';
import {Grid} from './elements';
import Login from "./components/Login";
import {useSelector} from 'react-redux';

function App() {

  const is_login = useSelector(state => state.user.is_login)
  return (
    <React.Fragment>
      <Grid>
        {is_login? <Header/>: ''}
        <Grid padding={is_login? '55px 0px 0px 0px': ''}>
        <BrowserRouter>
      <ConnectedRouter history={history}>
          <Route path="/" exact component={Main} />
          <Route path="/Login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/newpost" exact component={NewPost} />
          <Route path="/postwrite" exact component={PostWrite} />
          <Route path="/signup" exact component={SignUp} />
      </ConnectedRouter>
        </BrowserRouter>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
