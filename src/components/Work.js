import React from 'react'
// import { Link } from 'react-scroll'
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";

function Work() {
  return (
    <section>
      <div id="screenshots-section" className="pad-sec">
        <div className="container">
          <div className="title-section text-center animated out" data-animation="fadeInUp" data-delay="0">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <h2>Gallery</h2>
                <p>Take an  screenshot of what you want to highlight</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="screenshots-carousel animated out" data-animation="fadeInUp" data-delay="0">
                <div className="shot">
                  <div className="screen">
                    <Link className="zoom" to="assets/images/screenshots/001.png"><img src="assets/images/screenshots/001.png" alt="screenshot" /></Link>
                  </div>
                </div>
                <div className="shot">
                  <div className="screen">
                    <Link className="zoom" to="assets/images/screenshots/002.png"><img src="assets/images/screenshots/002.png" alt="screenshot" /></Link>
                  </div>
                </div>
                <div className="shot">
                  <div className="screen">
                    <Link className="zoom" to="assets/images/screenshots/003.png"><img src="assets/images/screenshots/003.png" alt="screenshot" /></Link>
                  </div>
                </div>
                <div className="shot">
                  <div className="screen">
                    <Link className="zoom" to="assets/images/screenshots/004.png"><img src="assets/images/screenshots/004.png" alt="screenshot" /></Link>
                  </div>
                </div>
                <div className="shot">
                  <div className="screen">
                    <Link to=""></Link>
                    <Link className="zoom" to="assets/images/screenshots/005.png"><img src="assets/images/screenshots/005.png" alt="screenshot" /></Link>
                  </div>
                </div>
                <div className="shot">
                  <div className="screen">
                    <Link className="zoom" to="assets/images/screenshots/006.png"><img src="assets/images/screenshots/006.png" alt="screenshot" /></Link>
                  </div>
                </div>
                <div className="shot">
                  <div className="screen">
                    <Link className="zoom" to="assets/images/screenshots/007.png"><img src="assets/images/screenshots/007.png" alt="screenshot" /></Link>
                  </div>
                </div>
                <div className="shot">
                  <div className="screen">
                    <Link className="zoom" to="assets/images/screenshots/004.png"><img src="assets/images/screenshots/004.png" alt="screenshot" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      /</section>
  )

}

export default Work;