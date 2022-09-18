import { handleEvent } from "../middlewares/lineMiddleware";
import { RequestHandler } from "express";

export const line_post: RequestHandler = (req, res) => {
  const events = req.body.events;
  events.map(handleEvent);
};
