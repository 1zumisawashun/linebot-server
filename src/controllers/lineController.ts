import { RequestHandler } from "express";
import { handleEvent } from "../middlewares/lineMiddleware";

// ルーター設定
export const line_post: RequestHandler = (req, res) => {
  // 先行してLINE側にステータスコード200でレスポンスする。
  const events = req.body.events;
  events.map(handleEvent);
};
