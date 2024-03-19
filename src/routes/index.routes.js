import express from "express";
import { getPrice, getAmount } from "../controllers/couponController.js";

const router = express.Router();

router.post('/coupon', getPrice);
router.get('/coupon', getAmount);


export default router;
