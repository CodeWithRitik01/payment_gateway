import mongoose, {Schema} from 'mongoose'

const paymentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    amount: {
        type:Number,
    },
    currency:{
        type:String,
    },
    status: {
        type:String
    },
    paymentMethod: {
        type:String
    }
}, {
    timestamps:true
})


export const Payment = mongoose.model("Payment", paymentSchema);
