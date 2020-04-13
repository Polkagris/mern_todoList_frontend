import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as A from "../store/actions";

function CreateArticle() {
  const [articleTitle, setArticleTitle] = useState("");

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(
      A.addArticles({
        id: "temp_id",
        title: articleTitle,
      })
    );

    setArticleTitle("");
  };

  const handleOnChange = (e) => {
    setArticleTitle(e.target.value);
  };

  return (
    <div>
      <h2>Create a new article</h2>

      <div>
        <label htmlFor="title">Title</label>
        <input type="text" value={articleTitle} onChange={handleOnChange} />
        <button onClick={handleOnClick}>Add</button>
      </div>
    </div>
  );
}

export default CreateArticle;
