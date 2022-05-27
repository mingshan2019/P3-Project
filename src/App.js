import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Linkhub from './Linkhub';
import HomePage from './HomePage'
import useToken from './useToken';
import useEmail from './useEmail';
import Login from './Login'

export const ProxyUrl= 'http://ec2-54-206-113-177.ap-southeast-2.compute.amazonaws.com:3001/testid';

function App() {
  const { token, setToken } = useToken();
  const { em, setEm } = useEmail();


  if(!token || token =="no"||token=="nof") {
    return <Login setToken={setToken} setEm={setEm}/>
  }
  return (
   <div>
    <HomePage setToken={setToken}/>
 </div>
  );
}

export default App;
