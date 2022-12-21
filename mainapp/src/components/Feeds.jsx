// Author: Kyle Snow
// Software Development Semster 2
// Keyin College
// started: Dec 8, 2022
// Finished: Dec 20, 2022

// component used for feedpage.jsx and feed.jsx to map all the post from "feeds" in json server

import Feed from "./Feed";

const Feeds = ({ feeds, onLike, onComment }) => {
  return (
    <>
      {feeds
        .slice(0)
        .reverse()
        .map((feed) => (
          <Feed
            key={feed.id}
            className="feed"
            feed={feed}
            onLike={onLike}
            onComment={onComment}
          />
        ))}
    </>
  );
};

export default Feeds;
