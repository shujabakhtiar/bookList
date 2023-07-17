import axios from 'axios';

export const fetchBooks = (page) => {
  return async (dispatch) => {
    const itemsPerPage=20;
    const filters=[]
    const API_URL = 'http://nyx.vima.ekt.gr:3000/api/books';
    console.log("HEre")
    try {
        console.log("HEre 2")

     const response = await axios.post(API_URL, {
            page,
            itemsPerPage,
            filters,
          });

      const books = response.data.books;
      console.log("REDUX", books)
      dispatch({
        type: 'FETCH_BOOKS_SUCCESS',
        payload: books,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_BOOKS_FAILURE',
        payload: error.message,
      });
    }
  };
};
