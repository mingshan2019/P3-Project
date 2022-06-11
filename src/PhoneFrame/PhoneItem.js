import React, { Component } from 'react'
import {DeleteOutlined} from '@ant-design/icons'


export default class PhoneItem extends Component {

  constructor(props) {
  super(props);
  }

  render() {
    return (
      <div style={{paddingTop:'10%',display:'flex'}}>  
      <a href={this.props.link} target="_blank" overflowWrap= 'break-word' wordwrap='break-word' style={{background:this.props.color,borderRadius:'10%',padding:'2%',textOverflow:'hidden'}}>     
{this.props.link}   </a> 
      <DeleteOutlined/>
      </div>
    )
  }
}
