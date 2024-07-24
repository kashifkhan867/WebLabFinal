// routes/gameApplications.js

import express from 'express';
import { createApplication, getApplications } from '../controllers/gameApplications.js';
const router = express.Router();

router.get("/", getApplications);
router.post("/", createApplication);

export default router;
