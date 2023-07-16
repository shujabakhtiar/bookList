import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { bookList } from '../../services/bookList.ts';
import BookCard from '../BookCard/BookCard.tsx';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const BookList = ({ books }) => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [booksList,setBooksList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await bookList(pageNumber);
        setLoading(false);
        setBooksList(response);

        // Update the books state with the fetched data
        // You may need to modify this depending on the structure of the response
        // For example: setBooks(response.data.books);
      } catch (error) {
        setLoading(false);
        // Handle error
        console.error('Error fetching books:', error);
      }
    };

    fetchData();
  }, [pageNumber]);

  const handlePageChange = (number) => {
    if (pageNumber === undefined || pageNumber === null) {
      number = 1;
    }
    navigate(`/${number}`);
  };

    const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
      navigate(`/${value}`);

    };
  
  return (
    <div className='container'>
      <h1>BOOK LIST</h1>
    <div className='BookList'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>

          {booksList.map((book) => (
            <BookCard  book={book} />
          ))}
          
        </>
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
});

export default connect(mapStateToProps)(BookList);
