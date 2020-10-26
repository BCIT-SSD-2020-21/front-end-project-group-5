import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import Breadcrumbs from "../components/Breadcrumbs";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const productDetails = useSelector((state) => state.productDetails)
  const { product } = productDetails

  const item_price = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)

  useEffect(() => {
    document.body.style.backgroundColor = ''; //reset

    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=checkout')
  }

  return (
    <>
      <Breadcrumbs/>

      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={4}>
                      <span className="text-muted font-weight-normal d-block">{product.category}</span>
                      <Link to={`/product/${item.product}`} className="text-dark d-inline-block align-middle" style={{fontSize:'20px', fontWeight:'500'}}>{item.name}</Link>
                    </Col>
                    <Col md={2} style={{color: 'rgb(255,0,0)'}}><strong>${item.price}</strong></Col>
                    <Col md={2}>
                      <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className='fa fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}


            </ListGroup>


          )}
        </Col>
        <Col md={4}>
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p>Product Cost</p>
                </div>
                <div className="col text-right">
                  <p><i className="fa fa-dollar" />{item_price}</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Shipping Cost</p>
                </div>
                <div className="col text-right">
                  <p><i className="fa fa-dollar" />10.00</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Discount</p>
                </div>
                <div className="col text-right">
                  <p>-&nbsp;<i className="fa fa-dollar" />10.00</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  <p style={{fontSize: '18px'}}><strong>Total</strong></p>
                </div>
                <div className="col text-right">
                  <p style={{fontSize: '18px'}}><i className="fa fa-dollar" /><strong>
                    ${cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}</strong></p>
                </div>
              </div><button className="btn ml-auto single" type="submit" style={{color: '#fff', padding: '10px 28px', width: '100%'}}>
              <Link to='./checkout' className="text-light">
                PROCEED TO CHECKOUT</Link></button>
              <hr /><button className="btn btn-block" type="button"><a href="/products" style={{color: '#000'}}><strong>CONTINUE SHOPPING</strong></a></button></div>
          </div>

        </Col>
      </Row>
    </>
  )
}

export default CartScreen
