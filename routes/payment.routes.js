import express from "express"
import { createPayment, getPaymentStatus, makeRefund, processPayment } from "../controllers/payment.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";

const app = express.Router();

app.use(isAuthenticated);
app.get("/:id", getPaymentStatus)
app.post('/create', createPayment);
app.put('/process/:id', processPayment);
app.put('/refund/:id', makeRefund)

export default app;