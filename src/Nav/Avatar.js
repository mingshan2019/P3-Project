import React from 'react'

export default function Avatar(props) {

 if(props.url)
 return (
     <div>Avatar</div>
   )
      
else return (
    <div style={{background:'red',width:'20px',height:'20px'}}>{generateAvatar}</div>
  )

  function generateAvatar(){
    return(
        props.email
    )

}
}

