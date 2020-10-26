import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {listProducts} from "../actions/productActions";

const Product = ({ product }) => {

  return (

  <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`} style={{color: '#000'}}>
        <Card.Img src={product.image}  />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
        </Card.Text>

        <Card.Text as='h5' className="d-flex align-items-baseline">${product.price}
          <span
            style={{textDecoration: 'line-through'}}>$182</span><span><i
            className="fa fa-heart-o d-flex justify-content-end align-self-center"/></span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
