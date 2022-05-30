import React from 'react'
import { Color_bg,Color_bright } from '../Utils'
import {Card} from 'antd'

export default function PListItem(props) {
  return (
    <Card style={{marginBottom:'5%'}}>
        <div>Alias: {props.alias}</div>
        <div>Created: {props.date}</div>
    </Card>
  )
}
