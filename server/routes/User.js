import express from 'express';
import {getUser} from '../controllers/UserControllers.js'

const router = express.Router();

router.post('/:id',getUser);

export default router;