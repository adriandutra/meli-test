import { Schema, model } from "mongoose";

const CouponSchema = new Schema({
    code: String,
},{
    timestamps: true
});

export default model("Coupon", CouponSchema);