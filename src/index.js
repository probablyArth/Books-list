import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <div className="main">
      <h1>Bestsellers in Books</h1>
      <div className="books">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg"
    alt="Book"
  />
);

const Title = () => {
  return <h1>Atomic Habits</h1>;
};

const Author = () => {
  return <h4>James Clear</h4>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
