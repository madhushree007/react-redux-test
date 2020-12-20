import { useSelector } from 'react-redux';
import './App.scss';
import Game from './components/Game/Game';
import Login from './components/Login/index';


export default function App() {
  const user = useSelector(store => store.username)
  return (
    <div>
      { user ? <Game /> : <Login /> }
    </div>
  );
}


