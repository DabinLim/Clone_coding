import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import React from "react";
import SignUp from "./components/SignUp";
import NewPost from "./pages/NewPost";
import FollowingPost from "./pages/FollowingPost";
import PostWrite from "./pages/PostWrite";
import Profile from "./pages/Profile";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";
import Header from "./components/Header";
import { Grid } from "./elements";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "./redux/modules/user";
import PostDetail from "./components/PostDetail";
import FriendsProfile from "./pages/FriendsProfile";

function App() {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");
  const is_session = token ? true : false;
  // 로그인 상태를 확인하기 위해 user state의 is_login 확인
  const is_login = useSelector((state) => state.user.is_login);
  React.useEffect(() => {
    // 렌더링 되면 로그인상태부터 확인
    dispatch(userActions.loginCheck(is_session, token));
  });
  // console.log(history);
  // 토근이 있는데 로그인 화면일 경우 newPost 화면으로 이동
  if (token && history.location.pathname === "/") {
    history.push("/newpost");
  }
  return (
    <React.Fragment>
      <Grid>
        {/* 로그인 상태 일때만 헤더를 렌더링하고 padding값을 준다. */}
        {is_login ? <Header /> : ""}
        <Grid padding={is_login ? "55px 0px 0px 0px" : ""}>
          <BrowserRouter>
            <ConnectedRouter history={history} is_login={is_login}>
              <Route path="/" exact component={Main} />
              <Route path="/newpost" exact component={NewPost} />
              <Route path="/followingpost" exact component={FollowingPost} />
              <Route path="/postwrite" exact component={PostWrite} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/postdetail/:id" exact component={PostDetail} />
              <Route path="/friends/:id" exact component={FriendsProfile} />
            </ConnectedRouter>
          </BrowserRouter>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
