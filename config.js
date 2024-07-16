import mongoose from "mongoose"

const connectDb = (uri) => {
    mongoose
    .connect(uri, {dbName: "payment_gateway"})
    .then((data) => console.log(`connected to DB: ${data.connection.host}`))
    .catch((err) => {
        console.log(err)
    })
}

export { connectDb };