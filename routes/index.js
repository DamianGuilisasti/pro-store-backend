import express from 'express';
import CategoryRouter from './CategoryRouter';
import ProductRouter from './ProductRouter';
import UserRouter from './UserRouter';
import PersonRouter from './PersonRouter';
import ConfigurationRouter from './ConfigurationRouter';
import ClientsRouter from './ClientsRouter';

const router = express.Router();

router.use('/categoria', CategoryRouter);
router.use('/producto', ProductRouter);
router.use('/usuario', UserRouter);
router.use('/persona', PersonRouter);
router.use('/configuracion', ConfigurationRouter);
router.use('/clients', ClientsRouter);

export default router;