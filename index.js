require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const saleController = require("./controllers/sales");
const app = express();

const dbConnect = (app) => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((res) => {
      const PORT = process.env.PORT;

      app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
      });

      console.log("Conexión exitosa a la BBDD");
    })
    .catch((err) => console.log(err));
};

dbConnect(app);

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/sales", saleController.getSales);
app.post("/sales", saleController.postSales);
app.put("/sales/:id", saleController.putSales);
app.delete("/sales/:id", saleController.deleteSales);
