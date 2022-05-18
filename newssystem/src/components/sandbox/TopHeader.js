import React from 'react'
import {Layout, Menu, Dropdown, Avatar} from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux'

const {Header} = Layout

function TopHeader(props) {
    // console.log(props)
    // const [collapsed, setCollapsed] = useState(false)
    const changeCollapsed = () => {
      // console.log(props)
      props.changeCollapsed()
    }
    const navigate = useNavigate()

    const {role:{roleName}, username} = JSON.parse(localStorage.getItem("token"))


    const onClick = (e) => {
      if (e.key === '3') {
        localStorage.removeItem("token")
        navigate("/login",  {replace:true})
      }
    }

    const menu = (
        <Menu
          items={[
            {
              label: roleName,
              key: '0',
            },
            {
              type: 'divider',
            },
            {
                label: 'Exit',
                key: '3',
                // type:'danger'
                danger:true
              },
          ]}
          onClick={onClick}
        />
      )

  return (
    <Header className="site-layout-background" style={{ padding: '0 16px' }}>

            {
                props.isCollapsed?<MenuUnfoldOutlined onClick={changeCollapsed}/>:<MenuFoldOutlined onClick={changeCollapsed}/>
            }

            <div style={{float:"right"}}>
                 <span>欢迎<span style={{color:"#1890ff"}}>{username}</span>回来</span>
                 <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined />} />
                 </Dropdown>
            </div>    
    </Header>
  )
}

/*
  connect(
    // mapStateToProps
    // mapDispatchToProps
  )(被包装的组件)
*/

const mapStateToProps = ({CollapsedReducer:{isCollapsed}})=>{
  // console.log(state)
  return {
    isCollapsed
  }
}

const mapDispatchToProps = {
  changeCollapsed(){
    return {
      type: "change_collapsed"
      //payload:
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader)