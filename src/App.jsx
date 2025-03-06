import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BookProvider } from "./Context/BookContext";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <BookProvider>
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<AllBooks />} />
            <Route path="/add" element={<AddBook />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
