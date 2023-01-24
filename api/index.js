import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import "express-async-errors"
import mongodbErrorHandler from 'mongoose-mongodb-errors'
import productRoute from './routes/ProductRoute.js';
import orderRoute from './routes/OrderRoute.js';
import authRoute from './routes/AuthRoute.js';
import userRoute from './routes/UserRoute.js'
import Categories from './routes/CategoriesRoute.js';
import stripeRoute from './controllers/stripe.js'
import countController from './controllers/countController.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: '*' }));
app.use(express.json());

mongoose.plugin(mongodbErrorHandler);

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected"))
    .catch((err) => {
        console.log(err)
    });
;

app.use('/api/v1/product', productRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/category', Categories);
app.use("/api/v1/checkout", stripeRoute);
app.use("/api/count", countController);

app.get('/', (req, res) => {
    res.send('App is available')
})


// If no routes defined
app.use((req, res, next) => {
    req.status = 404;
    const error = new Error("Routes not found");
    next(error);
})


// Error handle

app.use((error, req, res, next) => {

    res.status(req.status || 500).send({
        message: error.message,
        stack: error.stack
    });
});



app.listen(process.env.PORT || PORT, () => {
    console.log(`Running on ${PORT}`);
});