import express from 'express';
import {
    getAllVideos,
    getVideoById,
    searchVideos
} from '../controllers/videos.controller.js';

const router = express.Router();

router.get('/', getAllVideos);
router.get('/search', searchVideos); // ?title=react&category=web
router.get('/:id', getVideoById);

export default router;
