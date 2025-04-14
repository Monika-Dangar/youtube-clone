import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";
import authRoutes from './routes/auth.routes.js'
import channelRoutes from './routes/channels.route.js'
import videoRoutes from './routes/videos.route.js'
import commentRoutes from './routes/comments.route.js';

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/channel', channelRoutes)
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .then(async () => {
    })
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
