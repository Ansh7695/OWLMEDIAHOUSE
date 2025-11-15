// import mongoose from "mongoose"


// const connectDB= async ()=>{
//     mongoose.connection.on("connected",()=>{
//         console.log("DB connection established");
        
//     })
//     await mongoose.connect(`${process.env.MONGO_URI}/blogs`)
// }


// export default connectDB;
import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {
    try {
        // The fix is here: We connect directly to the URI without adding "/blogs".
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log("Database connection successful!"); 

    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;