import tokenService from '../services/token';

export default {
    userVerify: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);

        if (response.userrole === 'Admin' || response.userrole === 'Vendedor') {
            next();
        }
        else {
            return res.status(403).send({
                message: 'No autorizado'
            })
        }
    },
    adminVerify: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);

        if (response.userrole === 'Admin') {
            next();
        }
        else {
            return res.status(403).send({
                message: 'No autorizado'
            })
        }

    },
    sellerVerify: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);

        if (response.userrole === 'Vendedor' || response.userrole === 'Admin') {
            next();
        }
        else {
            return res.status(403).send({
                message: 'No autorizado'
            })
        }
    },
}
