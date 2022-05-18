import React, { useState,useEffect } from 'react'
import {Button, Table, Tag, Modal, Popover, Switch } from 'antd'
import axios from 'axios'
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

export default function RightList() {
  const [dataSource, setdataSource] = useState([])

  useEffect(()=>{
    axios.get("/rights?_embed=children").then(res=>{
      const list = res.data
      list.forEach(item=>{
        if(item.children.length===0){
          item.children = ""
        }
      })
      setdataSource(list)
    })
  },[])


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render:(id)=>{
        return <b>{id}</b>
      }
    },
    {
      title: '权限名称',
      dataIndex: 'title',
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      render:(key)=>{
        return <Tag color="cyan">{key}</Tag>
      }
    },
    {
      title: '操作',
      render:(item)=>{
        return <div>
          <Popover content={<div style={{textAlign:"center"}}><Switch checked={item.pagepermisson} onChange={()=>switchMethod(item)}></Switch></div>} title="页面配置项" trigger={item.pagepermisson===undefined?'':"click"}>
            <Button type="primary" shape="circle" icon={<EditOutlined/>} disabled={item.pagepermisson===undefined}/>
          </Popover>
          <Button danger shape="circle" icon={<DeleteOutlined/>} onClick={()=>confirmMethod(item)}/>
        </div>
      }
    },
  ];

  const switchMethod = (item)=>{
    item.pagepermisson = !item.pagepermisson + 0
    setdataSource([...dataSource])

    if(item.grade===1){
      axios.patch(`/rights/${item.id}`,{
        pagepermisson:item.pagepermisson
      })
    } else{
      axios.patch(`/children/${item.id}`,{
        pagepermisson:item.pagepermisson
      })
    }
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
    // console.log(item)
    // setdataSource(dataSource.filter(data=>data.id!==item.id))
    // axios.delete(`/rights/${item.id}`)

    if(item.grade===1){
      setdataSource(dataSource.filter(data=>data.id!==item.id))
      axios.delete(`/rights/${item.id}`)  
    } else{
      console.log(item.rightId)
      // console.log(dataSource)

      let list = dataSource.filter(data=>data.id===item.rightId)
      list[0].children = list[0].children.filter(data=>data.id!==item.id)

      console.log(list)
      setdataSource([...dataSource])
      axios.delete(`/children/${item.id}`)  

      // console.log(dataSource)
    }
  }

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={{pageSize:5}}/>
    </div>
  )
}
