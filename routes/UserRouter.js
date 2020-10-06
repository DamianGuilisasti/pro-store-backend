import express from 'express';
import UserController from '../controllers/UserController';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/add', auth.adminVerify, UserController.add);
router.get('/query', UserController.query);
router.get('/list',  UserController.list);
router.put('/update', auth.adminVerify, UserController.update);
router.delete('/remove', auth.adminVerify, UserController.remove);
router.put('/activate', auth.adminVerify, UserController.activate);
router.put('/desactivate', auth.adminVerify, UserController.desactivate);
router.post('/login', UserController.login);

export default router;