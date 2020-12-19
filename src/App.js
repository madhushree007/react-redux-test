import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.scss';
import Game from './components/Game';
import Login from './components/Login/index.js';
import Reducer from './Reducer';

const store = createStore(Reducer);

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Login />
        <Game />
      </Provider>
    </div>
  );
}


