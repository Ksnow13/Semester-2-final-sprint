// Author: Kyle Snow
// Software Development Semster 2
// Keyin College
// started: Dec 8, 2022
// Finished: Dec 20, 2022

// This is the Feed page
// Feedpage.jsx is the main componet that gets called in the App.js
// Components included to make this page work are: Banner.jsx, Header.jsx, Button.jsx, Feed.jsx, Feeds.jsx, AddFeed.jsx,

import "../styles/Feedpage.css";
import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";
import Feeds from "./Feeds";

import AddFeed from "./AddFeed";
import { useState, useEffect } from "react";

// main component

const Feedpage = () => {
  // useState's to set feeds and show add feed form

  const [feeds, setFeeds] = useState([]);
  const [showAddFeed, setShowAddFeed] = useState(false);

  // useEffect to gather feeds from json server

  useEffect(() => {
    const getFeeds = async () => {
      const feedsFromServer = await fetchFeeds();
      setFeeds(feedsFromServer);
    };

    getFeeds();
  }, []);

  // fetching feeds

  const fetchFeeds = async () => {
    const res = await fetch("http://localhost:5000/feeds");

    const data = await res.json();
    return data;
  };

  // function to add new posts using post method

  const addFeed = async (feed) => {
    const res = await fetch("http://localhost:5000/feeds", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(feed),
    });

    const data = await res.json();

    setFeeds([...feeds, data]);
  };

  // function to fetch posts my id's

  const fetchFeed = async (id) => {
    const res = await fetch(`http://localhost:5000/feeds/${id}`);
    const data = await res.json();
    return data;
  };

  // function to add likes to posts

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchFeed(id);
    const updTask = { ...taskToToggle, likes: (taskToToggle.likes += 1) };

    const res = await fetch(`http://localhost:5000/feeds/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setFeeds(
      feeds.map((feed) =>
        feed.id === id ? { ...feed, likes: data.likes } : feed
      )
    );
  };

  // function to add comments to posts

  const makeComment = async (id, x) => {
    const postToComment = await fetchFeed(id);
    const updPost = {
      ...postToComment,
      comments: postToComment.comments.concat(x),
    };

    const theComment = await fetch(`http://localhost:5000/feeds/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updPost),
    });

    const com = await theComment.json();

    setFeeds(
      feeds.map((feed) =>
        feed.id === id ? { ...feed, comments: com.comments } : feed
      )
    );
  };

  // function to find the person logging in and display them on the feeds page

  const [currentlogin, setLogin] = useState([]);

  useEffect(() => {
    const fetchPerson = async () => {
      const dataFromServer = await fetchPersonData();
      setLogin(dataFromServer);
    };
    fetchPerson();
  }, []);

  const fetchPersonData = async () => {
    const res = await fetch("http://localhost:5000/currentlogin");
    const data = await res.json();
    const totalUsers = Object.keys(data).length;

    const personLoggedIn = async (numOfLogins) => {
      const personsInfo = await fetch(
        `http://localhost:5000/currentlogin/${numOfLogins}`
      );
      const personsData = await personsInfo.json();

      return personsData;
    };

    var name = personLoggedIn(totalUsers);

    return name;
  };

  // the return of the Feedpage componet

  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="container">
        <h1 className="your-feed">{`Welcome to your feed ${currentlogin.userName} !`}</h1>

        <Header
          onAdd={() => setShowAddFeed(!showAddFeed)}
          showAdd={showAddFeed}
        />

        {showAddFeed && <AddFeed onAdd={addFeed} />}

        <Feeds feeds={feeds} onLike={toggleReminder} onComment={makeComment} />
        <Footer />
      </div>
    </>
  );
};

export default Feedpage;
