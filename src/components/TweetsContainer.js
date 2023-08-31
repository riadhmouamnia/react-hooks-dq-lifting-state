import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [user, setUser] = useState(users[0]);

  function handleTweetLike(tweetId) {
    const updatedUsers = users.map((userData) => {
      if (userData.id === user.id) {
        const updatedTweets = userData.tweets.map((tweet) => {
          if (tweet.id === tweetId) {
            return {
              ...tweet,
              favorite_count: tweet.favorite_count + 1,
            };
          }
          return tweet;
        });

        return {
          ...userData,
          tweets: updatedTweets,
        };
      }
      return userData;
    });

    setUsers(updatedUsers);

    // Update the local user state as well to trigger a re-render
    const updatedUser = updatedUsers.find(
      (userData) => userData.id === user.id
    );
    setUser(updatedUser);
  }

  function handleUserClick(userId) {
    const selectedUser = users.filter((user) => user.id === userId)[0];
    setUser(selectedUser);
  }

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} handleUserClick={handleUserClick} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={user} handleTweetLike={handleTweetLike} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
