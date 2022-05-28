import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import validator from 'validator'
import { Form, Input, Button,Card } from 'antd'


function SignUpUser(req) {
  return fetch('/SignUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(req)
  })
    .then(data => data.json())
}


export default function SignUpModal() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRePassword] = useState();


  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
  };


  const handleSubmit = async e => {

    if (email == null) alert("Please type email")
    else if (password == null) alert("Please type password")
    else if (repassword == null) alert("Please retype password")
    else if (password != repassword) alert("Retype is not the same with password")
    else if (password.length < 6) alert("Password length must be more than six")
    else if (password.match(/^([^0-9]*)$/)) alert("Password must contain number")
    else if (!password.match(/[A-Za-z]/)) alert("Password must contain character")
    else if (!validator.isEmail(email)) alert("Please type a valid email")

    else {
      const res = await SignUpUser({
        email,
        password
      });
      if (!res.error) alert("Sign Up Successful");
      sessionStorage.setItem("email", email);
      navigate('/', { replace: true })
    }
  }

  return (
    <Card style={{width:'40%',marginLeft:'30%',marginTop:'10%',padding:'3%'}}>

      <Form
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Email"
          name="Email"
          onChange={handleEmailChange}
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Password"
          label="Password"
          onChange={handlePasswordChange}
          rules={[{ required: true, message: 'Please type your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="Retype Password"
          label="Retype Password"
          onChange={handleRePasswordChange}
          rules={[{ required: true, message: 'Please retype your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </Card>
  )

}
