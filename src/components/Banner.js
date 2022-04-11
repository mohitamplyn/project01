import React from 'react'
import { Link } from 'react-scroll'

function Banner() {
    return (
        <section>
            <div id="hero-section" className="landing-hero" data-stellar-background-ratio="0">
                <div className="hero-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <div className="hero-text">
                                    <div className="herolider">
                                        <ul className="caption-slides">
                                            <li className="caption">
                                                <h1>Welcome to Bopp</h1>
                                                <div className="div-line"></div>
                                                <p className="hero">Branding, Photography &amp; Web Development</p>
                                            </li>
                                            <li className="caption">
                                                <h1>RESPONSIVE Bopp </h1>
                                                <div className="div-line"></div>
                                                <p className="hero">Design &amp; Development</p>
                                            </li>
                                            <li className="caption">
                                                <h1>HIGH QUALITY Bopp App</h1>
                                                <div className="div-line"></div>
                                                <p className="hero">React &amp; Node</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="hero-btn">
                                    <Link to="#landing-offer" className="btn btn-clean">Read more</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;



















