import express from "express";
import { dbconnect } from "./config/dbConfig";
import { router } from "./routes/routers";


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to GST Billing app using Typescript");
});

app.use("/", router);

app.listen(5000, async function () {
    await dbconnect();
    console.log("Server running on port : http://localhost:5000");
});
