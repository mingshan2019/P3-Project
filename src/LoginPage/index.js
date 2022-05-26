import React from 'react'
import { Link } from 'react-router-dom';


import LoginModal from './LoginModal'
import Nav from '../Nav'

export default function Login() {
  return (
    <div>
        <Nav/>
        <LoginModal/>
        <Link to='/SignUp'>Got to SignUp </Link>
    </div>
  )
}
