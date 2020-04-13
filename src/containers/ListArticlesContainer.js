import React from "react";
import { useSelector } from "react-redux";
import ArticleList from "./ListArticles";
import { getArticles } from "../store/selectors";

const ListContainer = () => {
  const articles = useSelector(getArticles);

  return (
    <div>
      <h2>Articles</h2>
      <ArticleList articles={articles} />
    </div>
  );
};

export default ListContainer;
