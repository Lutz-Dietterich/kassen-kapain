import mongoose, { Schema } from "mongoose";
import mongodb from "../utils/mongodb";

mongodb.dbConnect();

const categorySchema = new Schema({
  category: String,
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
