import express from 'express';
import PersonController from '../controllers/PersonController';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/add', auth.userVerify, PersonController.add);
router.get('/query', auth.userVerify, PersonController.query);
router.get('/list', auth.userVerify, PersonController.list);
router.get('/listClients', auth.userVerify, PersonController.listClients);
router.get('/listSuppliers', auth.userVerify, PersonController.listSuppliers);
router.put('/update', auth.userVerify, PersonController.update);
router.delete('/remove', auth.userVerify, PersonController.remove);
router.put('/activate', auth.userVerify, PersonController.activate);
router.put('/desactivate', auth.userVerify, PersonController.desactivate);

export default router;