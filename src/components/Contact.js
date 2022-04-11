import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <section>
            <footer>
                <div id="footer-section" className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <ul className="footer-social-links">
                                    <li> <Link to="#">Facebook</Link></li>
                                    <li> <Link to="#">Twitter</Link></li>
                                    <li> <Link to="#">Dribbble</Link></li>
                                    <li> <Link to="#">Behance</Link></li>
                                    <li> <Link to="#">Pinterest</Link></li>
                                </ul>
                                <p className="copyright">
                                    &copy; 2016 Salient - Created By <Link to="#">Stock</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>

    )
}

export default Footer;


