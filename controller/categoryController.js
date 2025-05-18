const products = require("../data/product")
const categories = require("../data/category")

const addCategory=(req,res)=>{

    newCat = {
        id:Date.now(),
        name:req.body.name
    }
    categories.push(newCat)
    res.send({message:"Category added successfully", success:true})
}

const getAllCategories = (req,res)=>{
res.status(200).send({categories:categories, success:true})
}

const getProductsByCategoryId = (req, res) => {
  const cat_ID = parseInt(req.params.ID);
  const cat_index = categories.findIndex(c => c.id === cat_ID);

  if (cat_index === -1) {
    return res.status(200).send({ message: "Category not found", success: false });
  }

  const filteredProducts = products.filter(p => p.category == cat_ID);
  return res.status(200).send({ products: filteredProducts, success: true });
};

const updateCategory = (req,res)=>{
const ID = req.params.ID;
  index = categories.findIndex((c) => c.id == ID);
  if (index == -1) {
    res.status(200).send({ message: "Category not found", success: false });
  }
  products[index].price = req.body.price;
  res.status(200).send({ message: "Category updated", success: true });
}

const deleteCategory = (req,res)=>{
    const ID = req.params.ID;
    index = categories.findIndex((c)=> c.id == ID);
    if (index == -1){
        res.status(200).send({message: "Category not found", success: false});
    }
    products.splice(index,1);
    res.status(200).send({message:"Category deleted", success:true})
}



module.exports={
addCategory,
getAllCategories,
getProductsByCategoryId,
updateCategory,
deleteCategory
}