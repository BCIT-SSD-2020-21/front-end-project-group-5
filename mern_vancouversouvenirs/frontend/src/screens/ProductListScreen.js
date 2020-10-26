import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'


const ProductListScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    document.body.style.backgroundColor = '#fff'; //reset

    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      <div className="row no-gutters mx-auto bg-white">
        <div className="col-lg-3 order-1 order-sm-1 order-md-2">
          <ul id="myTab-1" className="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center">
            <li><a className="nav-link text-uppercase text-left font-weight-bold">Product Categories</a></li>
          </ul>
          <div className="container">
            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1"
                                               defaultChecked/><label className="form-check-label"
                                                                      htmlFor="formCheck-1">APPAREL</label></div>
            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-2"/><label
              className="form-check-label" htmlFor="formCheck-2">ARTS &amp; CRAFTS</label></div>
            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-3"/><label
              className="form-check-label" htmlFor="formCheck-3">SMALL ITEMS</label></div>
          </div>
        </div>
        <div className="col-lg-9 order-2 order-sm-2">
          <h1>Products</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              <Paginate
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ''}
              />
            </>
          )}
        </div>
      </div>


    </>
  )
}

export default ProductListScreen
