import jwt from 'jsonwebtoken';
import models from '../models';

export default {
    encode: async (_id) => {
        const token = jwt.sign({ _id: _id }, 'clavesecreta', { expiresIn: '1d' });
        return token;
    },
    decode: async (token) => {
        try {
            const {_id} = await jwt.verify(token, 'clavesecreta');
            const user = await models.User.findOne({_id, state: 1});
            if (user){
                return user;
            }
            else {
                return false;
            }
        }
        catch (error) {
            
        }
    }
}