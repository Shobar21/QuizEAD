import React from 'react'

function Footer() {
  return (
    <div
      className={'bg-dark text-white align-item-center justify-content-center'}
      style={{ padding: '20px', textAlign: 'center' }}
    >
      Copyrights @{new Date().getFullYear()} by Shoba Rohra
    </div>
  )
}

export default Footer
