import express from "express";
import { CreateOrder, UpdateOrder, DeleteOrder, GetOrder, GetOrders } from '../controllers/orderController.js'
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken.js";

const router = express.Router();


router.post('/', CreateOrder);
router.put('/:id', verifyTokenAndAdmin, UpdateOrder);
router.delete('/:id', verifyTokenAndAdmin, DeleteOrder);
router.get('/find/:id', GetOrder);
router.get('/', GetOrders);

export default router;