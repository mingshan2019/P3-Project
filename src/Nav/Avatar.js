import React,{useState} from 'react'
import { Link } from 'react-router-dom'

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
    <div style={{height:'100%',paddingRight:'60%'}}>
    <div style={{background:'black',height:'70%',paddingLeft:'30%',paddingTop:'10%',paddingBottom:'10%'}} onMouseEnter={()=>setDrop('block')} onMouseLeave={setTimeout(()=>setDrop('none'),4000)}>
    <div>    
    <div style={{background:'grey',borderRadius:'50%',width:'30%',color:'white',padding:'16%'}}>{Acronym}</div></div> 
    </div>
    <div style={{background:'black',display:`${drop}`,height:'40%',paddingTop:'10%',paddingLeft:'20%'}} onMouseEnter={()=>setDrop('block')} onMouseLeave={setTimeout(()=>setDrop('none'),5000)}>
    <button>Log Off</button>  
    </div>
    </div>
  )


}


