import express from 'express';
import UserController from '../controllers/UserController';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/add', UserController.add);
router.get('/query', auth.sellerVerify, UserController.query);
router.get('/list', auth.sellerVerify, UserController.list);
router.put('/update', auth.adminVerify, UserController.update);
router.delete('/remove', auth.adminVerify, UserController.remove);
router.put('/activate', auth.adminVerify, UserController.activate);
router.put('/desactivate', auth.adminVerify, UserController.desactivate);
router.post('/login', UserController.login);

export default router;