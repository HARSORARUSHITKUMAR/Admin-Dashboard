import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

<<<<<<< HEAD
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

=======
>>>>>>> 04929f12054c1ec29124eb4f0cffce0307df687e

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
<<<<<<< HEAD
app.use("/sales", salesRoutes);

/* MONGOOSE SET UP */
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`server is listing on port: ${PORT}`))
    })
    .catch((error) => console.log(`error:${error} did not connect`))
=======
app.use("/sales", salesRoutes);
>>>>>>> 04929f12054c1ec29124eb4f0cffce0307df687e
