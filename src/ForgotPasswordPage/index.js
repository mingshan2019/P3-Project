import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {Form,Input,Button,Checkbox,Card} from 'antd'
import {LockOutlined,UserOutlined} from '@ant-design/icons'
import validator from 'validator'


function loginUser(req) {
  return fetch('http://localhost:5000/forgetpw', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
   },
    body: JSON.stringify(req)
  })
    .then(data => data.json())
 }


 
export default function ForgotPassword() {

  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const onFinish = (values) =>{
    console.log(values)
    handleSubmit();
  }

  const handleSubmit = async e => {
    if (!validator.isEmail(email)) alert("Please type a valid email")
    else{
    const res = await loginUser({
      email,
    });  
      alert("Email sent, please check");
      console.log("token is "+res.token);
      navigate('/Login', { replace: true })
  }
  }

  return (
    <Card style={{width:'40%',marginLeft:'30%',marginTop:'10%',padding:'3%'}}>
        
    <Form
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
      <Input placeholder="Email" />
      </Form.Item>
      &nbsp;&nbsp;
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Send Email 
        </Button>
      </Form.Item>
    </Form>

    </Card>
  )
}
