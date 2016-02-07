import 'whatwg-fetch';

import { BOOK_FETCH, BOOK_RECIEVE } from './actionTypes';

export const fetchBooks = (dispatch)=> (page)=> {
  debugger;
  dispatch({
    type: BOOK_FETCH,
  });

  const fetchPage = typeof page === 'number' ? page : Number(page.target.dataset.page);
  fetch(`/api/user/book?page=${fetchPage}`, {
    credentials: 'include',
  })
  .then((res)=> res.json())
  .then((json)=> (dispatch({
    type: BOOK_RECIEVE,
    body: {
      books: json.books,
      maxCount: json.maxCount,
      currentPage: fetchPage,
    },
  })))
  .catch((err)=> console.log(err));
};

export const searchBook = (dispatch)=> ()=> {

};
