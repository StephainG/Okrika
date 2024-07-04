import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
      <div className='descriptionbox'>
          <div className="descriptionbox-navigator">
              <div className="descriptionbox-navbox">
                  Description
              </div>
              <div className="descriptionbox-navbox fade">
                  Review(122)
              </div>
          </div>
          <div className="descriptionbox-description">
              <p>
                  An e-commerce website (short for electronic commerce) is an online platform that
                  allows businesses and individuals to buy and sell products or services
                  over the internet. E-commerce websites serve as digital storefronts
                  where transactions can be conducted electronically, offering
                  convenience and a broad reach to both sellers and consumers.
              </p>
              <p></p>
          </div>
    </div>
  )
}

export default DescriptionBox