import React from "react";
import CreateArticle from "../containers/CreateArticle";
import ListContainer from "../containers/ListArticlesContainer";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <CreateArticle />
      <ListContainer />
    </div>
  );
}

export default Home;
