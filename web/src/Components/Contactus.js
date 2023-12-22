import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../css/ContactUsPage.css' // Import a CSS file for styling

function ContactUsPage() {
  return (
    <div className='contact-us-page-container'>
      <Container>
        <h1 className='heading'>Contact Us</h1>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId='formFullName'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type='text' placeholder='Enter your full name' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formPhone'>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type='tel'
                  placeholder='Enter your phone number'
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId='formEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter your email' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formAddress'>
                <Form.Label>Address</Form.Label>
                <Form.Control type='text' placeholder='Enter your address' />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId='formDescription'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  placeholder='Enter your message or description'
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant='success' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default ContactUsPage
