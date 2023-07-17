import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import BookList from '../components/BookList/BookList.tsx';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import App from '../App';

const mockStore = configureMockStore([thunk]);
describe('App Component', () => {
  test('renders without errors', () => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/:pageNumber" element={<BookList />} />
          </Routes>
        </Router>
      </Provider>
    );
    
  });
});
