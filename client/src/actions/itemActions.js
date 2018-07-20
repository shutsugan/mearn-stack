import {ITEMS_LOADING, GET_ITEMS, ADD_ITEM, DELETE_ITEM} from './types';

export const getItems = _ => dispatch => {
  dispatch(setItemsLoading());
  fetch('/api/items')
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: GET_ITEMS,
        payload: res
      })
    })
};

export const addItem = item => dispatch => {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(item)
  };

  fetch('/api/items', options)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: ADD_ITEM,
        payload: res
      })
    })
};

export const deleteItem = id => dispatch => {
  const options = {
    method: 'DELETE'
  }
  fetch(`/api/items/${id}`, options)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    });
};


export const setItemsLoading = _ => {
  return {
    type: ITEMS_LOADING
  }
}
