import React, { Component } from 'react'
import Nav from '../HomePage/Nav'


import ImagePicker from '@s-ui/react-image-picker'

const images = [
  {
    alt: 'Alternate text for image 1',
    src: 'https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/2.png',
    thumb: 'https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/2_tn.jpg'
  },
  {
    alt: 'Alternate text for image 2',
    src: 'https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/4.jpg',
    thumb: 'https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/4_tn.jpg'
  }
]

const actions = [
  {
    callback: (image) => alert('Clicked on action 1 with image ' + image.src),
    node: <div>Action 1</div>
  },
  {
    callback: (image) => alert('Clicked on action 2 with image ' + image.src),
    node: <div>Action 2</div>
  }
]

const params = {
  actions,
  images,
  defaultAlt: 'No text for image',
  emptyImage: <img src="http://URL-EMPTY-IMAGE" alt="Empty image" />,
  onClick: (image) => alert('clicked on image ' + image.src),
  selected: 1
}

export default function Price() {
    
  
  return (
      <div>
       <Nav/>
       <div>Price
       </div>
       <ImagePicker {...params} />
       </div>
    )

}
