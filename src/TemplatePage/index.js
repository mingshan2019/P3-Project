import React, { useState,useEffect } from 'react';
import AddTab from '../AddTab';
import phone2 from '../phone2.jpg'
import Nav from '../HomePage/Nav'
import image from '../images/cool-background.png'
const lists = ["1",'2'];

function Template() {
  const[link, setLink] = useState(0);
  const[lists, setLists] = useState(["a","b"]);
  const listItems = lists.map((item) =>
  <li key="{item}">{item}</li>
);
const [urlinks,seturLink]=useState([]);
function handleClick(){
  setLists([...lists, link]);
}

useEffect(() => {
  fetch("http://localhost:3001/testuser")
    .then(res => res.json())
    .then(
      (result) => {
        seturLink(result.user.email);
      },

      (error) => {
        seturLink('e');

        console.log(error);
      }
    )
}, [])

  return (
    
    
    <div>
  
          <Nav/>
          <div style={{display:'flex',padding:'60px'}}>
          
         <div style={{padding:'30px 200px 100px 280px'}}>

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
     
          {/* <div id="img" style={{marginTop: '20px'}}><img src={phone2}/></div>   */}
         </div>

         <div style={{background:'black',width:'300px',height:'600px',float:'right',marginLeft:'200px',borderRadius:'12px'}}>
         <div style={{background:'white',width:'280px',height:'580px',margin:'9px',padding:'30px',borderRadius:'12px',backgroundImage:`url(${image})` }}>
         <div style={{paddingLeft:'80px',paddingTop:'10px',paddingBottom:'120px'}}><div style={{background:'grey',borderRadius:'60px',width:'60px',height:'60px',padding:'12px'}}>Kath</div></div>
         <div style={{background:'grey',width:'220px',height:'35px',borderRadius:'5px',padding:'10px'}}>{urlinks}</div> 
         <br/>   
         <div style={{background:'grey',width:'220px',height:'35px',borderRadius:'5px',padding:'10px'}}>Link2</div> 
         <br/> 
         <div style={{background:'grey',width:'220px',height:'35px',borderRadius:'5px',padding:'10px'}}>Link3</div>   
         <br/> 
         <div style={{background:'grey',width:'220px',height:'35px',borderRadius:'5px',padding:'10px'}}>Link4</div>   
        </div>  
 
         
         </div>
         
         <div>

         </div> 
    </div>

    </div>
  );
}

export default Template;