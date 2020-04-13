import * as A from "./actionTypes";
import { combineReducers } from "redux";

const initialArticleState = {
  articles: [],
};

const initialUserState = {
  isFetching: false,
  users: [],
};

const initialPostState = {
  isFetching: false,
  posts: [],
};

const initialTodoState = {
  isFetching: false,
  todos: [],
};

// Only returns the initial state
function rootReducer(state = initialArticleState, action) {
  if (action.type === A.ADD_ARTICLE) {
    return {
      articles: state.articles.concat(action.payload),
    };
  }
  return state;
}

function fetchReducer(state = initialUserState, action) {
  const { type, payload } = action;

  switch (type) {
    case A.FETCH_CONTENT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case A.FETCH_CONTENT_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    case A.FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        users: state.users.concat(payload),

        isFetching: false,
      };

    default:
      return state;
  }
}

function fetchPostReducer(state = initialPostState, action) {
  const { type, payload } = action;

  switch (type) {
    case A.FETCH_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case A.FETCH_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: state.posts.concat(payload),
      };

    case A.FETCH_POST_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}

// ------------------------- TODOS -------------------------
function fetchTodosReducer(state = initialTodoState, action) {
  const { type, payload } = action;

  switch (type) {
    case A.FETCH_TODO_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case A.FETCH_TODO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: state.todos.concat(payload),
      };

    case A.FETCH_TODO_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}

const comboReducer = combineReducers({
  rootReducer: rootReducer,
  fetchReducer: fetchReducer,
  fetchPostReducer: fetchPostReducer,
  fetchTodosReducer: fetchTodosReducer,
});

export default comboReducer;
