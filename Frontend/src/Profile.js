import React, { useState, useEffect } from "react";
import axios from "axios";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "./Slice/userSlice";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [studentDetails, setStudentDetails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/applicants")
      .then((response) => {
        setStudentDetails(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div className="parent">
      <div className="profile-container">
        {studentDetails.map((e) => (
          <div className="profile-header">
            <h1>Welcome, {e.firstName}!</h1>
            <p>Email: {e.email}</p>
            <p>Phone Number: {e.phoneNumber}</p>
          </div>
        ))}
      </div>
      <button
        className="btn-1"
        onClick={() => {
          navigate("/");
        }}
        type="submit"
      >
        Proceed to Home Page
      </button>
    </div>
  );
};

export default ProfilePage;
