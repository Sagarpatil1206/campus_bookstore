import express from 'express';
import {getPosts,createPost,updatePost,deletePost} from '../controllers/post.js'

const router = express.Router();

router.post('/',createPost);
router.get('/',getPosts);
router.put('/:id',updatePost);
router.delete('/:id',deletePost);
// router.patch('/:id/likepost',likePost);

export default router;