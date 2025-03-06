import React from "react";
import { useBooks } from "../Context/BookContext";

const BookItem = ({ book }) => {
  const { deleteBook, toggleStatus } = useBooks();

  return (
    <div className="col-md-6 py-2">
      <div className="card p-2 mb-2">
        <h5 className="mb-2">{book.title}</h5>
        <p>
          Author: <strong>{book.author}</strong>
        </p>
        <p>
          Status: <strong>{book.status}</strong>
        </p>
        <button
          className="btn btn-sm btn-warning me-2 form-control"
          onClick={() => toggleStatus(book.id)}
        >
          Mark as {book.status === "Read" ? "Unread" : "Read"}
        </button>
        <button
          className="btn btn-sm btn-danger form-control"
          onClick={() => deleteBook(book.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;
