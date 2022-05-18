import React, {useState, useEffect} from 'react'
import {Table, Button, Modal, Tree} from 'antd'
import axios from 'axios'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined} from '@ant-design/icons'

const {confirm} = Modal

export default function RoleList() {
  const [dataSource, setdataSource] = useState([])
  const [rightList, setRightList] = useState([])
  const [isModalVisible, setisModalVisible] = useState(false)
  const [currentRights, setcurrentRights] = useState([])
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (id)=>{
        return <b>{id}</b>
      }
    },
    {
      title: "角色名称",
      dataIndex: "roleName",
    },
    {
      title: '操作',
      render:(item)=>{
        return <div>
          <Button type="primary" shape="circle" icon={<EditOutlined/>} onClick={()=>{
            setisModalVisible(true)
            setcurrentRights(item.rights)}}/>
          <Button danger shape="circle" icon={<DeleteOutlined/>} onClick={()=>confirmMethod(item)}/>
        </div>
      }
    }
  ]

  const confirmMethod = (item) =>{
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        // console.log('OK');
        deleteMethod(item)
      },
      onCancel() {
        // console.log('Cancel');
      },
    });
  }

  const deleteMethod = (item)=>{
    // console.log(item)
    // setdataSource(dataSource.filter(data=>data.id!==item.id))
    // axios.delete(`/rights/${item.id}`)

    setdataSource(dataSource.filter(data=>data.id!==item.id))
    axios.delete(`/roles/${item.id}`)  
    
    }

  useEffect(()=>{
    axios.get("/roles").then(res=>{
      // console.log(res.data)
      setdataSource(res.data)
    })
  },[])

  useEffect(()=>{
    axios.get("/rights?_embed=children").then(res=>{
      // console.log(res.data)
      setRightList(res.data)
    })
  },[])

  console.log(rightList)

  const handleOk = () =>{

  }

  const handleCancel = () => {
    setisModalVisible(false)
  }

  // const treeData = [
  //   {
  //     title: 'parent 1',
  //     key: '0-0',
  //     children: [
  //       {
  //         title: 'parent 1-0',
  //         key: '0-0-0',
  //         disabled: true,
  //         children: [
  //           {
  //             title: 'leaf',
  //             key: '0-0-0-0',
  //             disableCheckbox: true,
  //           },
  //           {
  //             title: 'leaf',
  //             key: '0-0-0-1',
  //           },
  //         ],
  //       },
  //       {
  //         title: 'parent 1-1',
  //         key: '0-0-1',
  //         children: [
  //           {
  //             title: (
  //               <span
  //                 style={{
  //                   color: '#1890ff',
  //                 }}
  //               >
  //                 sss
  //               </span>
  //             ),
  //             key: '0-0-1-0',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  const onCheck = (checkKeys)=>{
    // console.log(checkKeys)
    setcurrentRights(checkKeys)
  }

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} rowKey={(item)=>item.id}></Table>
      <Modal title="权限分配" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Tree 
        checkable
        checkedKeys = {currentRights}
        onCheck={onCheck} 
        checkStrictly={true}
        treeData={rightList}
      />
      </Modal>
    </div>
  )
}
