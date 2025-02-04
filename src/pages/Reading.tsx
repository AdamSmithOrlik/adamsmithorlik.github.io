import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import "./Reading.css";

interface Book {
  id: string;
  title: string;
  author: string;
  date: string;
  rating: string;
  difficulty: string;
  subject: string;
  review: string;
  cover: string;
}

const Reading: React.FC = () => {
  const [books, setReadBooks] = useState<Book[]>([]);
  const [favbooks, setFavoriteBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Fetch Read Books
    fetch("/books/read-data.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load books metadata");
        return response.json();
      })
      .then((data) => setReadBooks(data))
      .catch((error) => console.error("Error loading book data:", error));

    // Fetch Favorite Books
    fetch("/books/favourites-data.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load favorite books");
        return response.json();
      })
      .then((data) => setFavoriteBooks(data))
      .catch((error) => console.error("Error loading favorite books:", error));
  }, []);

  return (
    <div className="reading-page">
      <h1>Reading</h1>

      <nav className="reading-nav">
        <a href="#books-read">Books Read</a>
        <a href="#favorites">Favourites</a>
        <a href="#to-read">To Read</a>
        <a href="#quotes">Quotes</a>
        <a href="#authors">Authors</a>
      </nav>

      <div id="books-read" className="reading-section">
        <h2>Books Read</h2>
        <div className="book-list">
          {books.map((book) => (
            <div key={book.id} className="book-entry">
              <img src={book.cover} alt={book.title} className="book-cover" />
              <div className="book-info">
                <h3>
                  <Markdown options={{ forceBlock: false }}>{book.title}</Markdown>
                </h3>
                <p className="book-meta">
                  <strong>{book.subject} </strong>
                  <strong> Date: {book.date}</strong>
                </p>
                <p className="book-meta">
                  <strong> Rating: {book.rating}/5 </strong>
                  <strong> Difficulty: {book.difficulty}/5 </strong>
                </p>
                <p className="book-review">{book.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="favorites" className="reading-section">
        <h2>Favourites</h2>
        <div className="book-list">
          {favbooks.map((favbooks) => (
            <div key={favbooks.id} className="book-entry">
              <img src={favbooks.cover} alt={favbooks.title} className="book-cover" />
              <div className="book-info">
                <h3>
                  <Markdown options={{ forceBlock: false }}>{favbooks.title}</Markdown>
                </h3>
                <p className="book-review">
                {Array.isArray(favbooks.review)
                  ? favbooks.review.map((para, index) => <p key={index}>{para}</p>) // Handle array of paragraphs
                  : favbooks.review.split("\n").map((para, index) => <p key={index}>{para}</p>)} 
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="to-read" className="reading-section">
        <h2>To Read</h2>
        <p>placeholder</p>
      </div>

      <div id="quotes" className="reading-section">
        <h2>Quotes</h2>
        <p>placeholder</p>
      </div>

      <div id="authors" className="reading-section">
        <h2>Authors</h2>
        <p>Coming soon...</p>
      </div>

    </div>
  );
};

export default Reading;



