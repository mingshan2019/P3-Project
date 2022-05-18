import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Linkhub from './Linkhub';
import HomePage from './HomePage'
import useToken from './useToken';
import Login from './Login'


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
   <div>
    <HomePage/>
 </div>
  );
}

export default App;
