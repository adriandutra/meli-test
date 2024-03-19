import mongoose from "mongoose";
import { config } from "dotenv";

config();

const connection = async () => {
    try {
        await mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log(error);
    }
}

export default connection;