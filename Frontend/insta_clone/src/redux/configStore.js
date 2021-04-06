import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";
import Comment from "./modules/comment";
import Post from "./modules/post";
import Like from "./modules/like";
import Friend from "./modules/friend";
import Image from "./modules/Image";

export const history = createBrowserHistory();

// rootReducer 만들기
const rootReducer = combineReducers({
  comment: Comment,
  user: User,
  post: Post,
  like: Like,
  friend: Friend,
  image: Image,
  router: connectRouter(history),
});

// 미들웨어 준비
const middlewares = [thunk.withExtraArgument({ history: history })];

// 현재 환경
const env = process.env.NODE_ENV;

// 개발환경에서만 로거 사용
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// redux devTools 설정

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// 미월웨어 묶기

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// 스토어 만들기

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
