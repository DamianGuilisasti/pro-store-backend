import express from "express";
import ClientsController from "../controllers/ClientsController";
import auth from "../middlewares/auth";

const router = express.Router();

router.post("/add", auth.sellerVerify, ClientsController.add);
router.get("/list", auth.sellerVerify, ClientsController.list);
router.put("/update", auth.sellerVerify, ClientsController.update);
router.delete("/remove", auth.sellerVerify, ClientsController.remove);
router.put("/activate", auth.sellerVerify, ClientsController.activate);
router.put("/desactivate", auth.sellerVerify, ClientsController.desactivate);

export default router;

