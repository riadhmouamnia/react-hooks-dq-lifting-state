import React from "react";
import UserCard from "./UserCard";

function UserList(props) {
  return (
    <div className="ui cards">
      {props.users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={props.handleUserClick}
          {...user}
        />
      ))}
    </div>
  );
}

export default UserList;
