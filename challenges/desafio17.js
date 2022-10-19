const quantityProducts = db.produtos.count();

db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: quantityProducts,
});

db.resumoProdutos.find({},
{ 
  _id: 0, franquia: 1, totalProdutos: 1,
});