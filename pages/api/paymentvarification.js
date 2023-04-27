import Payment from "../../models/Payment";
import crypto from "crypto";


export default async function handler(req, res) {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//     req.body;

//   const body = razorpay_order_id + "|" + razorpay_payment_id;

//   const expectedSignature = crypto
//     .createHmac("sha256", "T84nHCGmdzNQVHDKJl861uYz")
//     .update(body.toString())
//     .digest("hex");

//   const isAuthentic = expectedSignature === razorpay_signature;

//   if (isAuthentic) {
//     // Database comes here

//     await Payment.create({
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//     });

    res.redirect(
      // `/order?reference=${razorpay_payment_id}`
      '/order',200
    );
  // } 
  // else {
  //   res.status(400).json({
  //     success: false,
  //   });
  // }



}
