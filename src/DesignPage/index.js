import React, { Component } from 'react'
import DesignComponent from './DesignComponent';
import Nav from '../HomePage/Nav'
import image1 from '../images/cool-background.png'
import image2 from '../images/2.png'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'



export default class Design extends Component {

  constructor(props) {
  super(props);
  }

  render() {
    return (
      <div>
        <Nav/>
        <div>
        <DesignComponent image={image1} color='#F4C095' lists={['1','2']}/>
        <DesignComponent image={image2} color='#679289' lists={['2','3']}/>
        <DesignComponent image={image4} color='#456990' lists={['4','3','4']}/>
        </div>
      </div>
    )
  }
}
