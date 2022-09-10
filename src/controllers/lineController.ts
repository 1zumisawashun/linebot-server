import { handleEvent } from "../middlewares/lineMiddleware";

export const line_post = (req: any, res: any) => {
  const events = req.body.events;
  events.map(handleEvent);
};
