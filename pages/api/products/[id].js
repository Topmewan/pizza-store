import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {method, query: {id}} = req;

  dbConnect()

  if (method === 'GET') {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  if (method === 'PUT') {
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {new: true});
      res.status(200).json(product);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  if (method === 'DELETE') {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json('The product has been deleted');
    } catch (e) {
      res.status(500).json(e);
    }
  }
}