import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "http://localhost:3000/login";
      return;
    }

    axios
      .get("http://localhost:3002/verify-token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setIsAuthenticated(true);
        setLoading(false);
      })
     .catch((error) => {
  console.log("AUTH ERROR:", error.response?.status);
  console.log("AUTH RESPONSE:", error.response?.data);
  console.log("TOKEN:", token);

  localStorage.removeItem("token");
  window.location.href = "http://localhost:3000/login";
});
  }, []);

  if (loading) {
    return <h2>Checking authorization...</h2>;
  }

  return (
    <BrowserRouter>
      {isAuthenticated && (
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);