import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer id="myFooter">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-5">
            <h5>CONTACT INFORMATION</h5>
            <ul>
              <li><b>ADDRESS:</b></li>
              <li><a href="#"> 222-888 Broadway Ave, BC, V2V 8A8 </a></li>
              <br />
              <li><b>PHONE:</b></li>
              <li><a href="#"> (604) 222-8888</a></li>
              <br />
              <li><b>EMAIL</b></li>
              <li><a href="mailto:askus@SSDgifts.ca"> askus@SSDgifts.ca</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-xl-2">
            <h5>USEFUL LINKS</h5>
            <ul>
              <li><a href="#">CONTACT US</a></li>
              <li><a href="#">RETURN POLICY<br /></a></li>
              <li><a href="#">DELIVERY</a></li>
              <li><a href="#">THEME FEATURES</a></li>
              <li><b>FAQS</b></li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 col-xl-2">
            <h5>CATEGORIES</h5>
            <ul>
              <li><a href="/products.html">APPAREL</a></li>
              <li><a href="/products.html">ARTS &amp; CRAFTS<br /></a></li>
              <li><a href="/products.html">SMALL ITEMS</a></li>
              <li />
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <h5>ABOUT US</h5>
            <ul>
              <li><a href="#">Opened in 2020, our humble Shop is working
                to promote the local heritage and the unique
                culture of Vancouver by offering Vancouver-made
                souvenir gifts from our local artists.
                <br />
                Visa, MasterCard, Debit and cash gladly accepted.
              </a></li></ul><a href="#">
          </a></div><a href="#">
        </a></div><a href="#">
      </a></div><a href="#">
      <div style={{width: '720px'}} />
      <div style={{background: 'rgb(64,60,2)'}}>
        <div className="d-flex mx-auto" style={{maxWidth: '1140px', height: '100%'}}>
          <p className="text-left d-block footer-text" style={{color: 'rgb(255,255,255)'}}>2020 SSD-ecommerce-website.com All rights are reserved</p>
          <div className="d-flex align-items-center" style={{width: '71%', textAlign: 'right'}}><img className="ml-auto" src="images/temp_icons.png" /></div>
        </div>
      </div>
    </a></footer>
  )
}

export default Footer
