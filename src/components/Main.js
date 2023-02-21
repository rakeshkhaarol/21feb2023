import React from 'react'
import { Col , Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <main>
        <Row className="h-100">
            <Col sm={2} className="r_tbdr h-100">
                <aside>aa</aside>
            </Col>
            <Col sm={10} className="r_tbdr h-100">
                <Outlet/>
            </Col>
        </Row>
    </main>
  )
}
