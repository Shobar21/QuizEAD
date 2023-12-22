import React from 'react'
import '../css/HomePage.css' // Import a CSS file for styling
import Image1 from '../Asserts/Images/th.jpeg' // Adjust the path as needed
import Image2 from '../Asserts/Images/th (1).jpeg' // Adjust the path as needed

function HomePage() {
  return (
    <div className='home-page-container'>
      <div className='content'>
        <h1 className='heading'>Indulge in a Symphony of Flavors</h1>
        <p>
          Welcome to a world where the aroma of freshly baked wonders captivates
          your senses. Our master bakers craft each creation with passion, using
          only the finest ingredients to ensure every bite is pure delight.
        </p>
        <p>
          From flaky croissants to decadent cakes, experience the epitome of
          taste and craftsmanship. Whether it's a special occasion or a craving
          for the extraordinary, our bakery offers a haven for your palate.
          Elevate your moments with the magic of our oven-fresh delights.
        </p>
        <p>Your journey to exceptional taste begins here.</p>
      </div>
      <div className='images-container'>
        <div className='image-circle'>
          <img src={Image1} alt='Bakery Image 1' />
        </div>
        <div className='image-circle'>
          <img src={Image2} alt='Bakery Image 2' />
        </div>
      </div>
    </div>
  )
}

export default HomePage
