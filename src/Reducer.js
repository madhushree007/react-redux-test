import State from './State';

const Reducer = (state=State, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return {...state, username: action.username };
    case 'USER_LOGOUT':
      return {...state, username: '' };
    case 'SET_FLIPPED':
      return {...state, isCardFlipped: action.isCardFlipped}
    case 'SET_USER_POINT':
      return {...state, userPoints: state.userPoints + 1}
    case 'SET_BOT_POINT':
      return {...state, botPoints: state.botPoints + 1}
    case 'SET_GAME_LEFT':
      return {...state, gameLeft: state.gameLeft - 1}
    case 'RESET_GAME_LEFT':
      return {...state, gameLeft: 5}
    case 'RESET_USER_POINTS':
      return {...state, userPoints: 0}
    case 'RESET_BOT_POINTS':
      return {...state, botPoints: 0}
    default:
      return state;
  }
}

export default Reducer;