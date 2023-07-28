import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";

const DummyPage = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <h1>Welcome {user.username}</h1>
      <h2>Welcome to your profile</h2>
    </div>
  );
};

export default DummyPage;
