import React, { Component } from 'react'
import { Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Nevigetion extends Component {
  render() {
    return (
      <>
      <Nav activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
          <Nav.Item>
          <Link className="nav-link active" to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
          <Link className="nav-link active" to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
          <Link className="nav-link active" to="/">Home</Link>
          </Nav.Item>
          
        </Nav>     
      </>
    )
  }
}
