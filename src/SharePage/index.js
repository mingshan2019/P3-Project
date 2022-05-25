import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import AddTab from '../AddTab'
import phone2 from '../phone2.jpg'
import Nav from '../HomePage/Nav'
import image from '../images/cool-background.png'
import LinkComponent from '../LinkComponent'
import { RWebShare } from "react-web-share";
import DesignComponent from '../DesignPage/DesignComponent'
import { BlockPicker } from 'react-color';
import { HexColorPicker } from 'react-colorful';





const lists = ["1",'2'];




export default function Share() {
  const[link, setLink] = useState(0);
  const[lists, setLists] = useState(["a","b"]);
  const listItems = lists.map((item) =>
  <li key="{item}">
    <LinkComponent link={item}/>  
  </li>
);
const [color,setColor]=useState('red');
const [img,setImg]=useState(`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/1.png")`);

function handleClick(){
  setLists([...lists, link]);
}

function handleClick2(){
    setImg(`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/2.png")`);
  }
  
  function handleClick3(){
    setImg(`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/3.jpg")`);
  }  

  function handleClick4(){
    setImg(`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/4.jpg")`);
  } 

function handleChangeComplete(color){
    this.setColor(color.hex);
  };

useEffect(() => {
  fetch("http://ec2-54-206-113-177.ap-southeast-2.compute.amazonaws.com:3001/testid")
    .then(res => res.json())
    .then(
      (result) => {
        console.log('color is'+ result.portfolio.color);
        setColor(result.portfolio.color);
      },

      (error) => {
        setColor('grey');

        console.log(error);
      }
    )
}, [])

let params = useParams();



  return (
    
    
    <div>
  
          <Nav/>
          <div style={{display:'flex',padding:'60px'}}>
          
         <div style={{padding:'30px 200px 100px 280px'}}>

          <AddTab/>     
          {/* <div style = {{marginBottom : '10px', height: '400px',width:'400px',backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',backgroundImage:"url('https://i.pinimg.com/474x/c6/09/c9/c609c9d68c49585593799c61dd96b0a3.jpg')"}}> */}

          {/* </div> */}
          <div style={{marginTop:'80%',marginBottom:'40%'}}>

          <h2>id: {params.templateId}</h2>
        <input 
              onChange = {event => setLink(event.target.value)}
        />
        <button
          onClick = {handleClick}
        >add link</button>
        </div>
     
        <h2>click to image to change</h2>
          {/* <div id="img" style={{marginTop: '20px'}}><img src={phone2}/></div>   */}
          <button style={{width:'30%',height:'18%',backgroundImage:`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/2_tn.jpg")`}} onClick={handleClick2}></button>
          <button style={{width:'30%',height:'18%',backgroundImage:`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/3_tn.jpg")`}}  onClick={handleClick3}></button>
          <button style={{width:'30%',height:'18%',backgroundImage:`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/4_tn.jpg")`}} onClick={handleClick4}></button>

         </div>


         <DesignComponent  color={color} lists={lists} img={img}/>

         <HexColorPicker color={color} onChange={setColor}/>


        <RWebShare
        data={{
          text: "Web Share - GfG",
          url: "http://connecttree.link",
          title: "GfG",
        }}
        onClick={() => console.log("shared successfully!")}
      >

        

        <button>Share on Web</button>
      </RWebShare>


         
         </div>

         <div>

         </div> 
    </div>

  
  );
}

