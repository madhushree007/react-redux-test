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
    <div className='login'>
        <div className='inner'>
          <div>
            <h1>
              Welcome <br /><span>to</span><br />Card Game
            </h1>
          </div>

        <form className='formDiv' onSubmit={onSubmit}>
          <label htmlFor='firstName'>Please Enter Your Name</label>
          <input name="firstName" value={user} onChange={e => setUser(e.target.value)}  />
          <button type="submit">ENTER</button>
        </form>
        </div>
    </div>
  )
}