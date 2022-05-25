import React, { Component } from 'react'
import Nav from '../HomePage/Nav'
import drop from '../HomePage/dropdown';
import sdrop from '../HomePage/sdrop';
import Gallery from "react-gallery-picker";

const IMAGE1 = "https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/2.png"
const IMAGE2 = "https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/1.png"
const IMAGE3 = "https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/2.png"

const IMAGE_LIST = [{ url: IMAGE1, name: "imagen 1" },{ url: IMAGE2, name: "imagen 2" } ,{ url: IMAGE3, name: "imagen 3" } ];
const getImages = images => {
  // Do something with the selected images)
  console.log(images);
}

export default class Help extends Component {

  
  render() {
    return (
      <div>
      <Nav/>
      <drop/>
      <sdrop/>
      <div>Help</div>
      <Gallery imagesRecived={IMAGE_LIST} returnImages={getImages} />
      </div>
    )
  }
}