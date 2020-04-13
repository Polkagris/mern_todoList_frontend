import React from "react";

import { useSelector } from "react-redux";

import { getArticles } from "../store/selectors";

function ListArticles() {
  const articles = useSelector(getArticles);

  console.log("articles:", articles);

  return (
    <ul>
      {articles.map((articles) => (
        <li key={articles.id}>{articles.title}</li>
      ))}
    </ul>
  );
}

export default ListArticles;
