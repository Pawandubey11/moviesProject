import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Loading = () => {
  const { nextUrl } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (nextUrl) {
      const timer = setTimeout(() => {
        navigate("/" + nextUrl);
      }, 8000);

      // cleanup if component unmounts early
      return () => clearTimeout(timer);
    }
  }, [nextUrl, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Loading... please wait</h2>
    </div>
  );
};

export default Loading;
