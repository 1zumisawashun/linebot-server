import { EndpointModel } from "../models/endpointModel";

export class MainController {
  static async getAll(req: any, res: any) {
    try {
      const endpoints = await EndpointModel.getAll();
      res.render("index"); // ejsをレンダーする
    } catch (error) {
      res.status(404).json({ message: "Endpoint not found" });
    }
  }
}
