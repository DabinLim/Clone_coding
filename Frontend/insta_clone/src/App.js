import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import React from "react";
import NewPost from "./pages/NewPost";
import PostWrite from "./pages/PostWrite";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/newpost" exact component={NewPost} />
        <Route path="/postwrite" exact component={PostWrite} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
