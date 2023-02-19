import { Request, Response } from "express";

export class MainController {
  static async getAll(req: Request, res: Response) {
    try {
      res.render("index");
    } catch (error) {
      res.status(404).json({ message: "Endpoint not found" });
    }
  }
  static async getAbout(req: Request, res: Response) {
    try {
      res.render("about");
    } catch (error) {
      res.status(404).json({ message: "Endpoint not found" });
    }
  }
}
