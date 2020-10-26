import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {

    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (


    <div className="container about1" style={{marginTop: '36px'}}>
      <div className="row no-gutters mx-auto">
        <div className="col-lg-8 col-xl-8 mb-4">
          <div className="carousel slide" data-ride="carousel" id="carousel-1">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card home-gallery"><img className="card-img w-100 d-block" src="images/t-shirts/apparel-t-shirt-8.jpg" />
                  <div className="card-img-overlay" style={{paddingRight: '60px', paddingLeft: '60px', paddingTop: '40px'}}>
                    <h4 style={{color: 'rgb(86,142,191)', fontSize: '36px'}}>HIGHEST QUALITY</h4>
                    <h4 style={{fontSize: '60px', color: 'rgb(221,178,49)'}}>T-SHIRT</h4>
                    <h4 style={{color: 'rgb(221,178,49)', fontSize: '40px'}}>FRUIT</h4>
                    <p style={{color: 'rgb(221,178,49)'}}>SHOP NOW</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card home-gallery"><img className="card-img w-100 d-block" src="images/t-shirts/apparel-t-shirt-1.jpg" />
                  <div className="card-img-overlay" style={{paddingRight: '60px', paddingLeft: '60px', paddingTop: '40px'}}>
                    <h4 style={{color: 'rgb(86,142,191)', fontSize: '30px'}}>HIGHEST RELIABILITY</h4>
                    <h2 style={{fontSize: '60px', color: 'rgb(221,178,49)'}}>T-SHIRT</h2>
                    <h4 style={{color: 'rgb(221,178,49)', fontSize: '40px'}}>OH! CANADA</h4>
                    <p style={{color: 'rgb(221,178,49)'}}>SHOP NOW</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card home-gallery"><img className="card-img w-100 d-block" src="images/t-shirts/apparel-t-shirt-4.jpg" />
                  <div className="card-img-overlay" style={{paddingRight: '50px', paddingLeft: '60px', paddingTop: '40px', height: '100%'}}>
                    <h4 style={{color: 'rgb(86,142,191)', fontSize: '31px'}}>HIGHEST PERFORMANCE</h4>
                    <h4 style={{fontSize: '60px', color: 'rgb(221,178,49)'}}>T-SHIRT</h4>
                    <h4 style={{color: 'rgb(221,178,49)', fontSize: '40px'}}>HOPES &amp; DREAMS</h4>
                    <p style={{color: 'rgb(221,178,49)'}}>SHOP NOW</p>
                  </div>
                </div>
              </div>
            </div>
            <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span className="carousel-control-prev-icon" /><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span className="carousel-control-next-icon" /><span className="sr-only">Next</span></a></div>
            <ol className="carousel-indicators">
              <li data-target="#carousel-1" data-slide-to={0} className="active" />
              <li data-target="#carousel-1" data-slide-to={1} />
              <li data-target="#carousel-1" data-slide-to={2} />
            </ol>
          </div>
        </div>
        <div className="col-lg-4 col-xl-4 mb-4">
          <div className="row no-gutters">
            <div className="col-xl-10 d-inline-flex d-lg-block">
              <div className="card home"><img className="card-img w-100 d-block" src="images/t-shirts/apparel-t-shirt-2.jpg" style={{height: '200px', maxWidth: '350px'}} />
                <div className="card-img-overlay">
                  <h4 style={{color: 'rgb(255,255,255)'}}>ANGELITE <br />ANGEL</h4>
                  <p style={{color: 'rgba(255,255,255,0.8)'}}><span style={{textDecoration: 'underline'}}>DISCOVER SOON</span></p>
                </div>
              </div>
              <div className="card home"><img className="card-img w-100 d-block" src="images/gloves-socks-hats/apparel-socks-1.jpg" style={{height: '200px', maxWidth: '350px'}} />
                <div className="card-img-overlay">
                  <h4>KEY<br />CHAIN</h4>
                  <p style={{color: 'rgba(33,37,41,0.8)'}}><span style={{textDecoration: 'underline'}}>DISCOVER SOON</span></p>
                </div>
              </div>
              <div className="card home"><img className="card-img w-100 d-block" src="images/gloves-socks-hats/apparel-gloves-1.jpg" style={{height: '200px', maxWidth: '350px'}} />
                <div className="card-img-overlay">
                  <h4 style={{color: 'rgb(255,255,255)'}}>QUALITY<br />GEMS</h4>
                  <p style={{color: 'rgba(255,255,255,0.8)'}}><span style={{textDecoration: 'underline'}}>DISCOVER SOON</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductCarousel
