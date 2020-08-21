import express from 'express';
import CategoryController from '../controllers/CategoryController';

const router = express.Router();

router.post('/add', CategoryController.add);
router.get('/query', CategoryController.query);
router.get('/list', CategoryController.list);
router.put('/update', CategoryController.update);
router.delete('/remove', CategoryController.remove);
router.put('/activate', CategoryController.activate);
router.put('/desactivate', CategoryController.desactivate);

export default router;