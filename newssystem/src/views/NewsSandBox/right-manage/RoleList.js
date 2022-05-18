import React, { useState, useEffect } from 'react'
import { Table, Button, Modal,Tree } from 'antd'
import axios from 'axios'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
const { confirm } = Modal
export default function RoleList() {
    const [dataSource, setdataSource] = useState([])
    const [rightList, setRightList] = useState([])
    const [currentRights, setcurrentRights] = useState([])
    const [currentId, setCurrentId] = useState(0)
    const [isModalVisible, setisModalVisible] = useState(false)
    
    const [expandedKeys, setExpandedKeys] = useState([]);
    // const [checkedKeys, setCheckedKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);
    
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (id) => {
                return <b>{id}</b>
            }
        },
        {
            title: '角色名称',
            dataIndex: 'roleName'
        },
        {
            title: "操作",
            render: (item) => {
                return <div>
                    <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => confirmMethod(item)} />
                    <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={()=>{
                        setisModalVisible(true)
                        setcurrentRights(item.rights)
                        setCurrentId(item.id)
                    }}/>
                </div>
            }
        }
    ]

    const confirmMethod = (item) => {
        confirm({
            title: '你确定要删除?',
            icon: <ExclamationCircleOutlined />,
            // content: 'Some descriptions',
            onOk() {
                //   console.log('OK');
                deleteMethod(item)
            },
            onCancel() {
                //   console.log('Cancel');
            },
        });

    }
    //删除
    const deleteMethod = (item) => {
        // console.log(item)
        setdataSource(dataSource.filter(data => data.id !== item.id))
        axios.delete(`/roles/${item.id}`)
    }

    useEffect(() => {
        axios.get("/roles").then(res => {
            // console.log(res.data)
            setdataSource(res.data)
        })
    }, [])

    useEffect(() => {
        axios.get("/rights?_embed=children").then(res => {
            // console.log(res.data)
            setRightList(res.data)
        })
    }, [])



    const handleOk = ()=>{
        setisModalVisible(false)
        //同步dataSource

        setdataSource(dataSource.map(item=>{
            if(item.id===currentId){
                return{
                    ...item,
                    rights: currentRights
                }
            }
            return item
        }))

        //patch
        axios.patch(`/roles/${currentId}`,{
            rights:currentRights
        })
    }

    const handleCancel  =()=>{
        setisModalVisible(false)
    }

    const onExpand = (expandedKeysValue) => {
        console.log('onExpand', expandedKeysValue); 
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
    
        setExpandedKeys(expandedKeysValue);
        setAutoExpandParent(false);
      };
    
    const onCheck = (checkKeys)=>{
        console.log(checkKeys)
        setcurrentRights(checkKeys.checked);
    }

    const onSelect = (selectedKeysValue, info) => {
        console.log('onSelect', info);
        setSelectedKeys(selectedKeysValue);
      };

    return (
        <div>
            <Table dataSource={dataSource} columns={columns}
                rowKey={(item) => item.id}></Table>

            <Modal title="权限分配" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Tree
                checkable
                onExpand={onExpand}
                expandedKeys={expandedKeys}
                autoExpandParent={autoExpandParent}
                onCheck={onCheck}
                checkedKeys={currentRights}
                onSelect={onSelect}
                selectedKeys={selectedKeys}
                treeData={rightList}
                checkStrictly={true}
            />

            </Modal>
        </div>
    )
}
