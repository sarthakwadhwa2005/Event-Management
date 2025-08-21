import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css"; 

function Success() {
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success">
      <h1>Thank you for registering!</h1>
    </div>
  );
}

export default Success;