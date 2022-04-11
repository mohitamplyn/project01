import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <footer>
            <div id="footer-section" className="text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            <ul className="footer-social-links">
                                <li> <Link to="#">Facebook</Link></li>
                                <li> <Link to="#">Twitter</Link></li>
                                <li> <Link to="#">Instagram</Link></li>
                                <li> <Link to="#">Linkdin</Link></li>
                                <li> <Link to="#">Pinterest</Link></li>
                            </ul>
                            <p className="copyright">
                                &copy; 2022 Bopp - Created By <a href="https://www.amplework.com/">Amplework Software Pvt. Ltd</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="back-to-top">
                <i className="fa fa-angle-up fa-3x"></i>
            </div>
        </footer>
    )
}

export default Footer;