import mongoose, { Schema } from 'mongoose';

const ConfigurationSchema = new Schema({
    logoURL: {
        public_id: {
            type: String
        },
        imageURL: {
            type: String
        }
    },
    socialMedia: {
        facebook: {
            type: String
        },
        instagram: {
            type: String
        },
        twitter: {
            type: String
        },
        google: {
            type: String
        },
        youtube: {
            type: String
        }
    },
    footerInfo: {
        type: String
    },
    footerBanner: {
        first: {
            type: String
        },
        second: {
            type: String
        },
        third: {
            type: String
        }
    },
    colorLayout: {
        primaryColor: {
            type: String
        },
        secondaryColor: {
            type: String
        }
    },
    clientName: {
        type: String
    },
    aboutInfo: {
        type: String
    },
    contactInfo: {
        type: String
    }
},
    {
        timestamps: true,
        collation: 'Configuration'
    });

const Configuration = mongoose.model('Configuration', ConfigurationSchema)

export default Configuration;