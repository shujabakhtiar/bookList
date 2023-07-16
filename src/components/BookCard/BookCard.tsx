import React from 'react';


interface Book {
  book_title: string;
  book_author: string[];
  book_publication_year: string;
  book_publication_city: string;
  book_publication_country: string;
  book_pages: number;
  id: number;
}
/*
 hi
     
*/

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const {
    book_title,
    book_author,
    book_publication_year,
    book_publication_city,
    book_publication_country,
    book_pages,
    id,
  } = book;
  function truncateSentence(sentence, limit) {
    if (sentence.length > limit) {
      return sentence.substring(0, limit) + '...';
    } else {
      return sentence;
    }
  }
  
  return (
    <div className='Card'>
      <div className='Card-Img'>
      <h2>{truncateSentence(book_title,40)}</h2>

      </div>
      <p>Author: {truncateSentence( book_author.join(', '),15) }</p>
      <p>Publication Year: {book_publication_year}</p>
   
    </div>

    
  );
};

export default BookCard;
