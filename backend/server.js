import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello there!  GET request called successfully!")
})

app.post('/api/products', async (req, res) => {
  const product = req.body;

  if(!product.name || !product.price || !product.image) {
    return res.status(400).json({ 
      success: false, message: "Please provide all fields."
    });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product: ", error.message)
    res.status(500).json({ success: false, message: "Server Error" });
  }
  
});






app.listen(PORT, () => {
  connectDB();
  console.log(`Server started on port ${PORT}!`);
})






