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

// Keep anchor links useful even when their target section is collapsed.
const openReadingSection = (hash: string) => {
  const section = document.getElementById(hash.slice(1));
  if (section instanceof HTMLDetailsElement) {
    section.open = true;
  }
};

const Reading: React.FC = () => {
  const [books, setReadBooks] = useState<Book[]>([]);
  const [favbooks, setFavoriteBooks] = useState<Book[]>([]);

  useEffect(() => {
    const revealHashTarget = () => {
      openReadingSection(window.location.hash);
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    };
    revealHashTarget();
    window.addEventListener("hashchange", revealHashTarget);
    return () => window.removeEventListener("hashchange", revealHashTarget);
  }, []);

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

      <nav className="reading-nav" aria-label="Reading sections">
        <a href="#books-read" onClick={() => openReadingSection("#books-read")}>Book Reviews</a>
        <a href="#favorites" onClick={() => openReadingSection("#favorites")}>Favourites</a>
        <a href="#to-read" onClick={() => openReadingSection("#to-read")}>To Read</a>
        <a href="#quotes" onClick={() => openReadingSection("#quotes")}>Quotes</a>
        <a href="#authors" onClick={() => openReadingSection("#authors")}>Authors</a>
      </nav>

      <details id="books-read" className="reading-section">
        <summary><h2>Book Reviews</h2></summary>
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
      </details>

      <details id="favorites" className="reading-section">
        <summary><h2>Favourites</h2></summary>
        <div className="book-list">
          {favbooks.map((favbooks) => (
            <div key={favbooks.id} className="book-entry">
              <img src={favbooks.cover} alt={favbooks.title} className="book-cover" />
              <div className="book-info">
                <h3>
                  <Markdown options={{ forceBlock: false }}>{favbooks.title}</Markdown>
                </h3>
                <div className="book-review">
                {Array.isArray(favbooks.review)
                  ? favbooks.review.map((para, index) => <p key={index}>{para}</p>) // Handle array of paragraphs
                  : favbooks.review.split("\n").map((para, index) => <p key={index}>{para}</p>)} 
                </div>
              </div>
            </div>
          ))}
        </div>
      </details>

      <details id="to-read" className="reading-section">
        <summary><h2>To Read</h2></summary>
        <p>placeholder</p>
      </details>

      <details id="quotes" className="reading-section">
        <summary><h2>Quotes</h2></summary>
        <p>placeholder</p>
      </details>

      <details id="authors" className="reading-section">
        <summary><h2>Authors</h2></summary>
        <p>Coming soon...</p>
      </details>

    </div>
  );
};

export default Reading;



