import React, { Component } from 'react';
import { bookList } from '../services/bookList';

class MyComponent extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const booksData = await bookList(1, 20, []);

      // Handle the booksData response as needed
      console.log(booksData);
    } catch (error) {
      // Handle error
    }
  };

  render() {
    return <div> MyComponent </div>;
  }
}

export default MyComponent;
