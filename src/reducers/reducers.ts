const initialState = {
    books: [],
    loading: false,
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_BOOKS_SUCCESS':
        return {
          ...state,
          books: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_BOOKS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  