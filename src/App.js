import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Login from './components/Login';
import Reducer from './Reducer';

const store = createStore(Reducer);

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Login />
      </Provider>
    </div>
  );
}


