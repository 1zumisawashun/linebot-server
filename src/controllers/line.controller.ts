import { LineService } from "../services/line.service";
import { RequestHandler } from "express";

export const postMessage: RequestHandler = async (req, res) => {
  const events = req.body.events;
  try {
    const lineService = new LineService();
    const result = await events.map(lineService.postMessage);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};
