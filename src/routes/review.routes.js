import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getReview, getReviews, createReview, deleteReview, updateReview } from "../controllers/review.controller.js";
import { validSchema } from "../middlewares/valid.middleware.js";
import { createReviewSchema } from "../schemas/review.schema.js";

const router = Router();

router.get('/review', authRequired, getReviews);
router.get('/review/:id', authRequired, getReview);
router.post('/review', authRequired, validSchema(createReviewSchema), createReview);
router.delete('/review/:id', authRequired, deleteReview);
router.put('/review/:id', authRequired,updateReview);

export default router;