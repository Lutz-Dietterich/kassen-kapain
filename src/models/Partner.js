import mongoose, { Schema } from "mongoose";
import mongodb from "../utils/mongodb";

mongodb.dbConnect();

const partnerSchema = new Schema({
  partner: String,
});

const Partner =
  mongoose.models.Partner || mongoose.model("Partner", partnerSchema);

export default Partner;
