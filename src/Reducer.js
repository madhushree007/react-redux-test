import State from './State';

const Reducer = (state=State, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return state.username;
    default:
      return state;
  }
}

export default Reducer;