import React from 'react'
import { Color_bg,Color_bright } from '../Utils'
import {Card} from 'antd'

export default function PListItem() {
  return (
    <Card style={{marginBottom:'5%'}}>
        <div>Alias: </div>
        <div>Created: </div>
    </Card>
  )
}
