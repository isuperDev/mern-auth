import express from 'express';
import { testCon } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/',testCon);

export default router;