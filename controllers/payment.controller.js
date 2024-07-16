import { Payment } from "../models/payment.js";


const getPaymentStatus = async(req, res) =>{
     try{
         const {id} = req.params;
         const payment = await Payment.findById(id);
         if(!payment){
            return res.status(404).json({message: "Payment not found"})
         }

         return res.status(200).json({
            success: true,
            message:"get payment",
            payment
           });
     }catch(error){
         console.log(error);
     }
}

const createPayment = async(req, res) =>{
     try {
        const { userId, amount, currency, paymentMethod} = req.body;
        await Payment.create({userId, amount, currency, paymentMethod, status: "Pending"});
        return res.status(201).json({
         success: true,
         message:"payment created"
        });
     } catch (error) {
        console.log(error);
     }
}

const processPayment = async(req, res) =>{
   try{

      const {id} = req.params;
      const payment = await Payment.findById(id);
      if(!payment){
         return res.status(404).json({
            succes: false,
            message: "Payment not found"
         })
      }
      payment.status = "Processed";
      await payment.save();
      return res.status(201).json({
         success: true,
         message:"payment status changed"
        });
   }catch(error){
      console.log(error)
   }
}

const makeRefund = async(req, res) =>{
   try {
      const {id} = req.params;
      const payment = await Payment.findById(id);
      if(!payment){
         return res.status(404).json({message: "Payment not found"})
      }
      payment.status = "Refunded";
      await payment.save();
      return res.status(201).json({
         success: true,
         message:"payment status changed",
         payment
        });
   } catch (error) {
      console.log(error)
   }
}


export {createPayment, processPayment, getPaymentStatus, makeRefund};