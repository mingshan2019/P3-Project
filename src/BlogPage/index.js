import React from 'react'
import Nav from '../Nav'
import BlogContent from './BlogContent'

export default function Blog() {
  return (
    <div>
    <Nav/>
    <div style={{padding:'5%'}}>
        <BlogContent/>
    </div>
    </div> 
  )
}
