import { ajax } from "rxjs/ajax";
import { of, throwError } from "rxjs";

export const fetchUser = (id) =>
  ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/${id}`);

export const fetchUserMockSuccess = (id) =>
  of({
    userId: 1,

    id: 1,

    title: "delectus aut autem",

    completed: false,
  });

export const fetchUserMockFail = () => {
  throwError("Could not fetch users");
};

// posts

export const fetchPost = (id) =>
  ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${id}`);

// ------------------------- TODOS -------------------------
export const fetchTodo = (id) => ajax.getJSON("http://localhost:5000/users");
