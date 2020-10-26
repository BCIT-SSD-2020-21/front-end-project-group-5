import React, {useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import {listProducts} from "../actions/productActions";

const SearchBox = ({ history, product }) => {

  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

    return (
      <Form onSubmit={submitHandler} inline className="d-flex flex-grow-1 nav-search-container">
        <form onChange={(e) => setKeyword(e.target.value)} className="d-flex flex-grow-1 nav-search-container"><input className="form-control" type="text" id="navin" placeholder="Search" aria-label="Search" />
        <button className="btn" id="navsub" type="button" value="ok" name="ok"><i className="fa fa-search" /></button></form>

      </Form>

    )
  }

export default SearchBox
