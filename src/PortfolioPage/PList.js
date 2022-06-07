import React,{useEffect,useState} from 'react'
import { Space } from 'antd'
import PListItem from './PListItem'


 const PList = () =>{

  const [Email,setEmail] = useState(sessionStorage.getItem("email"))
  const [portfolio,setPortfolio] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch( 'http://ec2-54-206-113-177.ap-southeast-2.compute.amazonaws.com:5000/GetPortfolio', {
          method: 'POST',
          headers: {
           'Content-Type': 'application/json'
         },
          body: JSON.stringify({Email})
        });
        const res = await response.json();
        console.log(res);
        setPortfolio(res.portfolio);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();

}, []);

if(!portfolio.length)
return(
    <div style={{width:'40%',padding:'10%'}}>
      <h3>No portfolio yet, please create one </h3>
    </div>
)
else{
  return (      
  <div style={{width:'40%',paddingTop:'4%',paddingLeft:'10%'}}>
   { portfolio.map((item) =>
        
        <PListItem alias={item.portfolio} date={item.datetime} id={item._id} color={item.color} img={item.img} lists={item.lists}/>
    )
   }
     </div>

  )   
}}

export default PList;
