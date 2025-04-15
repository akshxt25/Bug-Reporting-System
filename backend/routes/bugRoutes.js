import express from 'express';
import { createBug, getAllBugs } from '../controllers/bugController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createBug).get(protect, getAllBugs);

export default router; 