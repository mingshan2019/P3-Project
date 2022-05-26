import React from 'react'
import { Color_bg } from '../Utils'

export default function SignUpModal() {
  return (
    <div style={{width:'20%',height:'100%',background:Color_bg,padding:'10%'}}>
        
        <form>
            <label >
                Email
                <input></input>
            </label>
            <br/>
            <br/>
            <label>
                Password
                <input></input>
            </label>
            <br/>
            <br/>
            <label>
                Retype Password
                <input></input>
            </label>
            <br/>
            <br/>
            <input type="submit" value="Submit" />  

        </form>
    </div>
  )
}
