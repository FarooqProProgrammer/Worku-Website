import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'



const Header = () => {
  return (
    <Navbar expand="lg" className="primary-bg-color py-3">
      <Container>
        <Navbar.Brand href="#home" className="text-white koranOne">Worku</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/feature" className='text-white'>Features</Nav.Link>
            <Nav.Link href="/contact" className='text-white'>Contact</Nav.Link>
            <Nav.Link href="/help" className='text-white'>Help</Nav.Link>
            <Nav.Link href="/login" className='text-white'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
