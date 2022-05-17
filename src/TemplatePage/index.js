import React, { useState } from 'react';
import AddTab from '../AddTab';
import phone2 from '../phone2.jpg'
import Nav from '../HomePage/Nav'
const lists = ["1",'2'];

function Template() {
  const[link, setLink] = useState(0);
  const[lists, setLists] = useState(["a","b"]);
  const listItems = lists.map((item) =>
  <li key="{item}">{item}</li>
);
function handleClick(){
  setLists([...lists, link]);
}


  return (
    
    
    <div>
  
          <Nav/>
          <div style={{}}>
          <AddTab/>     
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

         </div>   

    </div>
  );
}

export default Template;