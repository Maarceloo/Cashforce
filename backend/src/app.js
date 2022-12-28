const express = require("express");
const cors = require("cors");
const invoicesRoute = require("./Routes/Invoices");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/invoices", invoicesRoute);

module.exports = app;
