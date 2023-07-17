import React from 'react';
import Styles from './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import BookList from './components/BookList/BookList.tsx';
import store from './store/store.ts';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/:pageNumber" element={<BookList />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App;
