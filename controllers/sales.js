const Sale = require("../models/sale");

const getSales = async (req, res) => {
  const sales = await Sale.find();

  res.status(200).json({ ok: true, sales });
};

const postSales = (req, res) => {
  const newSale = new Sale(req.body);

  newSale
    .save()
    .then((sale) => res.status(201).json({ ok: true, sale }))
    .catch((err) => console.log(err));
};

const putSales = async (req, res) => {
  const { id } = req.params;

  try {
    const sale = await Sale.findById(id);

    if (!sale) {
      res.status(404).json({ message: "No se encontró la venta" });
    }

    sale.day = req.body.day;
    sale.product = req.body.product;
    sale.quantity = req.body.quantity;
    sale.uPrice = req.body.uPrice;

    const updatedSale = await sale.save();
    res.status(200).json({ ok: true, updatedSale });
  } catch {
    res.status(500).send(error);
  }
};

const deleteSales = async (req, res) => {
  const { id } = req.params;

  await Sale.findByIdAndDelete(id);
  res.status(202).json({ message: "Venta eliminada exitosamente" });
};

module.exports = {
  getSales,
  postSales,
  putSales,
  deleteSales,
};
