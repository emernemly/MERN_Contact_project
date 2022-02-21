const express = require("express");
const connectDB = require("./Config/config");
const route = require("./Route/route");

require("dotenv").config();
const app = express();
app.use(express.json());
connectDB();
app.use("/api/contact", route);
app.listen(process.env.PORT, () => {
  console.log(`server is run ${process.env.PORT} `);
});
