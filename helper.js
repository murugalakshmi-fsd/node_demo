import { client } from "./index.js";

 async function getAllProduct(req) {
  return await client.db("Products").collection("products").find(req.query).toArray().pretty();
}
 async function getProduct(id) {
  return await client.db("Products").collection("products").findOne({ id: id }).pretty();
}
 async function deleteProduct(id) {
  return await client.db("Products").collection("products").deleteOne({ id: id });
}
 async function addProduct(newProducts) {
  return await client.db("Products").collection("products").insertOne(newProducts);
}
 async function updatedProducts(id,updatedProduct) {
  return await client.db("Products").collection("products").updateOne({id:id},{$set:updatedProduct});
}
export {getAllProduct, getProduct, deleteProduct, addProduct, updatedProducts}