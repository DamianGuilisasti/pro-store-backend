import models from '../models';

export default {
    add: async (req, res, next) => {
        try {
            const reg = await models.Configuration.create(req.body);
            res.status(200).json(reg);
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
            const reg = await models.Configuration.find();
            res.status(200).json(reg);
        }
        catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    updateInfo: async (req, res, next) => {
        try {
            const reg = await models.Configuration.findByIdAndUpdate(
                { _id: req.body._id },
                {
                    footerInfo: req.body.footerInfo,
                    aboutInfo: req.body.aboutInfo,
                    companyName: req.body.companyName
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
    updateCatalogMode: async (req, res, next) => {
        try {
            const reg = await models.Configuration.findByIdAndUpdate(
                { _id: req.body._id },
                {
                    catalogMode: req.body.catalogMode
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
    updateSocialMedia: async (req, res, next) => {
        try {
            const reg = await models.Configuration.findByIdAndUpdate(
                { _id: req.body._id },
                {
                    socialMedia: {
                        facebook: req.body.socialMedia.facebook,
                        instagram: req.body.socialMedia.instagram,
                        youtube: req.body.socialMedia.youtube,
                        google: req.body.socialMedia.google,
                        twitter: req.body.socialMedia.twitter,
                    }
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
    }
}