import React, { Component } from 'react'
import Nav from '../HomePage/Nav'

export default class Login extends Component {
  render() {
    return (
        <div style={{background:'grey', height:'900px'}}>
            <Nav/>
            <div style={{padding: '200px 700px'}}>
            <form>
            <label>
            Name:
            <input type="text" name="name" />
            </label>
            <br/>
            <br/>
            <label>
            Password:
            <input type="password" name="pw" />
            </label>
            <br/>
            <br/>
            <input type="submit" value="Submit" />
            </form>
            </div>
            </div>
    )
  }
}
