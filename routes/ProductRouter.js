import express from 'express';
import ProductController from '../controllers/ProductController';

const router = express.Router();

router.post('/add', ProductController.add);
router.get('/query', ProductController.query);
router.get('/list', ProductController.list);
router.put('/update', ProductController.update);
router.delete('/remove', ProductController.remove);
router.put('/activate', ProductController.activate);
router.put('/desactivate', ProductController.desactivate);

export default router;