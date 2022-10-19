import axios from 'axios';

import {
  FETCH_STUFFS
  // CREATE_STUFF,
  // FETCH_STUFF
  // UPDATE_STUFF,
  // DELETE_STUFF
} from './types';

export const fetchStuffsThunk = () => async dispatch => {
  console.log('fetch stuffs');
  try {
    const res = await axios.get('/api');
    const stuffs = res.data.stuffs;
    console.log(stuffs);
    dispatch({ type: FETCH_STUFFS, payload: stuffs });
  } catch (err) {
    console.log('error fetching stuffs');
    console.log(err);
  }
};

// export const createStuffThunk = stuff => async () => {
//   console.log('create stuff');
//   console.log(stuff);
//   try {
//     // await
//   } catch (err) {
//     console.log('error creating stuff:', err);
//   }
// };

// export const fetchStuffThunk = id => dispatch => {
//   console.log('fetch stuff thunk');
//   console.log(id);
//   try {
//     // const stuff = await
//     console.log(stuff);
//     dispatch({ type: FETCH_STUFF, payload: stuff });
//   } catch (err) {
//     console.log('error fetching stuff', err);
//   }
// };

// export const editStuffThunk = stuff => async () => {
//   console.log('edit stuff');
//   console.log(stuff);
//   try {
//     // await
//   } catch (err) {
//     console.log('error updating stuff:', err);
//   }
// };

// export const deleteStuffThunk = id => () => {
//   console.log('delete stuff');
//   console.log(id);
//   try {
//     // await
//   } catch (err) {
//     console.log('error deleting stuff:', err);
//   }
// };
