import React,{useState} from 'react'
import { Color_bg } from '../Utils'
import {HiOutlineDocumentAdd} from 'react-icons/hi'
import {Modal} from 'antd'
import '~antd/dist/antd.less';



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
        <button onClick={handleClick}><HiOutlineDocumentAdd size='80%'/></button>
        <buton type="primary" onClick={handleClick}>
        Open Modal
        </buton>
        </div>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        </Modal>
    </div>
  )
}
