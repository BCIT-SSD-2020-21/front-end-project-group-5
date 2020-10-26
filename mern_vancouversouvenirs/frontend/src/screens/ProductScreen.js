import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Breadcrumbs from "../components/Breadcrumbs";
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {
  listProductDetails,
  createProductReview,
} from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'


const ProductScreen = ({ history, match }) => {

  //reset
  useEffect(() => {
    document.body.style.backgroundColor = '#fff';

  }, [])

  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const {
    success: successProductReview,
    error: errorProductReview,
  } = productReviewCreate

  useEffect(() => {
    if (successProductReview) {
      alert('Review Submitted!')
      setRating(0)
      setComment('')
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match, successProductReview])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    )
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Meta title={product.name} />
      <Breadcrumbs/>
      <div>
        <div className="row no-gutters">
          <div className="col-6">
            <div className="product-single-card">
              <div className="product-card-body d-flex justify-content-end"><img className="img-fluid" src={product.image} style={{maxHeight: '552px'}} /></div>
            </div>
          </div>
          <div className="col" style={{color: '#fff'}}>
            <div className="container">
              <div className="product-single-card-body">
                <h2 style={{color: 'rgb(0,0,0)'}}><strong>{product.name}</strong></h2>
                <h5 className="d-flex align-items-center"><strong>{product.price}</strong><span><span style={{textDecoration: 'line-through'}}>$182</span></span>
                </h5>
              </div>
              <div className="table-responsive table-borderless d-table-cell single">
                <table className="table table-bordered table-sm">
                  <tbody>
                  <tr>
                    <td>Product ID</td>
                    <td>
                      <h6 className="text-muted mb-2">{product.id}</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>
                      <h6 className="text-muted mb-2">{product.category}</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>Tags:</td>
                    <td>
                      <h6 className="text-muted mb-2">none</h6>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <form>
                  <div className="form-group d-flex"><input className="form-control form-control-lg" type="number" placeholder="Qty" min={1} defaultValue={1} name="qty" style={{width: '76px'}} />
                    <button onClick={addToCartHandler} className='btn single' type='submit' style={{color: '#fff'}} disabled={product.countInStock === 0}>Add To Cart
                    </button>
                  </div>
                </form>
              </div>
              <div><button className="btn" type="button"><i className="fa fa-heart" style={{color: 'rgb(0,0,0)'}} /><span style={{color: 'rgb(0,0,0)'}}>ADD TO WISHLIST</span></button>
                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-4" /><label className="form-check-label" htmlFor="formCheck-4" style={{color: 'rgb(0,0,0)'}}>I agree with the terms and conditions</label></div>
              </div>
            </div>

            <div className="social-icons single">
              <a href="#"><i className="fa fa-heart"/></a>
              <a href="#"><i className="fa fa-heart"/></a>
              <a href="#"><i className="fa fa-heart"/></a>
              <a href="#"><i className="fa fa-snapchat"/></a>
            </div>
          </div>
        </div>
        <div className="social-icons" />
        <div className="home wrapper">
          <div className="row no-gutters mx-auto home-gallery bg-white">
            <div className="col-lg-9 order-2 order-sm-2">
              <ul id="myTab2" className="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center" role="tablist">
                <li><a id="latest-products-tab" className="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 active" href="#latest-products" data-toggle="tab" role="tab" aria-controls="latest-products" aria-selected="true">Description</a></li>
                <li className="nav-item flex-sm-fill"><a id="featured-products-tab" className="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0" href="#featured-products" data-toggle="tab" role="tab" aria-controls="featured-products" aria-selected="true">Reviews</a></li>
              </ul>
              <div id="myTab2Content" className="tab-content">
                <div id="latest-products" className="tab-pane fade px-4 py-5 show active" role="tabpanel" aria-labelledby="latest-products-tab">
                  {product.description}
                </div>
                <div id="featured-products" className="tab-pane fade px-4 py-5 show" role="tabpanel" aria-labelledby="featured-products-tab">
                  <h2>Reviews</h2>
                  {product.reviews.length === 0 && <Message>No Reviews</Message>}
                  <ListGroup variant='flush'>
                    {product.reviews.map((review) => (
                      <ListGroup.Item key={review._id}>
                        <strong>{review.name}</strong>
                        <p>{review.createdAt.substring(0, 10)}</p>
                        <p>{review.comment}</p>
                      </ListGroup.Item>
                    ))}
                    <ListGroup.Item>
                      {userInfo ? (
                        <Form onSubmit={submitHandler}>
                          <Form.Group controlId='comment'>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                              as='textarea'
                              row='3'
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            ></Form.Control>
                          </Form.Group>
                          <Button type='submit' variant='primary'>
                            Submit
                          </Button>
                        </Form>
                      ) : (
                        <Message>
                          Please <Link to='/login'>sign in</Link> to write a review{' '}
                        </Message>
                      )}
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>Related Products</h1>
        <p>Lorem ipsum dolat sit amet, consectetur</p>
        <section className="py-3" style={{marginTop: '20px'}}>
          <div className="d-flex flex-row multiple-item-slider">
            <div className="products-card">
              <div className="products-card-body"><img className="img-fluid" src="images/t-shirts/apparel-t-shirt-1.jpg" />
                <h6 className="text-muted mb-2">APPAREL, T-SHIRT</h6>
                <h4>Maple leaf t-shirt</h4>
                <h5 className="d-flex align-items-baseline"><strong>$109</strong><span><span style={{textDecoration: 'line-through'}}>$182</span></span><i className="fa fa-heart-o d-flex justify-content-end align-self-center" /></h5>
              </div>
            </div>
            <div className="products-card">
              <div className="products-card-body"><img className="img-fluid" src="images/t-shirts/apparel-t-shirt-7.jpg" />
                <h6 className="text-muted mb-2">APPAREL, T-SHIRT</h6>
                <h4>Vancouver t-shirt</h4>
                <h5 className="d-flex align-items-baseline"><strong>$79</strong><span><span style={{textDecoration: 'line-through'}}>$182</span></span><i className="fa fa-heart-o d-flex justify-content-end align-self-center" /></h5>
              </div>
            </div>
            <div className="products-card">
              <div className="products-card-body"><img className="img-fluid" src="images/t-shirts/apparel-t-shirt-4.jpg" />
                <h6 className="text-muted mb-2">APPAREL, T-SHIRT</h6>
                <h4>T-shirt Grouse M</h4>
                <h5 className="d-flex align-items-baseline"><strong>$90</strong><span><span style={{textDecoration: 'line-through'}}>$182</span></span><i className="fa fa-heart-o d-flex justify-content-end align-self-center" /></h5>
              </div>
            </div>
            <div className="products-card">
              <div className="products-card-body"><img className="img-fluid" src="images/t-shirts/apparel-t-shirt-5.jpg" />
                <h6 className="text-muted mb-2">APPAREL, T-SHIRT</h6>
                <h4>Roots t-shirt</h4>
                <h5 className="d-flex align-items-baseline"><strong>$119</strong><span><span style={{textDecoration: 'line-through'}}>$182</span></span><i className="fa fa-heart-o d-flex justify-content-end align-self-center" /></h5>
              </div>
            </div>
            <div className="products-card">
              <div className="products-card-body"><img className="img-fluid" src="images/t-shirts/apparel-t-shirt-8.jpg" />
                <h6 className="text-muted mb-2">APPAREL, T-SHIRT</h6>
                <h4>T-Shirt-Totem</h4>
                <h5 className="d-flex align-items-baseline"><strong>$59</strong><span><span style={{textDecoration: 'line-through'}}>$182</span></span><i className="fa fa-heart-o d-flex justify-content-end align-self-center" /></h5>
              </div>
            </div>
            <div className="products-card">
              <div className="products-card-body"><img className="img-fluid" src="images/t-shirts/apparel-t-shirt-3.jpg" />
                <h6 className="text-muted mb-2">APPAREL, T-SHIRT</h6>
                <h4>T-Shirt-Totem</h4>
                <h5 className="d-flex align-items-baseline"><strong>$59</strong><span><span style={{textDecoration: 'line-through'}}>$182</span></span><i className="fa fa-heart-o d-flex justify-content-end align-self-center" /></h5>
              </div>
            </div>
          </div>
        </section>
      </div>
        </>
      )}
    </>
  )
}

export default ProductScreen
