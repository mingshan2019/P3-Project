import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import React from 'react'
import './Login.css'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import { loadColorUpdater } from "tsparticles-updater-color";
// import { loadCircleShape } from "tsparticles-shape-circle";
// import { loadBaseMover } from "tsparticles-move-base";
// import { loadSizeUpdater } from "tsparticles-updater-size";
// import { loadOpacityUpdater } from "tsparticles-updater-opacity";
// import { loadOutModesUpdater } from "tsparticles-updater-out-modes";




export default function Login() {

  const particlesInit = async (main) => {
    console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log(values)

    axios.get(`http://localhost:5000/users?username=${values.username}&password=${values.password}&roleState=true&_expand=role`).then(res=>{
      console.log(res.data)
      if(res.data.length===0){
        message.error("用户名或密码不匹配")
      }else{
        localStorage.setItem("token", JSON.stringify(res.data[0]))
        navigate("/",{replace:true})
      }
    })
  }

  return (
    <div style={{background:"rgb(35,39,65)", height:"100%", overflow:"hidden"}}>
      <Particles height={document.documentElement.clientHeight}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    //   particles: {
    //     color: { value: '#ffffff' },
    //     links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.5, width: 1 },
    //     move: {
    //       bounce: false,
    //       direction: 'none',
    //       enable: true,
    //       outMode: 'bounce',
    //       random: false,
    //       speed: 2,
    //       straight: false,
    //     },
    //     fullScreen:{
    //       enable: false
    //     },
    //     number: { density: { enable: true, value_area: 800 }, value: 80 },
    //     opacity: { value: 0.5 },
    //     shape: { type: 'circle' },
    //     size: { random: true, value: 5 },
    // },
    // detectRetina: true,
    //   }}
    />
      <div className="formContainer">
        <div className="logintitle">全球新闻发布管理系统</div>
      <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
      
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  )
}
