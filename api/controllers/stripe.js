import express from "express";
import Stripe from "stripe";

const KEY = process.env.STRIPE_KEY
const stripe = Stripe('sk_test_51LI2vjKpuXwUOF7kjGTaI5FHL4x5ILdjcCCnb0R15NQ2dR3JUc1nQmAQQhbvL061HCouSRu8EV9LrDcklyC60dUQ00AYeOqZTo');
const router = express.Router();

router.post('/payment', (req, res) => {
    console.log(req.body.amount);
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
               
                res.status(500).json(stripeErr)
            } else {
                res.status(200).json(stripeRes)
            }
        })
})


export default router;