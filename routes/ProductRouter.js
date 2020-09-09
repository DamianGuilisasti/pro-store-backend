import express from 'express';
import ProductController from '../controllers/ProductController';
import auth from '../middlewares/auth';
import path from 'path';
import multer from 'multer';

const router = express.Router();

const upload = multer({
    dest: path.join(__dirname, '../public/img/uploads')
});

router.post('/add', upload.single('file'), ProductController.add);
router.get('/query', ProductController.query);
router.get('/list', ProductController.list);
router.put('/update', ProductController.update);
router.delete('/remove', auth.sellerVerify, ProductController.remove);
router.put('/activate', auth.sellerVerify, ProductController.activate);
router.put('/desactivate', auth.sellerVerify, ProductController.desactivate);

export default router;