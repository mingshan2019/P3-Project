import React,{useState} from 'react'
import { Color_bg } from '../Utils'
import FileAddOutlined from '@ant-design/icons'
import {Modal,Input} from 'antd'



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
    <div>
        <div>
        <button onClick={handleClick}><FileAddOutlined size='80'/></button>
        <buton type="primary" onClick={handleClick}>
        Open Modal
        </buton>
        </div>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Enter your Project Name" />
        </Modal>
    </div>
  )
}
