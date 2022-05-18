import React, { useState,useEffect, useRef } from 'react'
import {Button, Table, Modal, Switch} from 'antd'
import axios from 'axios'
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import UserForm from '../../../components/user-manage/UserForm';

export default function UserList() {
  const [dataSource, setdataSource] = useState([])
  const [isAddVisible, setisAddVisible] = useState(false)
  const [roleList, setroleList] = useState([])
  const [regionList, setregionList] = useState([])
  const [isUpdateVisible, setisUpdateVisible] = useState(false)
  const [isUpdateDisabled, setisUpdateDisabled] = useState(false)
  const [current, setCurrent] = useState(null)
  
  const addForm = useRef(null)
  const updateForm = useRef(null)

  const { confirm } = Modal;

  const {roleId, region, username} = JSON.parse(localStorage.getItem("token"))

  useEffect(()=>{

    const roleObj = {
      1:"superadmin",
      2:"admin",
      3:"editor"
    }
    axios.get("/users?_expand=role").then(res=>{
      const list = res.data
      setdataSource(roleObj[roleId]==="superadmin"?list: [...list.filter(item=>item.username===username),...list.filter(item=>item.region===region && roleObj[item.roleId]==="editor")])
    })
  },[roleId, region, username])
  useEffect(()=>{
    axios.get("/regions").then(res=>{
      const list = res.data
      setregionList(list)
    })
  },[])
  useEffect(()=>{
    axios.get("/roles").then(res=>{
      const list = res.data
      setroleList(list)
    })
  },[])


  const columns = [
    {
      title: '区域',
      dataIndex: 'region',
      filters:[
        ...regionList.map(item=>({
          text:item.title,
          value:item.value
        })),
        {
          text:"全球",
          value:"全球"
        }
      ],

      onFilter: (value, record) => (value==='全球')?record.region==='':record.region===value,

      render:(region)=>{
        return <b>{region===''?'全球':region}</b>
      }
    },
    {
      title: '角色名称',
      dataIndex: 'role',
      render:(role)=>{
        return role?.roleName
      }
    },
    {
      title: '用户名份',
      dataIndex: 'username'
    },
    {
      title: '用户状态',
      dataIndex: 'roleState',
      render:(roleState, item)=>{
        return <Switch checked={roleState} disabled={item.default} onChange={()=>handleChange(item)}></Switch>
      }
    },
    {
      title: '操作',
      render:(item)=>{
        return <div>
          <Button type="primary" shape="circle" icon={<EditOutlined/>} disabled={item.default} onClick={()=>{handleUpdate(item)}}/>
          <Button danger shape="circle" icon={<DeleteOutlined/>} onClick={()=>confirmMethod(item)} disabled={item.default}/>
        </div>
      }
    },
  ];

  const handleUpdate = (item) => {
    // console.log(isUpdateDisabled)
    console.log(item)
    setTimeout(()=>{
      updateForm.current?.setFieldsValue(item)
      // setisUpdateVisible(true)
      if(item.roleId===1){
        setisUpdateDisabled(true)

      }else{
        setisUpdateDisabled(false)

      }


    },0)

    setisUpdateVisible(true)



    // setTimeout(()=>{updateForm.current?.setFieldsValue(item)},0);
    // setisUpdateVisible(true)
    setCurrent(item)

  }
  
  const handleChange = (item) =>{
    // console.log(item)
    item.roleState = !item.roleState
    setdataSource([...dataSource])
    axios.patch(`/users/${item.id}`,{
      roleState: item.roleState
    })
  }

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
    
    setdataSource(dataSource.filter(data=>data.id!==item.id))
    axios.delete(`/users/${item.id}`)
    }
    
  const addFormOK = () =>{
    addForm.current.validateFields().then(value=>{
      setisAddVisible(false)

      addForm.current.resetFields()

      // 先要post到后端生成id, 再设置 datasource, 方便后面的删除和更新处理
      axios.post(`/users`, {
        ...value,
        "roleState": true,
        "default": false
      }).then(res=>{
        console.log(res.data)
        setdataSource([...dataSource, {
          ...res.data,
          role:roleList.filter(item=>item.id===value.roleId)[0]
        }])
      })


      // setdataSource([...dataSource, { 
        
      // }])
    }).catch(err=>{
      console.log(err)
    })
  }

  const updateFormOK = ()=>{
    updateForm.current.validateFields().then(value => {
      console.log(value)
      setisUpdateVisible(false)
      setdataSource(dataSource.map(item=>{
        if(item.id===current.id){
          return {
            ...item,
            ...value,
            role: roleList.filter(data=>data.id===value.roleId)[0]
          }
        }
        return item
      }))
      setisUpdateDisabled(!isUpdateDisabled)
      // console.log(isUpdateDisabled)
      axios.patch(`/users/${current.id}`,value)
    })
  }

  return (
    <div>
      <Button type="primary" onClick={()=>{setisAddVisible(true)}}>添加用户</Button>
      <Table dataSource={dataSource} columns={columns} pagination={{pageSize:5}} rowKey={item=>item.id}/>
      <Modal
      visible={isAddVisible}
      title="添加用户"
      okText="确定"
      cancelText="取消"
      onCancel={()=>{
        setisAddVisible(false)
      }}
      onOk={() => addFormOK()}
    >
      <UserForm regionList={regionList} roleList={roleList} ref={addForm}></UserForm>
    </Modal>

    <Modal
      visible={isUpdateVisible}
      title="更新用户"
      okText="更新"
      cancelText="取消"
      onCancel={()=>{
        setisUpdateVisible(false)
        setisUpdateDisabled(!isUpdateDisabled)

      }}
      onOk={() => updateFormOK()}
    >
      <UserForm regionList={regionList} roleList={roleList} ref={updateForm} isUpdateDisabled={isUpdateDisabled} isUpdate={true}></UserForm>
    </Modal>
    </div>
  )
}
