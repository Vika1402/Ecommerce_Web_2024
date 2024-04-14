import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  products: [{
   type: mongoose.ObjectId,
   ref: "Product"
  }],
  paymemt: {},
  buyer: {
   type: mongoose.ObjectId,
   ref: 'user'
  },
  status: {
   type: String,
   default: "Not process",
   enum: ["Not process", "Processing", "Shiped", "deliver", "Cancel"]
  }
 }, { timestamps: true });
 
 export default mongoose.model('Order', orderSchema);
 