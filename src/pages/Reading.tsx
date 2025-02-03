import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import "./Reading.css";

interface Book {
  id: string;
  title: string;
  author: string;
  date: string;
  stars: string;
  subject: string;
  review: string;
  cover: string;
}

const Reading: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("/books/metadata.json") // Fetch JSON from public/books/
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load books metadata");
        }
        return response.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error loading book data:", error));
  }, []);

  return (
    <div className="reading-page">
      <h1>Books Read</h1>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-entry">
            <img src={book.cover} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3>
                <Markdown options={{ forceBlock: false }}>{book.title}</Markdown>
              </h3>
              <p className="book-meta">
                <strong>{book.subject}, </strong> 
                <strong> Date Finished: {book.date}</strong> 
              </p>
              <p className="book-rating"><strong>Rating:</strong> {book.stars}/5 </p>
              <p className="book-review">{book.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;