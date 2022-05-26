import React from 'react'
import { Color_bg,Color_bright } from '../Utils'

export default function PListItem() {
  return (
    <div style={{background:Color_bright,padding:'2%'}}>
    <div style={{background:Color_bg, padding:'1%',marginBotton:'8%',width:'40%'}}>
        <div>Alias: </div>
        <div>Created: </div>
    </div>
    </div>
  )
}
