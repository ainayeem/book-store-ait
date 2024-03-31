import React from "react";

interface BookProps {
  title: string;
  imageUrl: string;
}

const BookImage: React.FC<BookProps> = ({ title, imageUrl }) => {
  return (
    <img className="object-cover w-full h-64 " src={imageUrl} alt={title} />
  );
};

export default BookImage;
