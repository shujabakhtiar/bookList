import { FETCH_BOOKS_SUCCESS } from '../actions/actions.ts';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;
