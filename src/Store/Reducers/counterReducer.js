import {INCREMENT, DECREMENT} from '../Actions/counterAction';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      let currentCount = state.count;
      return {...state, count: currentCount + action.value};
    }
    case DECREMENT: {
      let currentCount = state.count;
      return {...state, count: currentCount - action.value};
    }
    default:
      return state;
  }
};

export default counterReducer;
