import { EndpointModel } from "../models/endpointModel";
import { Request, Response } from "express";

export class MainController {
  static async getAll(req: Request, res: Response) {
    try {
      const endpoints = await EndpointModel.getAll();
      res.render("index");
    } catch (error) {
      res.status(404).json({ message: "Endpoint not found" });
    }
  }
}
