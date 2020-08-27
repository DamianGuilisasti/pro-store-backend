import express from 'express';
import CategoryRouter from './CategoryRouter';
import ProductRouter from './ProductRouter';
import UserRouter from './UserRouter';

const router = express.Router();

router.use('/categoria', CategoryRouter);
router.use('/producto', ProductRouter);
router.use('/usuario', UserRouter);

export default router;