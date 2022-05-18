import React, { useEffect, useState } from 'react'
import {Layout, Menu} from 'antd'
import './index.css'
import {useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
// import {
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//     AppstoreOutlined, 
//     MailOutlined, 
//     SettingOutlined
//   } from '@ant-design/icons';


const {Sider} = Layout

// const items = [
//     getItem('首页', '/home'),
//     getItem('用户管理', '/user-manage', null, [
//       getItem('用户列表', '/user-manage/list', null)
//     ]),
  
//     getItem('权限管理', '/right-manage', null, [
//       getItem('角色列表', '/right-manage/role/list'),
//       getItem('权限列表', '/right-manage/right/list'),
//     ]),
  
//     // getItem('Navigation Three', 'sub4', <SettingOutlined />, [
//     //   getItem('Option 9', '9', <AppstoreOutlined />),
//     //   getItem('Option 10', '10'),
//     //   getItem('Option 11', '11'),
//     //   getItem('Option 12', '12'),
//     // ]),
//   ];

// const iconList = {
//     "/home": <VideoCameraOutlined />,
//     "/user-manage": <UploadOutlined/>,
//     "/user-manage/list": <AppstoreOutlined/>,
//     "/right-manage": <UserOutlined/>,
//     "/right/manage/role/list": <MailOutlined/>,
//     "/right-manage/right/list": <SettingOutlined/>
// }

// const {role:{rights}} = JSON.parse(localStorage.getItem("token"))





function SideMenu(props) {
    const [menu, setmenu] = useState([])
    useEffect(()=>{
        axios.get("/rights?_embed=children").then(res=>{
            // console.log(res.data)
            setmenu(res.data)
        })
    }, [])

    function getItem(label, key, icon, children, type) {
      return {
        key,
        icon,
        children,
        label,
        type,
      };
    }

    const getItems = (menuList)=>{
      return menuList.map(item=>{
          if(item.children?.length>0 && checkPagePermission(item)){
              return getItem(item.title, item.key, item.icon, getItems(item.children))
          }
          return checkPagePermission(item) && getItem(item.title, item.key, item.icon)
      })
  }

    const checkPagePermission = (item) => {
      // console.log(JSON.parse(localStorage.getItem("token")))
      // console.log(rights)
      // console.log(JSON.parse(localStorage.getItem("token")))
      return item.pagepermisson===1 && rights.includes(item.key)
  }

    const {role:{rights}} = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate()
    const location = useLocation()
    // const openKeys = "/" + location.pathname.split("/")[1]
    const openKeys = ["/" + location.pathname.split("/")[1]]
    // console.log(location.pathname)
    const onClick = (e) => {
        navigate(e.key,{replace:true})    
      };

  return (
    <Sider trigger={null} collapsible collapsed={props.isCollapsed}>
        <div style={{display:"flex",height: "100%", flexDirection:"column"}}>
        <div className="logo">全球新闻发布管理系统</div>
        <div style={{flex:1, overflow:"auto"}}>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname]}
            defaultOpenKeys={openKeys}
            items={getItems(menu)}
            onClick={onClick}
            // items={[
            //   {
            //     key: '1',
            //     icon: <UserOutlined />,
            //     label: 'nav 1',
            //   },
            //   {
            //     key: '2',
            //     icon: <VideoCameraOutlined />,
            //     label: 'nav 2',
            //   },
            //   {
            //     key: '3',
            //     icon: <UploadOutlined />,
            //     label: 'nav 3',
            //   },
            // ]}
          />
          </div>
        </div>
    </Sider>
  )
}

const mapStateToProps = ({CollapsedReducer:{isCollapsed}})=>({
  isCollapsed
})

export default connect(mapStateToProps)(SideMenu)