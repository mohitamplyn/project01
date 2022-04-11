import React from 'react'

function About() {
  return (
    < section>
      <div id="landing-offer" className="pad-sec">
        <div className="container">

          <div className="title-section big-title-sec animated out" data-animation="fadeInUp" data-delay="0">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <h2 className="big-title">About Us</h2>
                {/* <h1 className="big-subtitle">We’re small branding &amp; digital studio</h1> */}
                <p className="about-text">Well, benefits of about us page are many. Various types of visitors check out your "About Us" page. They can be first-time visitors, regular visitors, people who wish to work with you, and possible customers. With all kinds of visitors coming to your website, you need to offer sufficient and valuable information to convince them to establish a more substantial connection with you and your business.</p>
              </div>
            </div>
          </div>

          <div className="offer-boxes">

            <div className="row">
              <div className="col-sm-4">
                <div className="offer-post text-center animated out" data-animation="fadeInLeft" data-delay="0">
                  <div className="offer-icon">
                    <span className="icon-desktop"></span>
                  </div>
                  <h4>DESIGNS &amp; INTERFACES</h4>
                  <p>User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms—e.g., voice-controlled interfaces.</p>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="offer-post text-center animated out" data-animation="fadeInUp" data-delay="0">
                  <div className="offer-icon">
                    <span className="icon-piechart"></span>
                  </div>
                  <h4>Branding</h4>
                  <p>Branding is the process of creating a strong, positive perception of a company, its products or services in the customer’s mind by combining such elements as logo, design, mission statement, and a consistent theme throughout all marketing communications.</p>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="offer-post text-center animated out" data-animation="fadeInRight" data-delay="0">
                  <div className="offer-icon">
                    <span className="icon-lifesaver"></span>
                  </div>
                  <h4>Dedicated support</h4>
                  <p>Dedicated support is an outsourced support model where the support provider assigns an expert (or experts) exclusively for your company. Today we've seen what kind of companies use a dedicated support model, and what you need to look for when selecting a team..</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

  )
}
export default About;



