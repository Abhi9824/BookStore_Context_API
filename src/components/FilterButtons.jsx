import React from "react";
import { useBooks } from "../Context/BookContext";

const FilterButtons = () => {
  const { books, filter, setFilter } = useBooks();

  return (
    <div className="container">
      <div className="btn-group mb-3">
        <button
          className={`btn ${filter === "All" ? "btn-dark" : "btn-primary"}`}
          onClick={() => setFilter("All")}
        >
          All Books ({books.length})
        </button>
        <button
          className={`btn ${filter === "Read" ? "btn-dark" : "btn-success"}`}
          onClick={() => setFilter("Read")}
        >
          Read ({books.filter((b) => b.status === "Read").length})
        </button>
        <button
          className={`btn ${
            filter === "Unread" ? "btn-dark" : "btn-secondary"
          }`}
          onClick={() => setFilter("Unread")}
        >
          Unread ({books.filter((b) => b.status === "Unread").length})
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;
