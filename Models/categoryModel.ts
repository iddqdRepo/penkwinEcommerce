import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  heroImage: { type: String, required: true },
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  description: { type: String, required: true },
  cardTitle: { type: String, required: true },
  cardImage: { type: String, required: true },
  cardBullets: { type: [], required: true },
});

export default mongoose.models.categories ||
  mongoose.model("categories", categorySchema);
