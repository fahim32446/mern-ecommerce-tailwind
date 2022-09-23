import express from "express";
import { CreateProduct, UpdateProduct, DeleteProduct, GetProduct, GetProducts } from '../controllers/productController.js'
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken.js";
const router = express.Router();


router.post('/',verifyTokenAndAdmin, CreateProduct);
router.put('/:id',verifyTokenAndAdmin, UpdateProduct);
router.delete('/:id',verifyTokenAndAdmin, DeleteProduct);
router.get('/find/:id', GetProduct);
router.get('/', GetProducts);

export default router;