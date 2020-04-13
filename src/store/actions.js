import * as A from "./actionTypes";

export function addArticles(payload) {
  return { type: A.ADD_ARTICLE, payload };
}

export function fetchContentRequest(payload) {
  return {
    type: A.FETCH_CONTENT_REQUEST,

    payload,
  };
}

export function fetchContentSuccess(payload) {
  return { type: A.FETCH_CONTENT_SUCCESS, payload };
}

export function fetchContentFail(error) {
  return { type: A.FETCH_CONTENT_FAIL, error };
}

export function fetchPostRequest(payload) {
  return {
    type: A.FETCH_POST_REQUEST,

    payload,
  };
}

export function fetchPostSuccess(payload) {
  return {
    type: A.FETCH_POST_SUCCESS,

    payload,
  };
}

export function fetchPostFail(error) {
  return { type: A.FETCH_POST_FAIL, error };
}

// ------------------------- TODOS -------------------------
export function fetchTodoRequest(payload) {
  return {
    type: A.FETCH_TODO_REQUEST,
    payload,
  };
}

export function fetchTodoSuccess(payload) {
  return { type: A.FETCH_TODO_SUCCESS, payload };
}

export function fetchTodoFail(error) {
  return { type: A.FETCH_TODO_FAIL, error };
}
