import { EndpointModel } from "../models";

export class MainController {
  static async getAll(req: any, res: any) {
    try {
      const endpoints = await EndpointModel.getAll();
      res.render("index");
    } catch (error) {
      res.status(404).json({ message: "Endpoint not found" });
    }
  }
}
