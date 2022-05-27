import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {Form,Input,Button,Checkbox} from 'antd'
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


  const handleSubmit = async e => {
    const res = await loginUser({
      email,
      password
    }); 
    if(res.token =="not found") alert("User not found");
    else if(res.token =="incorrect") alert("password not right");
    else 
    {
      alert("verified");
      console.log("token is "+res.token);
      sessionStorage.setItem("email",res.token);
      navigate('/', { replace: true })
    }
  }

  return (
    <div style={{width:'40%'}}>
        
    <form onSubmit={handleSubmit}>
        <label >
            Email
            <input  type="text" onChange={e => setEmail(e.target.value)}></input>
        </label>
        <br/>
        <br/>
        <label>
            Password
            <input type="password" onChange={e => setPassword(e.target.value)}></input>
        </label>
        <br/>
        <br/>
        <input type="submit" value="Submit" /> 

    </form>

 
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="Email"
        onValuesChange={setEmail}
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
        name="password"
        onValuesChange={setPassword}
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
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to='/SignUp'>register now!</Link>
      </Form.Item>
    </Form>

</div>
  )
}
