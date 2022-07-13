import { NextApiRequest, NextApiResponse } from "next";
import categoryModel from "../../../Models/categoryModel";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const categories = await categoryModel.find();
        console.log("Retrieved all categories from api/categories.ts");
        res.status(200).json(categories);
      } catch (error: any) {
        console.log("Error retrieving all categories from api/categories.ts");
        res.status(400).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        console.log("Trying to post category");
        const categoryToAdd = await categoryModel.create(req.body);
        res.status(200).json({ success: true, data: categoryToAdd });
      } catch (error: any) {
        console.log("eror posting category in api/categories.ts");
        console.log(error);
        res.status(400).json({ success: false, message: error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
