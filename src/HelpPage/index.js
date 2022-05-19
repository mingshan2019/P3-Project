import React, { Component } from 'react'
import Nav from '../HomePage/Nav'
import drop from '../HomePage/dropdown';
import sdrop from '../HomePage/sdrop';

export default class Help extends Component {
  render() {
    return (
      <div>
      <Nav/>
      <div>Help</div>
      <drop/>
      <sdrop/>
      </div>
    )
  }
}