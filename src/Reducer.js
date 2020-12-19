import State from './State';

const Reducer = (state=State, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return {...state, username: action.name };
    case 'SET_FLIPPED':
      return {...state, isCardFlipped: action.isCardFlipped}
    case 'SET_USER_POINT':
      return {...state, userPoints: state.userPoints + 1}
    case 'SET_BOT_POINT':
      return {...state, botPoints: state.botPoints + 1}
    default:
      return state;
  }
}

export default Reducer;