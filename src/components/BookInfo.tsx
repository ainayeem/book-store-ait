import React from "react";

interface BookProps {
  title: string;
  author: string;
  price: number;
  genre: string;
  numberOfPages: number;
  publicationDate: string;
}

const BookInfo: React.FC<BookProps> = ({
  title,
  author,
  price,
  genre,
  numberOfPages,
  publicationDate,
}) => {
  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <span className="bg-blue-400 rounded p-1 text-white">
        {genre.charAt(0).toUpperCase() + genre.slice(1)}
      </span>
      <p className="text-gray-600 ">By {author}</p>
      <p className="text-gray-600">Total Page: {numberOfPages}</p>
      <p className="text-gray-600">Published: {publicationDate}</p>
      <p className="text-gray-800 mt-4 font-bold">Price: ${price}</p>
    </div>
  );
};

export default BookInfo;
