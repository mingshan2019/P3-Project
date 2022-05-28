import React from 'react'
import { Link,Navigate } from 'react-router-dom';

import SignUpModal from './SignUpModal'
import Nav from '../Nav'

export default function SignUp() {
  return (
    <div>
        <SignUpModal/>
        <Link to='/Login'>Got to Login </Link>
    </div>
  )}

