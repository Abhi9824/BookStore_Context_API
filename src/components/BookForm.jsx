import React, { useState } from "react";
import { useBooks } from "../Context/BookContext";
import { useNavigate } from "react-router-dom";

const BookForm = () => {
  const { addBook } = useBooks();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: "", author: "", status: "Unread" });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!book.title || !book.author) return;
    addBook({ ...book, id: Date.now() });
    navigate("/");
  };

  return (
    <div className="container mt-3">
      <h2>Add a New Book</h2>
      <form onSubmit={submitHandler}>
        <input
          className="form-control mb-2"
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
          required
        />
        <select
          className="form-control mb-2"
          name="status"
          onChange={handleChange}
        >
          <option value="" disabled>
            Status
          </option>
          <option value="Unread">Unread</option>
          <option value="Read">Read</option>
        </select>
        <button className="btn btn-primary" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
