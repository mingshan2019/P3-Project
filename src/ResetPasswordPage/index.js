import React, { useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'

import { Form, Input, Button,Card } from 'antd'


function ResetPW(req) {
  return fetch('/resetpw', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(req)
  })
    .then(data => data.json())
}


export default function ResetPassword() {

  const [password, setPassword] = useState();
  const [repassword, setRePassword] = useState();
  const {id} = useParams();

  const navigate = useNavigate();


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
  };


  const handleSubmit = async e => {

    if (password == null) alert("Please type password")
    else if (repassword == null) alert("Please retype password")
    else if (password != repassword) alert("Retype is not the same with password")
    else if (password.length < 6) alert("Password length must be more than six")
    else if (password.match(/^([^0-9]*)$/)) alert("Password must contain number")
    else if (!password.match(/[A-Za-z]/)) alert("Password must contain character")

    else {
      const res = await ResetPW({
        id,
        password
      });
      if (!res.error) alert("Reset Password Successful");
      navigate('/Login', { replace: true })
    }
  }

  return (
    <Card style={{width:'40%',marginLeft:'30%',marginTop:'10%',padding:'3%'}}>

      <Form
        onFinish={handleSubmit}
      >

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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Reset Password
          </Button>
        </Form.Item>
      

      </Form>
      </Card>
  )

}
