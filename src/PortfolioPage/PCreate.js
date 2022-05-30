import React,{useState} from 'react'
import moment from 'moment';
import {useNavigate} from "react-router-dom"
import {FileAddFilled} from '@ant-design/icons'
import {HiOutlineDocumentAdd} from 'react-icons/hi'
import {Modal,Input,Button} from 'antd'


function AddPortfolio(req) {
  return fetch('http://localhost:5000/AddPortfolio', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(req)
  })
    .then(data => data.json())
}

export default function PCreate() {

  const navigate = useNavigate();
  const [Email,getEmail] = useState(sessionStorage.getItem("email"));

  const [portfolioName,setPortfolioName] = useState('default portfolio');
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleClick = () => {
    setIsModalVisible(true);
    console.log("Session: "+ sessionStorage.getItem('email'.charAt(0)));
  };

  const handleOk = async e => {
    setIsModalVisible(false);
    console.log('portfolioName '+ portfolioName);
    const now = moment().fromNow()
    const res = await AddPortfolio({
      Email,
      portfolioName,
      now
    });console.log("res"+res)
    const id = res.id
    navigate('/Design',{state:{portfolioName:portfolioName, color:'grey',img:`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/1.png")`,id:id}});
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleChange = (e) => {
    console.log('onChange');
    setPortfolioName(e.target.value);
  };

  return (
    <div style={{padding:'4%'}}>

        {/* <Button onClick={handleClick}  size='large' icon={<FileAddFilled/>} /> */}
        <h3>Create portfolio</h3>
        <br/>
        <br/>
        <button onClick={handleClick}><HiOutlineDocumentAdd size='80%'/></button>

        <Modal title="Create Portfolio" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}  >
        <Input placeholder="Enter your Portfolio Name" onChange={handleChange}/>
        </Modal>
    </div>
  )
}
