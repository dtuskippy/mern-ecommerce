import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }

}, {
  timestamps: true // createdAt, updatedAt fields on each document
} );

const Product = mongoose.model('Product', productSchema);
// standard is to name 'Product' (capitalized and singular), and then mongoose makes it to plural lower case

export default Product;