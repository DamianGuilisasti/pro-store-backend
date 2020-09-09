import express from 'express';
import CategoryController from '../controllers/CategoryController';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/add', CategoryController.add);
router.get('/query', CategoryController.query);
router.get('/list', CategoryController.list);
router.put('/update', auth.sellerVerify, CategoryController.update);
router.delete('/remove', auth.sellerVerify, CategoryController.remove);
router.put('/activate', auth.sellerVerify, CategoryController.activate);
router.put('/desactivate', auth.sellerVerify, CategoryController.desactivate);

export default router;