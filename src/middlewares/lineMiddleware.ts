import { Client, WebhookEvent } from "@line/bot-sdk";
import * as dotenv from "dotenv";
dotenv.config();

const config = {
  channelSecret: process.env.LINE_CHANNEL_SECRET!,
  channelAccessToken: process.env.LINE_ACCESS_TOKEN!,
};
const client = new Client(config);

export const handleEvent = async (event: WebhookEvent) => {
  // メッセージでなければ返信しない
  if (event.type !== "message" || event.message.type !== "text") {
    return null;
  }
  // 返信用メッセージを作成（タイプに合わせて整形しなくてはいけない）
  await client.replyMessage(event.replyToken, {
    type: "text",
    text: event.message.text,
  });
};
