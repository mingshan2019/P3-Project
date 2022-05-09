import React, { useState } from 'react';
import phone from './phone.jpg'
import phone2 from './phone2.jpg'
import AddTab from './AddTab';
const lists = ["1",'2'];

function Linkhub() {
  const[link, setLink] = useState(0);
  const[lists, setLists] = useState(["a","b"]);
  const listItems = lists.map((item) =>
  <li key="{item}">{item}</li>
);
function handleClick(){
  setLists([...lists, link]);
}

  return (
    <div className="App">
  
      <header className="App-header">
     
          <div style={{}}>
          <div><h1>linkhub</h1></div>

          {/* <div style = {{marginBottom : '10px', height: '400px',width:'400px',backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',backgroundImage:"url('https://i.pinimg.com/474x/c6/09/c9/c609c9d68c49585593799c61dd96b0a3.jpg')"}}> */}
          <ul>
          {listItems}
          </ul>
          {/* </div> */}
        <input 
              onChange = {event => setLink(event.target.value)}
        />
        <button
          onClick = {handleClick}
        >add</button>
       
          <div id="img" style={{marginTop: '20px'}}><img src={phone2}/></div>  
          <AddTab/>
         </div>      
      </header>
    </div>
  );
}

export default Linkhub;