import { useBooks } from "../Context/BookContext";
import BookItem from "./BookItem";

const BookList = () => {
  const { filteredBooks } = useBooks();

  return (
    <div className="container mt-3 ">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => <BookItem key={book.id} book={book} />)
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default BookList;
