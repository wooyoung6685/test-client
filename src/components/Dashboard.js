import React from "react";
import axios from "axios";

const Dashboard = ({ user }) => {
  const createSheet = () => {
    axios
      .post(
        "http://localhost:5003/api/create-sheet",
        {},
        { withCredentials: true }
      )
      .then((res) => window.open(res.data.url))
      .catch((err) => console.error("Failed to create sheet:", err));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, {user.displayName}</h1>
      <button onClick={createSheet}>Create Google Sheet</button>
    </div>
  );
};

export default Dashboard;
