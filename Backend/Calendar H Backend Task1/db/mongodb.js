import mongoose from "mongoose";

import { MONGODB_URL } from "../config/config.js";

const mongoDB = () => {
    try {
        console.log("Database connect");
        mongoose.connect(MONGODB_URL)
    } catch (error) {
        console.log(`Database connect error: ${err}`);
        process.exit();
    }
}

export default mongoDB;