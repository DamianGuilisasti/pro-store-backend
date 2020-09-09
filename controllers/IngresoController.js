import models from '../models';

export default {
    add: async (req, res, next) => {
        try {
            const reg = await models.Ingresos.create(req.body);
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
            const reg = await models.Ingresos.findOne({ _id: req.query._id })
                .populate('Usuarios', { name: 1 })
                .populate('Personas', { name: 1 });

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
            const reg = await models.Ingresos.find(
                {
                    $or:
                        [
                            { 'num_comprobante': new RegExp(value, 'i') },
                            { 'serie_comprobante': new RegExp(value, 'i') }
                        ]
                }
            )
                .populate('Usuarios', { name: 1 })
                .populate('Personas', { name: 1 })
                .sort({ 'createdAt': -1 });
            res.status(200).json(reg);
        }
        catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
/*     update: async (req, res, next) => {
        try {
            const reg = await models.Ingresos.findByIdAndUpdate(
                { _id: req.body._id },
                { name: req.body.name }
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
            const reg = await models.Category.findByIdAndDelete(
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
    } */
    activate: async (req, res, next) => {
        try {
            const reg = await models.Ingresos.findByIdAndUpdate(
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
            const reg = await models.Ingresos.findByIdAndUpdate(
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