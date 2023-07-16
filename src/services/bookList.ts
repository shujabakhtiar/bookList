import axios from 'axios';

const API_URL = 'http://nyx.vima.ekt.gr:3000/api/books';

export const bookList = async (page: number) => {
    const itemsPerPage=20;
    const filters=[]
    try {
    const response = await axios.post(API_URL, {
      page,
      itemsPerPage,
      filters,
    });
    
    return response.data.books;
  } catch (error) {
    // Handle error
    console.error('Error fetching books:', error);
    throw error;
  }
};
