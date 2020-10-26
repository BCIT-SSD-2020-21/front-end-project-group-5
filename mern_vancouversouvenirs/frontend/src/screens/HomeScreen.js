import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(86,142,191)';

    const script = document.createElement("script");
    script.src = "./bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);

    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}

      <div className="home wrapper">
        <div className="row no-gutters mx-auto home-gallery bg-white">
          <div className="col-lg-9 order-2 order-sm-2">
            <ul id="myTab2" className="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center" role="tablist">
              <li className="nav-item flex-sm-fill"><a id="latest-products-tab" className="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 active" href="#latest-products" data-toggle="tab" role="tab" aria-controls="latest-products" aria-selected="true">Latest Products</a></li>
              <li className="nav-item flex-sm-fill"><a id="featured-products-tab" className="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0" href="#featured-products" data-toggle="tab" role="tab" aria-controls="featured-products" aria-selected="true">Featured</a></li>
            </ul>
            <hr style={{margin: '0px'}} />
            <div id="myTab2Content" className="tab-content">
              <div id="latest-products" className="tab-pane fade px-4 py-5 show active" role="tabpanel" aria-labelledby="latest-products-tab">
                <div className="home grid-container">
                  <div className="product1">
                    <div className="products-card">
                      <div className="products-card-body"><img className="img-fluid" src="images/t-shirts/apparel-t-shirt-10.jpeg" />
                        <h6 className="text-muted mb-2">APPAREL, T-SHIRT</h6>
                        <h4>T-Shirt-Totem</h4>
                        <h5 className="d-flex align-items-baseline"><strong>$59</strong><span><span style={{textDecoration: 'line-through'}}>$182</span></span><i className="fa fa-heart-o d-flex justify-content-end align-self-center" /></h5>
                      </div>
                    </div>
                  </div>
                  <div className="product2">
                    <div className="products-card">
                      <div className="products-card-body"><img className="img-fluid" src="images/gloves-socks-hats/apparel-hat-1.jpeg" />
                        <h6 className="text-muted mb-2">APPAREL, T-SHIRT</h6>
                        <h4>T-Shirt-Totem</h4>
                        <h5 className="d-flex align-items-baseline"><strong>$119</strong><span><span style={{textDecoration: 'line-through'}}>$182</span></span><i className="fa fa-heart-o d-flex justify-content-end align-self-center" /></h5>
                      </div>
                    </div>
                  </div>
                  <div className="product3">
                    <div className="products-card">
                      <div className="products-card-body"><img className="img-fluid" src="images/scarves/apparel-scarvers-1-1.jpg" style={{height: '552px'}} />
                        <h6 className="text-muted mb-2">APPAREL, T-SHIRT</h6>
                        <h4>Native Scarve</h4>
                        <h5 className="d-flex align-items-baseline"><strong>$119</strong><span><span style={{textDecoration: 'line-through'}}>$182</span></span><i className="fa fa-heart-o d-flex justify-content-end align-self-center" /></h5>
                      </div>
                    </div>
                  </div>
                  <div className="product4">
                    <div className="products-card">
                      <div className="products-card-body"><img className="img-fluid" src="images/scarves/apparel-scarvers-1-2.jpg" style={{height: '548px'}} />
                        <h6 className="text-muted mb-2">APPAREL, T-SHIRT</h6>
                        <h4>Native Scarve</h4>
                        <h5 className="d-flex align-items-baseline"><strong>$119</strong><span><span style={{textDecoration: 'line-through'}}>$182</span></span><i className="fa fa-heart-o d-flex justify-content-end align-self-center" /></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="featured-products" className="tab-pane fade px-4 py-5 show" role="tabpanel" aria-labelledby="featured-products-tab">
                <div id="w_shop_105" className="carousel slide w_shop_105_indicators w_shop_105_control_button thumb_scroll_x swipe_x ps_easeOutInCubic" data-ride="carousel" data-pause="hover" data-interval={8000} data-duration={2000}>
                  <ol className="carousel-indicators">
                    <li className="active" data-target="#w_shop_105" data-slide-to={0} style={{filter: 'blur(0px)'}} />
                    <li data-target="#w_shop_105" data-slide-to={1} />
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active"><img src="images/scarves/apparel-scarvers-1-1.jpg" alt="w_shop_105_01" />
                      <div className="w_shop_105_left_box"><span data-animation="animated fadeInLeft" style={{fontFamily: 'roboto'}}>$119.00</span>
                        <h1 className="left-h" data-animation="animated fadeInLeft">product name and modal number</h1>
                        <p data-animation="animated fadeInLeft">Lorem ipsum dolor sit amet onsectetuer adipiscing elit unc varius facilisis eros in velit quis arcu ornare laoreet urabitur adipiscing luctus massa.</p><a href="#" data-animation="animated fadeInLeft">BUY now</a></div>
                      <div className="w_shop_105_right_box" data-animation="animated fadeInRight">
                        <ul>
                          <li data-animation="animated fadeInRight">WARM</li>
                          <li data-animation="animated fadeInRight">MOFU</li>
                          <li data-animation="animated fadeInRight">MOFU</li>
                          <li data-animation="animated fadeInRight">TOFU</li>
                          <li data-animation="animated fadeInRight">Other Features<br /></li>
                        </ul>
                      </div>
                    </div>
                    <div className="carousel-item"><img src="images/scarves/apparel-scarvers-1-2.jpg" alt="w_shop_105_01" />
                      <div className="w_shop_105_left_box"><span data-animation="animated fadeInLeft" style={{fontFamily: 'roboto'}}>$119.00</span>
                        <h1 className="left-h" data-animation="animated fadeInLeft">product name and modal number</h1>
                        <p data-animation="animated fadeInLeft">Lorem ipsum dolor sit amet onsectetuer adipiscing elit unc varius facilisis eros in velit quis arcu ornare laoreet urabitur adipiscing luctus massa.</p><a href="#" data-animation="animated fadeInLeft">BUY now</a></div>
                      <div className="w_shop_105_right_box" data-animation="animated fadeInRight">
                        <ul>
                          <li data-animation="animated fadeInRight">WARM</li>
                          <li data-animation="animated fadeInRight">MOFU</li>
                          <li data-animation="animated fadeInRight">MOFU</li>
                          <li data-animation="animated fadeInRight">TOFU</li>
                          <li data-animation="animated fadeInRight">Other Features<br /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 order-1 order-sm-1 order-md-2">
            <ul id="myTab-1" className="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center">
              <li><a className="nav-link text-uppercase font-weight-bold">Product Categories</a></li>
            </ul>
            <div className="container">
              <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1" defaultChecked /><label className="form-check-label" htmlFor="formCheck-1">APPAREL</label></div>
              <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-2" /><label className="form-check-label" htmlFor="formCheck-2">ARTS &amp; CRAFTS</label></div>
              <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-3" /><label className="form-check-label" htmlFor="formCheck-3">SMALL ITEMS</label></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default HomeScreen
