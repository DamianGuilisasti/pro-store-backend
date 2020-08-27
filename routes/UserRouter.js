import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.post('/add', UserController.add);
router.get('/query', UserController.query);
router.get('/list', UserController.list);
router.put('/update', UserController.update);
router.delete('/remove', UserController.remove);
router.put('/activate', UserController.activate);
router.put('/desactivate', UserController.desactivate);

export default router;