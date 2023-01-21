import express from "express";
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken.js";
import {CreateCategories, GetCategories, UpdateCategories, DeleteCategories } from "../controllers/categoryController.js";

const router = express.Router();

router.post('/', CreateCategories);
router.get('/', GetCategories);
router.put('/:id', UpdateCategories);
router.delete('/:id', DeleteCategories);

export default router;
