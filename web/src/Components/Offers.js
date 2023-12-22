import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../css/OfferPage.css' // Import a CSS file for styling
import Image1 from '../Asserts/Images/barfi.webp' // Adjust the path as needed
import Image2 from '../Asserts/Images/pic.webp' // Adjust the path as needed
import Image3 from '../Asserts/Images/br.png' // Adjust the path as needed
import Image4 from '../Asserts/Images/b.png' // Adjust the ath as needed
import Image5 from '../Asserts/Images/barfi.webp' // Adjust the path as needed
import Image6 from '../Asserts/Images/br.png' // Adjust the path as needed
function OfferPage() {
  const offerings = [
    { name: 'Barfi', price: '900/=', image: Image1 },
    { name: 'Barfi', price: '900/=', image: Image2 },
    { name: 'Barfi', price: '900/=', image: Image3 },
    { name: 'Barfi', price: '900/=', image: Image4 },
    { name: 'Barfi', price: '900/=', image: Image5 },
    { name: 'Barfi', price: '900/=', image: Image6 },
  ]

  return (
    <div className='offer-page-container'>
      <h1 className='heading'>Our Offerings</h1>
      <div className='card-container'>
        {offerings.map((offer, index) => (
          <Card key={index} className='offering-card'>
            <Card.Img variant='top' src={offer.image} />
            <Card.Body>
              <Card.Title>{offer.name}</Card.Title>
              <Card.Text>Price: {offer.price}</Card.Text>
              <Button variant='light'>Order</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default OfferPage
