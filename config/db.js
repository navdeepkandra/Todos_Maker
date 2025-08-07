import mongoose from "mongoose";

const connectDB = async () => {
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connection Successful");
    }).catch((error) => {
        console.log("Error Connecting DB");
        console.log(error.message);
        process.exit(1);
    })
}

export default connectDB;