import express from 'express';
import CategoryRouter from './CategoryRouter';
import ProductController from './ProductRouter'

const router = express.Router();

router.use('/categoria', CategoryRouter);
router.use('/producto', ProductController);

export default router;