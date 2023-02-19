import { Client, WebhookEvent, MessageAPIResponseBase } from "@line/bot-sdk";
import * as dotenv from "dotenv";
dotenv.config();

const config = {
  channelSecret: process.env.LINE_CHANNEL_SECRET!,
  channelAccessToken: process.env.LINE_ACCESS_TOKEN!,
};
const client = new Client(config);

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
    return client.replyMessage(event.replyToken, {
      type: "text",
      text: event.message.text,
    });
  }
}
