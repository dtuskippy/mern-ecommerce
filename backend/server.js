import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello there!  GET request called successfully!');
})



app.listen(PORT, () => {
  connectDB();
  console.log(`Server started on port ${PORT}!`);
})






