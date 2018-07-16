import express from 'express';
import { testController } from './testController';
const router = express.Router();

router.route('/test1').post(testController);

export default router;
