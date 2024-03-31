import React from "react";
import Book from "./Book";
import bookData from "../data/BookData.json";

interface BookData {
  author: string;
  title: string;
  imageUrl: string;
  price: number;
  genre: string;
  numberOfPages: number;
  publicationDate: string;
}

const BookList: React.FC = () => {
  return (
    <section className="container mx-auto py-8">
      <div className="text-center bg-[#098fa3] text-5xl py-5 mb-4 text-white">
        <h1>Codecamp Assignment 01</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bookData.map((book: BookData, index: number) => (
          <Book
            key={index}
            author={book.author}
            title={book.title}
            imageUrl={book.imageUrl}
            price={book.price}
            genre={book.genre}
            numberOfPages={book.numberOfPages}
            publicationDate={book.publicationDate}
          />
        ))}
      </div>
    </section>
  );
};

export default BookList;
