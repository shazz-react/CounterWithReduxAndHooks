export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = newValue => {
  console.log('increment action - called');
  return {type: INCREMENT, value: newValue};
};

export const decrement = newValue => {
  console.log('decrement action - called');
  return {type: DECREMENT, value: newValue};
};
