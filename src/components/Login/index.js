import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions';
import './login.scss';

export default function Login () {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addUser(user));
  }
  return (
    <div className='container'>
        <div className='inner'>
          <h1>
            Welcome <br /><span>to</span><br />Card Game
          </h1>
          <form onSubmit={onSubmit}>
            <input name="firstName" value={user} onChange={e => setUser(e.target.value)}  />
            <input type="submit" />
    </form>
        </div>
    </div>
  )
}