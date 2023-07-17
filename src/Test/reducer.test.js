import reducer from '../reducers/reducers.ts';

describe('reducer', () => {
  test('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      books: [],
      loading: false,
      error: null,
    });
  });

  test('handles FETCH_BOOKS_SUCCESS', () => {
    const action = {
      type: 'FETCH_BOOKS_SUCCESS',
      payload: [{ id: 1, book_title: 'Book 1' }],
    };
    const state = reducer(undefined, action);
    expect(state).toEqual({
      books: [{ id: 1, book_title: 'Book 1' }],
      loading: false,
      error: null,
    });
  });

  test('handles FETCH_BOOKS_FAILURE', () => {
    const action = {
      type: 'FETCH_BOOKS_FAILURE',
      payload: 'Error occurred',
    };
    const state = reducer(undefined, action);
    expect(state).toEqual({
      books: [],
      loading: false,
      error: 'Error occurred',
    });
  });
});
