import express from 'express';
import ConfigurationController from '../controllers/ConfigurationController';

const router = express.Router();

router.post('/add', ConfigurationController.add);
router.get('/list', ConfigurationController.list);
router.put('/update', ConfigurationController.update);
/* router.get('/query', ConfigurationController.query);


router.delete('/remove', ConfigurationController.remove);
router.put('/activate', ConfigurationController.activate);
router.put('/desactivate', ConfigurationController.desactivate); */

export default router;