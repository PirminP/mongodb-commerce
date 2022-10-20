db.produtos.updateMany({
    valoresNutricionais: {
      $elemMatch: {
        $and: [
          { tipo: "sódio" },
          { percentual: { $gte: 40 } },
        ],
      },
    },
  }, {
    $push: { tags: "muito sódio" },
});
  
db.produtos.find({},
    { 
      _id: 0, nome: 1, tags: 1,
});