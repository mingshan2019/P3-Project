import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import {FileAddFilled} from '@ant-design/icons'
import {HiOutlineDocumentAdd} from 'react-icons/hi'
import {Modal,Input,Button} from 'antd'



export default function PCreate() {

  const navigate = useNavigate();


  const [portfolioName,setPortfolioName] = useState('default portfolio');
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleClick = () => {
    setIsModalVisible(true);
    console.log("Session: "+ sessionStorage.getItem('email'.charAt(0)));
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log('portfolioName '+ portfolioName);
    navigate('/Design',{state:{portfolioName:portfolioName}});
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
