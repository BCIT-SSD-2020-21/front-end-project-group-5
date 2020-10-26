import express from 'express'
const router = express.Router()
import {
  getProductById,
} from '../controllers/productController.js'

router
  .route('/:id')
  .get(getProductById)

export default router
