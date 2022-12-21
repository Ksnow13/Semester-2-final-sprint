// Author: Kyle Snow
// Software Development Semster 2
// Keyin College
// started: Dec 8, 2022
// Finished: Dec 20, 2022

// component used by Feedpage.jxs to display the layout and add comments/likes to posts

import Button from "./Button";

import { useState } from "react";

const Feed = ({ feed, onLike, onComment }) => {
  // creating useState for saving comments

  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  if (feed.picture === "") {
    return (
      <div className="post-container">
        <h2 className="post-username">{feed.author}</h2>
        <p className="post-title">{feed.title}</p>
        <p className="post-para">{feed.body}</p>
        <Button
          text={"Like"}
          onClick={() => onLike(feed.id)}
          className="like-btn"
          color={"#7347b9"}
        />
        <input type="text" onChange={handleMessage} className="comment-bar" />
        <Button
          text={"comment"}
          onClick={() => onComment(feed.id, message)}
          className="comment-btn"
          color={"#7347b9"}
        />

        <div className="like-comment">
          <h4 className="comments">Comments:</h4>
          <h4 className="likes">Likes: {feed.likes}</h4>
        </div>

        <div className="post-comments">
          {feed.comments.length === 0 ? (
            "no comments yet"
          ) : (
            <ul>
              {feed.comments.map((coms) => (
                <li>{coms}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="post-container">
        <h2 className="post-username">{feed.author}</h2>
        <p className="post-title">{feed.title}</p>
        <img src={feed.picture} alt="picture not found" className="post-pic" />
        <p className="post-para">{feed.body}</p>
        <Button
          text={"Like"}
          onClick={() => onLike(feed.id)}
          className="like-btn"
          color={"#7347b9"}
        />
        <input type="text" onChange={handleMessage} className="comment-bar" />
        <Button
          text={"comment"}
          onClick={() => onComment(feed.id, message)}
          className="comment-btn"
          color={"#7347b9"}
        />
        <div className="like-comment">
          <h4 className="comments">Comments:</h4>
          <h4 className="likes">Likes: {feed.likes}</h4>
        </div>

        <div className="post-comments">
          {feed.comments.length === 0 ? (
            "no comments yet"
          ) : (
            <ul>
              {feed.comments.map((coms) => (
                <li>{coms}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
};

export default Feed;
