import { useSelector } from 'react-redux';
import './App.scss';
import Game from './components/Game/Game';
import Login from './components/Login/Login';


export default function App() {
  // Get username from global store
  const user = useSelector(store => store.username)
  return (
    <div className='container'>
      { user ? <Game /> : <Login /> }
    </div>
  );
}


