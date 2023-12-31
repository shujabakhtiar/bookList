import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBooks } from '../../actions/fetchBooks.ts';
import BookCard from '../BookCard/BookCard.tsx';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const BookList = ({ books, loading, error, fetchBooks }) => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    setBookList([])
    fetchBooks(pageNumber || 1);
    setBookList(books);
  }, [fetchBooks, pageNumber]);

 
  useEffect(() => {
    setBookList(books);
  }, [books]);

  const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigate(`/${value}`);
  };

  return (
    <div className='container'>
      <h1>BOOK LIST</h1>
      <div className='BookList'>
      {!loading && bookList ? (
  <>
    {bookList.map((book) => (
      <BookCard book={book} key={book.id} />
    ))}
  </>
) : (
  <p>LOADING</p>
)}
      </div>
      <div className='Pagination'>
        <Stack spacing={2}>
          <Pagination count={10} onChange={handlePaginationChange} />
        </Stack>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchBooks })(BookList);
