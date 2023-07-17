export const fetchBooks = (page: number) => {
  return async (dispatch: any) => {
    const itemsPerPage = 20;
    const filters = [];
    const API_URL = 'http://nyx.vima.ekt.gr:3000/api/books';
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page,
          itemsPerPage,
          filters,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }

      const data = await response.json();
      const books = data.books;

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
