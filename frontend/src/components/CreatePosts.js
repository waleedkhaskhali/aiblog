import { useState, React } from "react";
import axios from "axios";
import AiBlog from "./AI/AiBlog";

const CreatePosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");

  let blogObject = {
    title: title,
    content: content,
    author: author,
    tags: tags,
  };

  const blogSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5050/api/post", blogObject);
  };

  return (
    <div>
      <h1>Create Posts</h1>
      <form onSubmit={(e) => blogSubmit(e)}>
        <label>Author</label>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Write away"
        ></input>
        <label>Title</label>
        <input
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write away"
        ></input>
        <label>Blog</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write away"
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
      <AiBlog />
    </div>
  );
};

export default CreatePosts;
