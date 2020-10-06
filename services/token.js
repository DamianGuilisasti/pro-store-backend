import jwt from 'jsonwebtoken';
import models from '../models';

async function checkToken(token) {
    let __id = null;
    try {
        const { _id } = await jwt.decode(token);
        __id = _id;
    } catch (error) {
        return false; //el token no existe
    }
    const user = await models.User.findOne({ _id: __id, state: 1 });

    if (user) {
        const token = jwt.sign({_id: __id}, 'clavesecreta', {expiresIn: '1d'});
        return {token} //acá falta el rol devolver. VER.
    }
    else{
        return false;
    }
}

export default {
    encode: async (_id, userrole, email) => { //esta función me va a generar el token con el ID del usuario que está correctamente autentificado.
        const token = jwt.sign({ _id: _id, userrole: userrole, email: email }, 'clavesecreta', { expiresIn: '1d' });
        return token;
    },
    decode: async (token) => { //esta función me va a permitir decodificar el token para ver si es correcto
        try { //verifica si el token existe y si no expiró.
            const { _id } = await jwt.verify(token, 'clavesecreta');
            const user = await models.User.findOne({ _id, state: 1 });
            if (user) {
                return user;
            }
            else {
                return false;
            }
        }
        catch (error) { //si existe el token pero expiró
            const newToken = await checkToken(token);
            return newToken;
        }
    }
}