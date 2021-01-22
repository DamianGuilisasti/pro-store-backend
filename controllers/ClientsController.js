import Client from "../models/Clients";

export default {
  add: async (req, res, next) => {
    try {
      const { name, lastname, email, phone, address } = req.body;

      const newClient = new Client({
        name,
        lastname,
        email,
        phone,
        address,
      });

      const ClientSaved = await newClient.save();

      res.status(200).json(ClientSaved);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Hubo un error en el servidor",
      });
      next(error);
    }
  },
  list: async (req, res, next) => {
    try {
      const clients = await Client.find();

      res.status(200).json(clients);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Hubo un error en el servidor",
      });
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const clientUpdated = await Client.findByIdAndUpdate(
        { _id: req.body._id },
        req.body,
        { new: true }
      );

      res.status(200).json(clientUpdated);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Hubo un error en el servidor",
      });
      next(error);
    }
  },
  remove: async (req, res, next) => {
    try {
      const clientDeleted = await Client.findByIdAndDelete({
        _id: req.query.id,
      });
      res.status(200).json(clientDeleted);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Hubo un error en el servidor",
      });
      next(error);
    }
  },
  activate: async (req, res, next) => {
    try {
      const clientUpdated = await Client.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 1 },
        { new: true }
      );

      res.status(200).json(clientUpdated);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Hubo un error en el servidor",
      });
      next(error);
    }
  },
  desactivate: async (req, res, next) => {
    try {
      const clientUpdated = await Client.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 0 },
        { new: true }
      );

      res.status(200).json(clientUpdated);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Hubo un error en el servidor",
      });
      next(error);
    }
  },
};
