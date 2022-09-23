import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from '../controllers/userController.js'
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from '../middleware/verifyToken.js'

const router = express.Router();


router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/find/:id', getUser);
router.get('/', verifyTokenAndAdmin, getUsers);


export default router