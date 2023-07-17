import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(!open);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:300,
    bgcolor: 'background.paper',
    borderRadius: 5,
//    border: '2px solid #000',
//    boxShadow: 24,
    p: 4,
  };
  
  function truncateSentence(sentence, limit) {
    if (sentence.length > limit) {
      return sentence.substring(0, limit) + '...';
    } else {
      return sentence;
    }
  }
  
  return (
    <div className='Card' onClick={handleOpen}>
      <div className='Card-Img'>
      <h4>{truncateSentence(book_title,40)}</h4>

      </div>
      <p>Author: {truncateSentence( book_author.join(', '),15) }</p>
      <p>Publication Year: {book_publication_year}</p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='Modal'>
          <div className='ModalTitle'>
          <h2>
          {truncateSentence(book_title,60)}
          </h2>
            </div>
            <div className='ModalDescription'>
            <p>Author: {book_author}</p>
          <p>Year of Publication: {book_publication_year}</p>
          <p>City: {book_publication_city}</p>
          <p>Country: {book_publication_country}</p>
          <p>Pages: {book_pages}</p>
            </div>
        

          </div>
          
        </Box>
      </Modal>
    </div>

    
  );
};

export default BookCard;
