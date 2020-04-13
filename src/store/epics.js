import * as T from "./actionTypes";
import * as A from "./actions";
import { ofType } from "redux-observable";
import { map, catchError, mergeMap, tap, takeUntil } from "rxjs/operators";
import {
  fetchUser,
  fetchUserMockSuccess,
  fetchUserMockFail,
  fetchPost,
  fetchTodo,
} from "../api/api";

import { of } from "rxjs";

export function fetchUserEpic(
  action$,
  state$,
  { fetch = fetchUserMockSuccess }
) {
  return action$.pipe(
    ofType(T.FETCH_CONTENT_REQUEST),

    mergeMap((action) => {
      return fetch(action.payload).pipe(
        map((response) => A.fetchContentSuccess(response)),

        catchError((error) => of(A.fetchContentFail(error)))
      );
    })
  );
}

export function fetchPostEpic(action$, state$, { fetch = fetchPost }) {
  return action$.pipe(
    ofType(T.FETCH_POST_REQUEST),

    mergeMap((action) => {
      return fetch(action.payload).pipe(
        map((response) => A.fetchPostSuccess(response)),

        catchError((error) => of(A.fetchPostFail(error)))
      );
    })
  );
}
// ------------------------- TODOS -------------------------
export function fetchTodoEpic(action$, state$, { fetch = fetchTodo }) {
  return action$.pipe(
    ofType(T.FETCH_TODO_REQUEST),

    mergeMap((action) => {
      return fetch(action.payload).pipe(
        map((response) => A.fetchTodoSuccess(response)),

        catchError((error) => of(A.fetchTodoFail(error)))
      );
    })
  );
}
