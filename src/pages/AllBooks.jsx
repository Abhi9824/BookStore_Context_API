import React from "react";
import FilterButtons from "../components/FilterButtons";
import BookList from "../components/BookList";

const AllBooks = () => {
  return (
    <>
      <FilterButtons />
      <BookList />
    </>
  );
};

export default AllBooks;
