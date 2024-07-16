import mongoose, {Schema} from 'mongoose'
import pkg from 'bcryptjs';
const { hash } = pkg;

const userSchema = new Schema({
    name: {
        type:String,
    },
    email:{
        type:String,
        unique: true
    },
    password: {
        type:String
    }
}, {
    timestamps:true
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
 
     this.password = await hash(this.password, 10);
 })

userSchema.methods.comparePassword = function(password){
    return bcyrpt.compareSync(password, this.password)
}

export const User = mongoose.model("User", userSchema);
