import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Color_dark,Color_bg } from '../Utils'

export default function Avatar(props) {

const [Acronym,setAcroym]= useState(props.email)   
const [drop,setDrop] = useState('none')

if(props.url)
 return (
     <div>Avatar</div>
   )

if(!Acronym)
return(
  <Link to='/login'>Login</Link>
)  
      
else return (
    <div style={{}}>
    <div style={{background:{Color_dark},height:'70%',paddingLeft:'30%',paddingTop:'10%',paddingBottom:'10%'}} onMouseEnter={()=>setDrop('block')} onMouseLeave={setTimeout(()=>setDrop('none'),5000)}>
    <div>    
    <div style={{background:{Color_bg},borderRadius:'50%',width:'30%',color:'white',padding:'16%'}}>{Acronym}</div></div> 
    </div>
    <div style={{background:{Color_dark},display:`${drop}`,height:'40%',paddingTop:'10%',paddingLeft:'20%'}} onMouseEnter={()=>setDrop('block')} onMouseLeave={setTimeout(()=>setDrop('none'),5000)}>
    <button>Log Off</button>  
    </div>
    </div>
  )


}


