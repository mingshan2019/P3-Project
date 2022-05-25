import React, { Component } from 'react'

export default class LinkComponent extends Component {

  constructor(props) {
  super(props);
  }

  render() {
    return (
      <div style={{paddingTop:'20px'}}>
      <div style={{background:this.props.color,width:'220px',height:'35px',borderRadius:'5px',padding:'10px'}}>{this.props.link} </div>
      </div>
    )
  }
}
