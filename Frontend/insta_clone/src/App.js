import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import React from "react";
import SignUp from "./components/SignUp";
import NewPost from "./pages/NewPost";
import PostWrite from "./pages/PostWrite";
import Profile from "./pages/Profile";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";
import Header from "./components/Header";
import { Grid } from "./elements";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import {actionCreators as userActions} from './redux/modules/user';

function App() {
  const dispatch = useDispatch();
  const is_session = sessionStorage.getItem('token')? true: false;
  const token = sessionStorage.getItem('token')
  const is_login = useSelector((state) => state.user.is_login);
  React.useEffect(()=> {
    dispatch(userActions.loginCheck(is_session, token))
  })
  console.log(history)
  if(token && history.location.pathname === '/'){
    history.push('/newpost')
  }
  return (
    <React.Fragment>
      <Grid>
        {is_login ? <Header /> : ""}
        <Grid padding={is_login ? "55px 0px 0px 0px" : ""}>
          <BrowserRouter>
            <ConnectedRouter history={history} is_login={is_login}>
              <Route path="/" exact component={Main} />
              <Route path="/newpost" exact component={NewPost} />
              <Route path="/postwrite" exact component={PostWrite} />
              <Route path="/profile" exact component={Profile} />
            </ConnectedRouter>
          </BrowserRouter>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
