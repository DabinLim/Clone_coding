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

function App() {
  return (
    <React.Fragment>
      <Grid>
      <ConnectedRouter history={history}>
        <Header/>
        <Grid padding='55px 0px 0px 0px'>
        <BrowserRouter>
          <Route path="/" exact component={Main} />
          <Route path="/newpost" exact component={NewPost} />
          <Route path="/postwrite" exact component={PostWrite} />
          <Route path="/" exact component={Main} />
          <Route path="/newpost" exact component={NewPost} />
          <Route path="/signup" exact component={SignUp} />
        </BrowserRouter>
        </Grid>
      </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
