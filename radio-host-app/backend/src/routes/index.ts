import { Router } from 'express';
import * as indexController from '../controllers/index';

const router = Router();

router.get('/api/radio-host', indexController.getRadioHost);
router.post('/api/radio-host', indexController.createRadioHost);
router.put('/api/radio-host/:id', indexController.updateRadioHost);
router.delete('/api/radio-host/:id', indexController.deleteRadioHost);

export default router;