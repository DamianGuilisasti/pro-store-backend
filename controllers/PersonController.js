import models from '../models';

export default {
    add: async (req, res, next) => {
        try {
            const reg = await models.Person.create(req.body);
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
            const reg = await models.Person.findOne({ _id: req.query._id });
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
            const reg = await models.Person.find(
                {
                    $or:
                        [
                            { 'name': new RegExp(value, 'i') },
                            { 'email': new RegExp(value, 'i') }
                        ]
                }
            )
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
    listClients: async (req, res, next) => {
        try {
            let value = req.query.value;
            const reg = await models.Person.find(
                {
                    $or:
                        [
                            { 'name': new RegExp(value, 'i') },
                            { 'email': new RegExp(value, 'i') }
                        ],
                    'personType': 'Cliente'
                }
            )
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
    listSuppliers: async (req, res, next) => {
        try {
            let value = req.query.value;
            const reg = await models.Person.find(
                {
                    $or:
                        [
                            { 'name': new RegExp(value, 'i') },
                            { 'email': new RegExp(value, 'i') }
                        ],
                    'personType': 'Proveedor'
                }
            )
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
    update: async (req, res, next) => {
        try {
            const reg = await models.Person.findByIdAndUpdate(
                { _id: req.body._id },
                {
                    personType: req.body.personType,
                    address: req.body.address,
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone
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
            const reg = await models.Person.findByIdAndDelete(
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
            const reg = await models.Person.findByIdAndUpdate(
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
            const reg = await models.Person.findByIdAndUpdate(
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
    },
    login: async (req, res, next) => {
        try {
            let user = await models.User.findOne({ email: req.body.email, state: 1 });

            if (user) {
                //si el usuario existe. Hay que validar si el pw es correcto.
                let match = await bcrypt.compare(req.body.password, user.password);
                if (match) {
                    //darle el token al cliente.
                    //llamaria a la función encode y le pasaría el ID.
                    let tokenReturn = await token.encode(user._id);
                    res.status(200).json({ user, tokenReturn });
                }
                else {
                    res.status(404).send({
                        message: 'Password incorrecto'
                    })
                }
            }
            else {
                res.status(404).send({
                    message: 'No existe el usuario'
                })
            }
        }
        catch (error) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
}