import dbConnect from "../../../utils/dbConnect";
import productModel from "../../../Models/productsModel";
import { NextApiRequest, NextApiResponse } from "next";

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const products = await productModel.find();
        console.log("Retrieved all products from api/products.ts");
        res.status(200).json(products);
      } catch (error: any) {
        console.log("error retrieving products in api/products.ts");
        res.status(404).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        console.log("Trying to post product");
        const productToAdd = await productModel.create(req.body);
        res.status(201).json({ success: true, data: productToAdd });
      } catch (error: any) {
        console.log("error posting products in api/products.ts");
        console.log("error is: ", error);
        res.status(400).json({ success: false, message: error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
