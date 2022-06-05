import React, { Component } from 'react'


export default class PhoneItem extends Component {

  constructor(props) {
  super(props);
  }

  render() {
    return (
      <div style={{paddingTop:'10%'}}>
      <a href={this.props.link} target="_blank" style={{background:this.props.color,borderRadius:'10%',padding:'2%',textOverflow:'hidden'}}>{this.props.link} </a>
      </div>
    )
  }
}
