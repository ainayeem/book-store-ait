import React from "react";
import BookImage from "./BookImage";
import BookInfo from "./BookInfo";

interface BookProps {
  author: string;
  title: string;
  imageUrl: string;
  price: number;
  genre: string;
  numberOfPages: number;
  publicationDate: string;
}

const Book: React.FC<BookProps> = ({
  author,
  title,
  imageUrl,
  price,
  genre,
  numberOfPages,
  publicationDate,
}) => {
  return (
    <article className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden">
      <BookImage title={title} imageUrl={imageUrl}></BookImage>

      <BookInfo
        title={title}
        author={author}
        price={price}
        genre={genre}
        numberOfPages={numberOfPages}
        publicationDate={publicationDate}
      ></BookInfo>
    </article>
  );
};

export default Book;
