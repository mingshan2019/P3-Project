import React from 'react'
import { Link } from 'react-router-dom';
import { Color_bright } from '../Utils';


export default function NavTab(props) {
  return (
    <div style={{width:'20%'}}>
        <Link to={`/${props.tab}`} style={{color:Color_bright}}>{props.tab}</Link>
    </div>
  )
}
