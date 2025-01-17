import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/update/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "pop"}
              name="cat"
              value="pop"
              id="pop"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="pop">Pop</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "rock"}
              name="cat"
              value="rock"
              id="rock"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="rock">Rock</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "romantic"}
              name="cat"
              value="romantic"
              id="romantic"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="romantic">Romantic</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "indian"}
              name="cat"
              value="indian"
              id="indian"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="indian">Indian</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "kpop"}
              name="cat"
              value="kpop"
              id="kpop"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="kpop">K-pop</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "artists"}
              name="cat"
              value="artists"
              id="artists"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="artists">Artists</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;