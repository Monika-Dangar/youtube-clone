import express from 'express';
import { createChannel, getChannelInfo } from '../controllers/channels.controller.js';

const router = express.Router();

// Route to create a new channel
router.post('/', createChannel);

// Route to get channel information by channelId
router.get('/:channelId', getChannelInfo);

export default router;
