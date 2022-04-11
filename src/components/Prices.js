import React from 'react'
import { Link } from 'react-scroll'

function Prices() {
  return (
    <section>
      <div id="prices-section" className="pad-sec">
        <div className="container">
          <div className="title-section text-center animated out" data-animation="fadeInUp" data-delay="0">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <h2>Our Prices</h2>

                <p>Seamlessly restore client-focused potentialities rather than functional strategic theme areas.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <ul className="price-table animated out" data-animation="fadeInLeft" data-delay="0">
                <li className="title-price">
                  <h3>Basic Pack</h3>
                </li>
                <li className="price-box">
                  <p className="price"><span className="currency">$</span>5.99</p>
                  <p className="months">per month</p>
                </li>
                <li><p>Full Access</p></li>
                <li>
                  <p>5 Projects</p>
                </li>
                <li>
                  <p>5 GB Storage</p>
                </li>
                <li>
                  <p>100GB Monthly Bandwidth</p>
                </li>
                <li><p>Premium Support</p></li>
                <li>
                  <p>Your domain</p>
                </li>
                <li>
                  <Link to="#" className="btn btn-sm btn-dark">Purchase</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="price-table animated out" data-animation="fadeInUp" data-delay="0">
                <li className="title-price">
                  <h3>Basic Pack</h3>
                </li>
                <li className="price-box">
                  <p className="price"><span className="currency">$</span>5.99</p>
                  <p className="months">per month</p>
                </li>
                <li><p>Full Access</p></li>
                <li>
                  <p>5 Projects</p>
                </li>
                <li>
                  <p>5 GB Storage</p>
                </li>
                <li>
                  <p>100GB Monthly Bandwidth</p>
                </li>
                <li><p>Premium Support</p></li>
                <li>
                  <p>Your domain</p>
                </li>
                <li>
                  <Link to="#" className="btn btn-sm btn-dark">Purchase</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="price-table animated out" data-animation="fadeInRight" data-delay="0">
                <li className="title-price">
                  <h3>Basic Pack</h3>
                </li>
                <li className="price-box">
                  <p className="price"><span className="currency">$</span>5.99</p>
                  <p className="months">per month</p>
                </li>
                <li><p>Full Access</p></li>
                <li>
                  <p>5 Projects</p>
                </li>
                <li>
                  <p>5 GB Storage</p>
                </li>
                <li>
                  <p>100GB Monthly Bandwidth</p>
                </li>
                <li><p>Premium Support</p></li>
                <li>
                  <p>Your domain</p>
                </li>
                <li>
                  <Link to="#" className="btn btn-sm btn-dark">Purchase</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div id="module-maps">
          <div id="map"></div>
        </div>
      </section>
    </section>
  )
}

export default Prices;



