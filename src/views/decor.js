import React from 'react'

import { Helmet } from 'react-helmet'

import './decor.css'

const Decor = (props) => {
  return (
    <div className="decor-container">
      <Helmet>
        <title>Decor - Muse E-Commerce</title>
        <meta property="og:title" content="Decor - Muse E-Commerce" />
      </Helmet>
      <div className="decor-pricing">
        <div className="decor-hero">
          <div className="decor-container1">
            <h1 className="decor-text">KATHAKALI ACRYLIC PAINTING</h1>
            <span className="decor-text1">
              From the Kannan Chithralaya collection in our Paintings category,
              this is Kathakali | Acrylic Painting. Item specifications: Acrylic
              on Canvas
            </span>
            <div className="decor-btn-group">
              <button className="decor-button button">ADD TO CART</button>
              <button className="decor-button1 button">BUY NOW</button>
            </div>
          </div>
          <img
            src="/playground_assets/pab295-1100w.jpg"
            className="decor-image"
          />
        </div>
      </div>
      <div className="decor-hero1">
        <div className="decor-container2">
          <h1 className="decor-text2">Ahobhilam Prabhaker  </h1>
          <span className="decor-text3">
            Ahobilam Prabhakar is a Hyderabad based artist who masters the
            skills to visually present the complex chemistry of human
            emotions-be it love, anger, despair or devotion. His drawings, lines
            and colours make his unique decorative visual vocabulary depicting
            the idea of human behaviour that are emotionally driven.
          </span>
          <div className="decor-btn-group1">
            <button className="decor-button2 button">ADD TO CART</button>
            <button className="decor-button3 button">BUY NOW</button>
          </div>
        </div>
        <img
          src="/playground_assets/17ee110847c12113727ce196bd98f239-1100w.jpg"
          className="decor-image1"
        />
      </div>
    </div>
  )
}

export default Decor
