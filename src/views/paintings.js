import React from 'react'

import { Helmet } from 'react-helmet'

import './paintings.css'

const Paintings = (props) => {
  return (
    <div className="paintings-container">
      <Helmet>
        <title>Paintings - Muse E-Commerce</title>
        <meta property="og:title" content="Paintings - Muse E-Commerce" />
      </Helmet>
      <div className="paintings-pricing">
        <div className="paintings-hero">
          <div className="paintings-container1">
            <h1 className="paintings-text">
              CRAFTING YOUR CURIOSITY Metal Wall Decor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <span className="paintings-text1">
              <span>
                It can place this wall decor in your dining room or on your
                living room to add a unique touch to your home decor. This wall
                decor is a perfect gift choice for special occasions.
              </span>
              <br></br>
              <span>
                This wall decor features a beautiful tree motif, which
                complements a nature inspired decor.
              </span>
            </span>
            <div className="paintings-btn-group">
              <button className="paintings-button button">ADD TO CART</button>
              <button className="paintings-button1 button">BUY NOW</button>
            </div>
          </div>
          <img
            src="/playground_assets/71vp2phvnel._sx679_-1100w.jpg"
            className="paintings-image"
          />
        </div>
      </div>
      <div className="paintings-hero1">
        <div className="paintings-container2">
          <h1 className="paintings-text5">CELESTE HOME DECOR</h1>
          <span className="paintings-text6">
            An incredibly adorable golden cherub sits atop a glass block, lost
            in a fantasy as its gorgeous white wings sprawl out behind it,
            giving this piece a strong aura of joy and wonderment. It&apos;s the
            perfect showpiece for living rooms, bedrooms, lounges, and more!
          </span>
          <div className="paintings-btn-group1">
            <button className="paintings-button2 button">ADD TO CART</button>
            <button className="paintings-button3 button">BUY NOW</button>
          </div>
        </div>
        <img
          src="/playground_assets/17ee110847c12113727ce196bd98f239-1100w.jpg"
          className="paintings-image1"
        />
      </div>
    </div>
  )
}

export default Paintings
