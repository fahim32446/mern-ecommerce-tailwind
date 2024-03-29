import express from "express";
import { CreateProduct, UpdateProduct, DeleteProduct, GetProduct, GetProducts, ProductsPagination, TotalProducts } from '../controllers/productController.js'
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken.js";
const router = express.Router();


router.post('/', CreateProduct);
router.put('/:id',verifyTokenAndAdmin, UpdateProduct);
router.delete('/:id',verifyTokenAndAdmin, DeleteProduct);
router.get('/find/:id', GetProduct);
router.get('/paginate', ProductsPagination);
router.get('/totalProducts', TotalProducts);
router.get('/', GetProducts);

export default router;