import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
  title: { type: "String", required: true },
  sku: { type: "String", required: true },
  price: { type: "String", required: true },
  quantity: { type: "Number", required: true },
});

const faqSchema = new mongoose.Schema({
  question: { type: "String", required: true },
  answer: { type: "String", required: true },
});

const reviewSchema = new mongoose.Schema({
  name: { type: "String", required: true },
  date: { type: "String", required: true, default: Date },
  rating: { type: "Number", required: true },
  review: { type: "String", required: true },
});

const productSchema = new mongoose.Schema(
  {
    title: { type: "String", required: true },
    variant: {
      multiple: { type: "Boolean", required: true },
      variantType: { type: "String", required: true },
      variants: [variantSchema],
    },
    images: { type: [], required: true },
    shortDescription: {
      boldTitle: { type: "String", required: true },
      description: { type: "String", required: true },
      boldCarePackageText: {
        type: "String",
        required: true,
        default: "In each care package you will receive:",
      },
      packageContents: { type: [], required: true },
    },
    description: {
      title: { type: "String", required: true },
      headerText: { type: "String", required: true },
      bullets: { type: [], required: true },
      image: { type: "String", required: true },
    },
    faq: [faqSchema],
    category: { type: [], required: true },
    sale: {
      onSale: { type: "Boolean", default: false },
      salePrice: String,
    },
    featured: { type: "Boolean", default: false },
    rating: { type: "Number" },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.productSchema ||
  mongoose.model("product", productSchema);
