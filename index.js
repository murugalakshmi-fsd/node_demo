// const express = require('express')//third party 
// const { MongoClient, MongoAPIError } = require('mongodb');
import express from "express";
import {MongoClient} from"mongodb";
import { productsRouter } from "./routes/products.js";
import * as dotenv from 'dotenv';
dotenv.config()

const app = express();
const PORT=process.env.PORT;
//console.log(process.env);

//Interceptor || Converting body is json 
app.use(express.json())

const MONGO_URL=process.env.MONGO_URL;
//const MONGO_URL="mongodb://localhost:27017";//or "mongodb://127.0.0.1:2/01/"

async function createConnection(){
const client=new MongoClient(MONGO_URL);
 await client.connect();
 console.log("Mongodb is connected");
 return client
}
export const client=await createConnection();

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use("/products",productsRouter);
app.listen(PORT,()=>console.log("Server listening on the Port:",PORT));


