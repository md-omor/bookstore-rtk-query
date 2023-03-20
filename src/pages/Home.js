import React from "react";
import Books from "../components/books/Books";

const Home = ({ inputText }) => {
  return (
    <>
      <Books inputText={inputText} />
    </>
  );
};

export default Home;
