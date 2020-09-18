import express from 'express';
import CategoryRouter from './CategoryRouter';
import ProductRouter from './ProductRouter';
import UserRouter from './UserRouter';
import PersonRouter from './PersonRouter';
import ConfigurationRouter from './ConfigurationRouter';

const router = express.Router();

router.use('/categoria', CategoryRouter);
router.use('/producto', ProductRouter);
router.use('/usuario', UserRouter);
router.use('/persona', PersonRouter);
router.use('/configuracion', ConfigurationRouter);

export default router;