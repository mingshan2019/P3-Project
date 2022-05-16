import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router} from 'react-router-dom'
import Linkhub from './Linkhub';
import Home from './pages';
import HomePage from './HomePage'

function App() {
  return (
   <div>
    <HomePage/>
 </div>
  );
}

export default App;
