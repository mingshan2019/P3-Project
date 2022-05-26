import React,{useState} from 'react'
import { Color_bg } from '../Utils'
import {FileAddFilled} from '@ant-design/icons'
import {HiOutlineDocumentAdd} from 'react-icons/hi'
import {Modal,Input,Button} from 'antd'



export default function PCreate() {

  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleClick = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{padding:'4%'}}>

        {/* <Button onClick={handleClick}  size='large' icon={<FileAddFilled/>} /> */}

        <button onClick={handleClick}><HiOutlineDocumentAdd size='80%'/></button>

        <Modal title="Create Portfolio" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Enter your Project Name" />
        </Modal>
    </div>
  )
}
