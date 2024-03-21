import express from 'express'
import { getAllProduct, getProduct, deleteProduct, addProduct, updatedProducts} from "../helper.js";

const router=express.Router()
router.get('/', async (req, res) => {
  const { category, rating } = req.query;

  console.log(req.query, category, rating);
  // let filteredProducts=products//copy by reference
  // if(category){
  //   filteredProducts=filteredProducts.filter((product)=>product.category===category)
  // }
  // if(rating){
  //   filteredProducts=filteredProducts.filter((product)=>product.rating===+rating)
  // }
  const product = await getAllProduct(req);
  res.send(product);
});
//get products by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(req.params, id);
  const product = await getProduct(id);
  //const product=products.find((pd)=>pd.id===id)
  product ? res.send(product) : res.status(404).send({ message: "Product not found" });
});
//delete products by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(req.params, id);
  const product = await deleteProduct(id);
  //const product=products.find((pd)=>pd.id===id)
  res.send(product);
});
//add products
router.post('/', async (req, res) => {
  const newProducts = req.body;
  console.log(newProducts);
  const product = await addProduct(newProducts);
  res.send(product);
});

//updateproducts
router.put('/:id', async (req, res) => {
  const {id}=req.params
  const updatedProduct = req.body;
  console.log(updatedProduct);
  const product = await updatedProducts(id,updatedProduct);
  res.send(product);
});

export const productsRouter=router
