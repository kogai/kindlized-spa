import 'whatwg-fetch';

import {
  SERIES_INPUT, SERIES_CLICK,
  SERIES_REGISTER, SERIES_UN_REGISTER,
  SERIES_FETCH, SERIES_RECIEVE,
  SERIES_EDIT,
} from 'app/actionCreators/actionTypes';

export const fetchSeries = (dispatch)=> ()=> {
  dispatch({
    type: SERIES_FETCH,
  });

  fetch('/api/user/series', {
    credentials: 'include',
  })
  .then((res)=> res.json())
  .then((json)=> dispatch({
    type: SERIES_RECIEVE,
    body: json.seriesList,
  }))
  .catch((err)=> console.log(err));
};

export const seriesInput = (dispatch)=> (ev)=> {
  dispatch({
    type: SERIES_INPUT,
    body: ev.target.value,
  });
};

export const addSeries = (dispatch, input)=> ()=> {
  dispatch({
    type: SERIES_CLICK,
  });

  fetch('/api/user/series', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ query: input }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((res)=> res.json())
  .then((json)=> dispatch({
    type: SERIES_REGISTER,
    body: {
      books: json.series,
      message: json.message,
    },
  }))
  .catch((err)=> console.log(err));
};

export const editSeries = (dispatch, series)=> ()=> {
  dispatch({
    type: SERIES_EDIT,
    body: {
      books: series,
    },
  });
};

export const deleteSeries = (dispatch, series)=> ()=> {
  fetch(`/api/user/series`, {
    method: 'DELETE',
    credentials: 'include',
    body: JSON.stringify({ query: series.name }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(()=> dispatch({
    type: SERIES_UN_REGISTER,
    body: {
      books: series,
    },
  }))
  .catch((err)=> console.log(err));
};
