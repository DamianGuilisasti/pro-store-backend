import mongoose, { Schema } from "mongoose";

const ClientSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 50,
      required: true,
    },
    lastname: {
      type: String,
      maxlength: 50,
      required: true,
    },
    email: {
      type: String,
      maxlength: 50,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      maxlength: 50,
    },
    address: {
      type: String,
    },
    state: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
    collection: "Clients",
  }
);

const client = mongoose.model("Clients", ClientSchema);

export default client;
