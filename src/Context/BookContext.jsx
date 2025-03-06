import { useEffect, useState, useContext, createContext } from "react";

export const BookContext = createContext();
export const useBooks = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    // Load books from localStorage on initial render
    const savedBooks = JSON.parse(localStorage.getItem("books"));
    return savedBooks || [];
  });

  const [filter, setFilter] = useState("All");

  // Syncing books to localStorage whenever books state changes
  useEffect(() => {
    if (books.length > 0) {
      localStorage.setItem("books", JSON.stringify(books));
    }
  }, [books]);

  // Add a new book
  const addBook = (newBook) => setBooks([...books, newBook]);

  // Toggle read/unread status
  const toggleStatus = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, status: book.status === "Read" ? "Unread" : "Read" }
          : book
      )
    );
  };

  // Delete a book
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks =
    filter === "All" ? books : books.filter((book) => book.status === filter);

  return (
    <BookContext.Provider
      value={{
        books,
        deleteBook,
        addBook,
        toggleStatus,
        filteredBooks,
        filter,
        setFilter,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
