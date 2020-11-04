import express from 'express';
import ProductController from '../controllers/ProductController';
import auth from '../middlewares/auth';
import upload from '../middlewares/upload';
const router = express.Router();


router.post('/add', auth.sellerVerify, upload, ProductController.add);
router.get('/query', ProductController.query);
router.get('/list', ProductController.list);
router.put('/update', auth.sellerVerify, ProductController.update);
router.delete('/remove', auth.sellerVerify, ProductController.remove);
router.put('/activate', auth.sellerVerify, ProductController.activate);
router.put('/desactivate', auth.sellerVerify, ProductController.desactivate);

export default router;