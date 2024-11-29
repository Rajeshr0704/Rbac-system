const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const protectRoutes = require('./routes/protectedRoutes');
const roleRoutes = require("./routes/roleRoutes");
dotenv.config();
connectDb();

const app = express();
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/protect",protectRoutes);
app.use("/api/roles", roleRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});



