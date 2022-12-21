// Author: Kyle Snow
// Software Development Semster 2
// Keyin College
// started: Dec 8, 2022
// Finished: Dec 20, 2022

// component to add posts to the feed page

import { useState } from "react";

const AddFeed = ({ onAdd }) => {
  // setting useStates to gather the info for the new post and append them to "feeds" in the json server

  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [body, setBody] = useState("");

  const [author, setAuthor] = useState("");
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  const onSubmit = (e) => {
    if (!title && !body) {
      alert("error- left blank");
      return;
    }
    onAdd({ author, title, picture, body, likes, comments });

    setTitle(""); // makes inputs box emty after submitting
    setPicture("");
    setBody("");

    setAuthor("");
    setLikes(0);
    setComments([]);

    e.preventDefault();
  };

  // returns a form to gather data for the new post

  return (
    <section className="form-container">
      <form className="theform" onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Name or Username</label>
          <input
            type="text"
            placeholder="Author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Picture</label>
          <input
            type="text"
            placeholder="Picture Link (URL)"
            className="form-control"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Body</label>
          <input
            type="text"
            placeholder="Body"
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <input type="submit" value="Post" className="form-control" />
      </form>
    </section>
  );
};

export default AddFeed;
