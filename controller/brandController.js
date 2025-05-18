const brands = require("../data/brand")
const products = require("../data/product")


const addBrand = (req,res)=>{
 newBrand = {
        brand_ID:Date.now(),
        name:req.body.name
    }
    brands.push(newBrand)
    res.send({message:"Brand added successfully", success:true})
}

const getAllBrand = (req,res)=>{
res.status(200).send({brands:brands, success:true})
}

const getProductsByBrandID = (req, res) => {
  const brand_ID = parseInt(req.params.ID);

  const brand_index = brands.findIndex(b => b.id === brand_ID);
  if (brand_index === 1) {
    return res.status(404).send({ message: "Brand not found", success: false });
  }

  const filteredProducts = products.filter(p => p.brand === brand_ID);

  return res.status(200).send({
    products: filteredProducts,
    success: true
  });
};

// const updateBrand = (req, res) => {
//     const brand_ID = req.params.ID;

//     const index = brands.findIndex((b) => b.id == brand_ID); 

//     if (index === -1) {
//         return res.status(404).send({ message: "Brand not found", success: false });
//     }

//     brands[index].brand_name = req.body.brand_name || brands[index].brand_name;

//     res.status(200).send({ message: "Brand updated", success: true });
// };


// const deleteBrand = (req,res) =>{
//   const brand_ID = req.params.ID;
//   index = brands.findIndex((b)=> b.id == brand_ID);
//   if (index == -1){
//     res.status(200).send({message: "Brand not found", success:false})
//   }
//   products.splice(index,1);
//   res.status(200).send({message: "Brand deleted", success:true})
// }


module.exports={
    addBrand,getAllBrand,getProductsByBrandID,
    // deleteBrand
    // updateBrand
}
