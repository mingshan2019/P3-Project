import React,{useEffect,useState} from 'react'
import { Space } from 'antd'
import PListItem from './PListItem'


 const PList = () =>{

  const [Email,setEmail] = useState(sessionStorage.getItem("email"))
  const [portfolio,setPortfolio] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch( 'http://localhost:5000/GetPortfolio', {
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


  return (  
  <div style={{width:'40%',paddingTop:'4%',paddingLeft:'10%'}}>
   { portfolio.map((item) =>
        <PListItem alias={item.portfolio} date={item.datetime}/>
    )
   }
     </div>

  )   
}

export default PList;
