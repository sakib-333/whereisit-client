import { Simple404 } from "@404pagez/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="border-2 w-full h-screen flex items-center justify-center bg-base-200">
      <Simple404 size={20} isButton={true} onButtonClick={() => navigate(-1)} />
    </div>
  );
};

export default NotFoundPage;
