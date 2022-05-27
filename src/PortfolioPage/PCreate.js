import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import {FileAddFilled} from '@ant-design/icons'
import {HiOutlineDocumentAdd} from 'react-icons/hi'
import {Modal,Input,Button} from 'antd'



export default function PCreate() {

  const navigate = useNavigate();


  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleClick = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    navigate('/Design');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{padding:'4%'}}>

        {/* <Button onClick={handleClick}  size='large' icon={<FileAddFilled/>} /> */}
        <h3>Create portfolio</h3>
        <br/>
        <br/>
        <button onClick={handleClick}><HiOutlineDocumentAdd size='80%'/></button>

        <Modal title="Create Portfolio" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Enter your Portfolio Name" />
        </Modal>
    </div>
  )
}
