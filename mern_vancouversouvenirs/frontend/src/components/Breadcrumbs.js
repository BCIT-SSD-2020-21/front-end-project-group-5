import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HomeScreen from "../screens/HomeScreen";

const Breadcrumbs = () => {
  return (
    <div class = "container">
      <ol className="breadcrumb DeskView">
        <li className="breadcrumb-item"><a href="/"><span>{HomeScreen}</span></a></li>
        <li className="breadcrumb-item active"><span>Product List</span></li>
      </ol>
    </div>
  )
}
export default Breadcrumbs;
