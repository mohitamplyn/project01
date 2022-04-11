import React from 'react'
import { Link } from 'react-scroll'

function Header() {
    return (
        <div >
            {/* <!-- Navbar --> */}
            <header className="header">
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation-nav">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link  smooth to="home" className="navbar-brand"  offset={-70}> <img src="assets/images/logo.png" alt /></Link>
                        </div>
                        {/* <!-- Collect the nav Links, forms, and other content for toggling --> */}
                        <div className="collapse navbar-collapse" id="navigation-nav">
                            <ul className="nav navbar-nav navbar-right">
                                <li class="active"> <Link smooth to="home" offset={-70}> Home</Link></li>
                                {/* <li> <Link to="landing-offer">About</Link></li> */}
                                {/* <li> <Link to="features-section">Services</Link></li> */}
                                <li> <Link smooth to="team-section">Team</Link></li>
                                <li> <Link smooth to="screenshots-section">Works</Link></li>
                                {/* <li> <Link to="prices-section">Subscribe</Link></li> */}
                                <li> <Link smooth to="footer-section">Contact</Link></li>
                            </ul>
                        </div>
                        {/* <!-- /.navbar-collapse --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </nav>
            </header>
            {/* <!-- End Navbar -->    */}
        </div>
    )
}

export default Header;