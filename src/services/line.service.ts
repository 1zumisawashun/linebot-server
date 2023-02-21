import { WebhookEvent, MessageAPIResponseBase } from "@line/bot-sdk";
import { lineClient } from "../libs/line";

export class LineService {
  constructor() {}

  async postMessage(
    event: WebhookEvent
  ): Promise<MessageAPIResponseBase | void> {
    // メッセージでなければ返信しない
    if (event.type !== "message" || event.message.type !== "text") {
      return;
    }
    // 返信用メッセージを作成（タイプに合わせて整形しなくてはいけない）
    return lineClient.replyMessage(event.replyToken, {
      type: "text",
      text: event.message.text,
    });
  }
}
