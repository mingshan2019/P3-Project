import React from 'react'
import { Link } from 'react-router-dom';
import { Color_bright } from '../Utils';


export default function NavTab(props) {
  return (
    <div>
        <Link to={'/'+props.tab} style={{Color_bright}}>{props.tab}</Link>
    </div>
  )
}
