import React from 'react'
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'
import BakeryLogo from '../Asserts/Images/logo.jpg' // Adjust the path as needed
import { Link } from 'react-router-dom'
import Alloffers from './Alloffers'

function CustomNavbar() {
  return (
    <BootstrapNavbar bg='white' expand='lg'>
      <BootstrapNavbar.Brand href='#home'>
        <img
          src={BakeryLogo}
          alt='Bakery Logo'
          height='100'
          className='d-inline-block align-top'
        />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls='basic-navbar-nav' />
      <BootstrapNavbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto d-flex column-wrap'>
          <Nav.Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={'/Alloffers'}
            >
              {' '}
              Menu{' '}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={'/Aboutus'}
            >
              About Us{' '}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={'/Contactus'}
            >
              Contact us
            </Link>
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  )
}

export default CustomNavbar
