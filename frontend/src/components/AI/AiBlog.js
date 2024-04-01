import React, { useState } from "react";
import axios from "axios";

const AiBlog = () => {
  const [context, setContext] = useState("");
  const [keywords, setKeywords] = useState("");
  const [keywordsArray, setKeywordsArray] = useState([]);
  const [title, setTitle] = useState("");

  const [responseData, setResponseData] = useState(null);

  const key = process.env.TEXT_CORTEX_API_KEY;

  const options = {
    method: "POST",
    url: "https://api.textcortex.com/v1/texts/blogs",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer gAAAAABmBzXRfMBvqM9yhw5jrOecm_Wgndfjyd3DIcFpF1rKWfnQgWOAsnrwijj6evam-Xof0onwE46lxZQSmoVxRdi630nANdlYmX4gweUcE8F0z0_V7s7D1XKxLbMLL5V0Sxvoc380",
    },
    data: {
      context: context,
      formality: "default",
      keywords: keywordsArray,
      max_tokens: 2048,
      model: "chat-sophos-1",
      n: 1,
      source_lang: "en",
      target_lang: "en",
      temperature: 0.65,
      title: title,
    },
  };

  const allKeywords = () => {
    setKeywordsArray([...keywordsArray, keywords]);
    setKeywords("");
  };

  const blogSubmit = (e) => {
    e.preventDefault();
    axios
      .request(options)
      .then((response) => {
        setResponseData(response.data);
        console.log(response.data);
        axios.post("http://localhost:5050/api/aipost", {
          context: context,
          formality: "default",
          keywords: keywordsArray,
          max_tokens: 2048,
          model: "chat-sophos-1",
          n: 1,
          source_lang: "en",
          target_lang: "en",
          temperature: 0.65,
          title: title,
          ai_Text: responseData.data.outputs[0].text,
        });
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    setKeywords("");
    setKeywordsArray([]);
  };

  console.log(keywordsArray);

  // console.log(responseData.data.outputs[0].text);
  return (
    <div>
      <h1>Create a blog with AI</h1>
      <form onSubmit={(e) => blogSubmit(e)}>
        <label>Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="insert title"
        ></input>
        <label>Add keywords to use</label>
        <input
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Provide keywords to be used"
        ></input>
        <button onClick={allKeywords} type="button">
          Add Keyword
        </button>
        <label>Provide some context</label>
        <input
          onChange={(e) => setContext(e.target.value)}
          placeholder="Add some context to give to the API"
        ></input>

        <input type="submit" value="Submit"></input>
      </form>
      <div>
        <h1>Ai generated blog:</h1>
        <div>
          <h1>{title}</h1>
          <h2>{context}</h2>
          <p>{responseData.data.outputs[0].text}</p>
        </div>
      </div>
    </div>
  );
};

export default AiBlog;
