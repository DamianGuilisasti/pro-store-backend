import models from "../models";
import dotenv from "dotenv";
import fs from "fs-extra";
//import { promises as fs } from "fs";
import cloudinary from "cloudinary";

import scraping from "../middlewares/scraping";

dotenv.config(); //revisar si es necesario que esté acá.

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default {
  add: async (req, res, next) => {
    try {
      console.log(req.file.path);

      const result = await cloudinary.uploader.upload(req.file.path);

      const product = {
        code: req.body.code,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        stock: req.body.stock,
        price: req.body.price,
        primaryimage: {
          public_id: result.public_id,
          imageURL: result.url,
        },
      };

      await fs.unlink(req.file.path);

      const reg = await models.Product.create(product);

      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  query: async (req, res, next) => {
    try {
      const reg = await models.Product.findOne({ _id: req.query._id });
      //.populate('category', { name: 1 });
      if (!reg) {
        res.status(404).send({
          message: "El registro no existe",
        });
      } else {
        res.status(200).json(reg);
      }
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      let value = req.query.value;
      const reg = await models.Product.find().populate("category", { name: 1 });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      const reg = await models.Product.findByIdAndUpdate(
        { _id: req.body._id },
        {
          code: req.body.code,
          name: req.body.name,
          description: req.body.description,
          category: req.body.category,
          stock: req.body.stock,
          price: req.body.price,
        }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      const reg = await models.Product.findByIdAndDelete({ _id: req.body._id });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      const reg = await models.Product.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 1 }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  desactivate: async (req, res, next) => {
    try {
      const reg = await models.Product.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 0 }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  addProductsBySraping: async (req, res, next) => {
    try {
      let data2 = [];
      await scraping.scrape(req.body.link);
      const data = await fs.readFile("@/../files/data.js", "utf-8");

      data2 = JSON.parse(data);

      data2.map(async function (i) {
        //const result = await cloudinary.uploader.upload(req.file.path);

        var number = Number(i.price.replace(/[^0-9.-]+/g, ""));

        number = number * `1.${req.body.percent}`;

        const product = {
          code: i.name,
          name: i.name,
          description: "",
          category: "5ff760ec32d8bf153c85778d",
          stock: 1,
          price: number,
          primaryimage: {
            public_id: "",
            imageURL: i.imgUrl,
          },
        };

        await models.Product.create(product);
      });
      await fs.unlink("@/../files/data.js");
      res.status(200);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(error);
    }
  },
};
