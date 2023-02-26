import express from 'express';
import {getPosts,createPost} from '../controllers/post.js'

const router = express.Router();

router.post('/',createPost);
router.get('/',getPosts);

export default router;