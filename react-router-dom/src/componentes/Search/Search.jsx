import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

export const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?q=" + query);
  };

  return (
    <>
      <h1>Procurando por algum produto?</h1>
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value={"OK"} />
      </form>
    </>
  );
};
