import {
  FETCH_STUFFS
  // FETCH_STUFF,
  // CREATE_STUFF,
  // UPDATE_STUFF,
  // DELETE_STUFF
} from '../actions/types';

const stuffReducer = (state = { stuffs: [] }, action) => {
  switch (action.type) {
    case FETCH_STUFFS:
      return { ...state, stuffs: action.payload };
    // case FETCH_STUFF:
    //   return { ...state, selectedStuff: action.payload };
    // case CREATE_STUFF:
    //   let newStateWithCreatedStuff = { ...state };
    //   newStateWithCreatedStuff.stuffs.push(action.payload);
    //   return newStateWithCreatedStuff;
    // case UPDATE_STUFF:
    //   let newStateWithUpdatedStuff = { ...state };
    //   let stuffIdx = state.stuffs.findIndex(a => a.id === action.payload.id);
    //   newStateWithUpdatedStuff.stuffs[stuffIdx] = action.payload;
    //   return newStateWithUpdatedStuff;
    // case DELETE_STUFF:
    //   let newStateWithDeletedStuff = { ...state };
    //   newStateWithDeletedStuff.stuffs = state.stuffs.filter(a => a.id !== action.payload.id);
    //   return newStateWithDeletedStuff;
    default:
      return state;
  }
};

export default stuffReducer;
