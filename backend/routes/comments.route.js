import express from 'express';
import {
    getAllComments,
    addComment,
    editCommentById,
    deleteCommentById
} from '../controllers/comments.controller';

const router = express.Router();

router.get('/', getAllComments); // GET /api/comments?videoId=xxx
router.post('/', addComment);    // POST /api/comments
router.put('/:id', editCommentById);
router.delete('/:id', deleteCommentById);

export default router;
