const express = require("express");
const mongoose = require("mongoose");
const ProductRoute = require("./routes/product.route.js")
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.js')
const app = express();

app.use(ProductRoute)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/products", ProductRoute);

app.get("/", (req, res) => {
  res.send("Hello, Quang Hung");
});

mongoose
  .connect(
    "mongodb+srv://admin:AoaXPFVEl0MTvYY7@backenddb.mownj9q.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database.");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Error connecting to database");
  });

