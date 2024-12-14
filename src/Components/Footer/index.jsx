import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='bg-black py-4'>
      <div className='container'>
        <Row>
          <Col md={6}>
            <p className='text-white mb-0'>support@worku.com</p>
          </Col>
          <Col md={6}>
            <p className='text-white mb-0 float-end'>© Copyright Worku. All Rights Reserved</p>
          </Col>

        </Row>
      </div>
    </div>
  )
}

export default Footer
