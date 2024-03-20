require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const transactionRoutes = require("./routes/transaction");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => res.send("App Started"));
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/transaction", transactionRoutes);

const port = process.env.PORT || 5000;
// app.listen(port, console.log(`Listening on port ${port}...`));
app.listen(port , '192.168.1.6' || 'localhost',()=>{
    console.log("server active on " , port)
})
