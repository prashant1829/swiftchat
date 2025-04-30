import express from 'express';
import { ProtectRoute } from '../middleware/authMiddleware.js';
import { getMessages, getUserForSlideBar, sendMessage } from '../controllers/messageController.js';

const router = express.Router();

router.get('/users', ProtectRoute, getUserForSlideBar)
router.get('/:id',ProtectRoute,getMessages)
router.post("/send/:id",ProtectRoute,sendMessage)

export default router;