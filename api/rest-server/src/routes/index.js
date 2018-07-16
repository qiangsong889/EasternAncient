import express from 'express';
import testRouter from '../components/test/testRouter';
const router = express.Router();

router.use('/test', testRouter);
export default router;
