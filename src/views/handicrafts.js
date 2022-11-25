import React from 'react'

import { Helmet } from 'react-helmet'

import './handicrafts.css'

const Handicrafts = (props) => {
  return (
    <div className="handicrafts-container">
      <Helmet>
        <title>Handicrafts - Muse E-Commerce</title>
        <meta property="og:title" content="Handicrafts - Muse E-Commerce" />
      </Helmet>
      <div className="handicrafts-pricing">
        <div className="handicrafts-hero">
          <div className="handicrafts-container1">
            <h1 className="handicrafts-text">TRADITIONAL WOODEN ELEPHANT</h1>
            <span className="handicrafts-text01">
              <span>
                Exploring India and discovering its handicraft culture is like
                opening the door to the cave of wonders with incredible handmade
                items. We bring you some of these traditional handicrafts, let’s
                learn their origins, and find out where to source these from.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="handicrafts-btn-group">
              <button className="handicrafts-button button">ADD TO CART</button>
              <button className="handicrafts-button1 button">BUY NOW</button>
            </div>
          </div>
          <img
            src="/playground_assets/indian-traditional-handicrafts-1100w.jpg"
            className="handicrafts-image"
          />
        </div>
      </div>
      <div className="handicrafts-hero1">
        <div className="handicrafts-container2">
          <h1 className="handicrafts-text05">BLUE POTTERY</h1>
          <span className="handicrafts-text06">
            <span>
              Blue pottery is a widely popular traditional craft from Jaipur,
              Rajasthan. Although, the art originally has a Turko-Persian
              background.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>
              The name ‘Blue Pottery’ comes from a vibrant cobalt blue dye
              colour that artists use for making articles.
            </span>
          </span>
          <div className="handicrafts-btn-group1">
            <button className="handicrafts-button2 button">ADD TO CART</button>
            <button className="handicrafts-button3 button">BUY NOW</button>
          </div>
        </div>
        <img
          src="/playground_assets/famous-traditional-crafts-of-rajasthan-in-india-f-1100w.jpg"
          className="handicrafts-image1"
        />
      </div>
      <div className="handicrafts-hero2">
        <div className="handicrafts-container3">
          <h1 className="handicrafts-text13">RAJASTHANI PUPPET</h1>
          <span className="handicrafts-text14">
            <span>
              A puppet is familiar in India as a kathputli. The name links back
              with two Rajasthani language words, Kath meaning wood and Putli,
              which means no life.
            </span>
            <br></br>
            <span>
              Kathputli means a puppet, which is completely made with wood. An
              artist uses cotton and colourful clothes to make them look
              stunning.
            </span>
          </span>
          <div className="handicrafts-btn-group2">
            <button className="handicrafts-button4 button">ADD TO CART </button>
            <button className="handicrafts-button5 button">BUY NOW</button>
          </div>
        </div>
        <img
          src="/playground_assets/famous-traditional-crafts-of-rajasthan-in-india-puppet-1100w.jpg"
          className="handicrafts-image2"
        />
      </div>
    </div>
  )
}

export default Handicrafts
