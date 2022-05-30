import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {Form,Input,Button,Checkbox,Card} from 'antd'
import {LockOutlined,UserOutlined} from '@ant-design/icons'

function loginUser(req) {
  return fetch('/login', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
   },
    body: JSON.stringify(req)
  })
    .then(data => data.json())
 }

 
export default function LoginModal() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onFinish = (values) =>{
    console.log(values)
    handleSubmit();
  }

  const handleSubmit = async e => {
    console.log("email: "+email+"PW: "+password)
    const res = await loginUser({
      email,
      password
    });  
    if(res.token =="not found") alert("User not found");
    else if(res.token =="incorrect") alert("password not right");
    else{ 
      alert("verified");
      console.log("token is "+res.token);
      sessionStorage.setItem("email",res.token);
      navigate('/', { replace: true })
    }
  }

  return (
    <Card style={{width:'40%',marginLeft:'30%',marginTop:'10%',padding:'3%'}}>
        
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="Email"
        onChange={handleEmailChange}
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="Password"
        onChange={handlePasswordChange}
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
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="">
        &nbsp;&nbsp;Forgot password
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in 
        </Button>
        &nbsp;&nbsp;
        Or  
        <Link to='/SignUp'> register now!</Link>
      </Form.Item>
    </Form>

,</Card>
  )
}
