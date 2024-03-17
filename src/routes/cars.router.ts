import { Router } from "express";
import { container } from "tsyringe";
import { CarsServices } from "../services/carsService";
import { CarsControllers } from "../controllers/carsControllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { carsCreateSchema, carsUpdateSchema } from "../schemas/user.schema";
import { CarsIdValid } from "../middlewares/carsIdValid.middleware";

container.registerSingleton("CarsServices", CarsServices);
const controller = container.resolve(CarsControllers);

export const carsRouter = Router();

carsRouter.post("/", ValidateBody.execute(carsCreateSchema), (req, res) =>
  controller.create(req, res)
);
carsRouter.get("/", (req, res) => controller.findMany(req, res));
carsRouter.get("/:id", CarsIdValid.execute, (req, res) =>
  controller.findOne(req, res)
);
carsRouter.patch(
  "/:id",
  CarsIdValid.execute,
  ValidateBody.execute(carsUpdateSchema),
  (req, res) => controller.update(req, res)
);
carsRouter.delete("/:id", CarsIdValid.execute, (req, res) =>
  controller.delete(req, res)
);

carsRouter.use("/", carsRouter);
