import app from "./app.js";
import connection from "./config/database.js";
import { config } from "dotenv";

config();

const start = async () =>
{
    await connection();
    await app.listen(process.env.APP_PORT);
    console.log(`Server running on http://localhost:${process.env.APP_PORT}`)
}

start();
