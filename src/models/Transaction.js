import mongoose, { Schema } from "mongoose";
import mongodb from "../utils/mongodb";

mongodb.dbConnect();

const transactionSchema = new Schema(
  {
    name: String,
    amount: Number,
    partner: String,
    category: String,
    message: String,
  },
  { timestamps: true }
);

const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);

export default Transaction;
