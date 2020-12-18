import { useSelector } from 'react-redux';

export default function Login () {
  const user = useSelector(store => store.username);
  return (
    <div>
        User { user }
    </div>
  )
}