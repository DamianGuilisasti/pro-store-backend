import models from '../models';
import dotenv from 'dotenv';
import fs from 'fs-extra';
import cloudinary from 'cloudinary';

dotenv.config(); //revisar si es necesario que esté acá.

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
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
                 primaryimage: 
                    {
                        public_id: result.public_id,
                        imageURL: result.url
                    } 
                
            }

            const reg = await models.Product.create(product);

            await fs.unlink(req.file.path);

            res.status(200).json(reg);
        }
        catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    query: async (req, res, next) => {
        try {
            const reg = await models.Product.findOne({ _id: req.query._id })
                //.populate('category', { name: 1 });
            if (!reg) {
                res.status(404).send({
                    message: 'El registro no existe'
                });
            }
            else {
                res.status(200).json(reg);
            }

        }
        catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    list: async (req, res, next) => {
        try {
            let value = req.query.value;
            const reg = await models.Product.find()
                .populate('category', { name: 1 });
            res.status(200).json(reg);
        }
        catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
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
        }
        catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    remove: async (req, res, next) => {
        try {
            const reg = await models.Product.findByIdAndDelete(
                { _id: req.body._id }
            );
            res.status(200).json(reg);
        }
        catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    activate: async (req, res, next) => {
        try {
            const reg = await models.Product.findByIdAndUpdate(
                { _id: req.body._id }, { state: 1 }
            );
            res.status(200).json(reg);
        }
        catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    desactivate: async (req, res, next) => {
        try {
            const reg = await models.Product.findByIdAndUpdate(
                { _id: req.body._id }, { state: 0 }
            );
            res.status(200).json(reg);
        }
        catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
}