import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const partnerSchema = new Schema({
  partner: String,
});

const Partner =
  mongoose.models.Partner || mongoose.model("Partner", partnerSchema);

export default Partner;
