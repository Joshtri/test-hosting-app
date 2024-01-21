// router/beranda.js
import express from 'express';
import { homePageView } from '../controllers/homePageController.js';

const router = express.Router();

router.get('/', homePageView);

export default router;
