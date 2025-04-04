// backend/index.js

import dotenv from "dotenv";
dotenv.config(); // ✅ 載入 .env

import express from "express";
import line from "@line/bot-sdk";

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const app = express();
app.use(express.json());

app.post("/webhook", line.middleware(config), (req, res) => {
  const events = req.body.events;
  Promise.all(events.map(handleEvent))
    .then(() => res.status(200).end())
    .catch((err) => {
      console.error("Webhook error:", err);
      res.status(500).end();
    });
});

const client = new line.Client(config);

async function handleEvent(event) {
  if (event.type !== "message" || event.message.type !== "text") return;

  const keyword = event.message.text.trim();

  if (keyword === "功能列表") {
    return client.replyMessage(event.replyToken, {
      type: "flex",
      altText: "功能選單",
      contents: {
        type: "carousel",
        contents: [
          {
            type: "bubble",
            hero: {
              type: "image",
              url: "https://example.com/cover.jpg",
              size: "full",
              aspectRatio: "20:13",
              aspectMode: "cover",
            },
            body: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: "PDF AI 查詢",
                  weight: "bold",
                  size: "lg",
                },
                {
                  type: "text",
                  text: "輸入：肌少症、壓瘡、尿失禁",
                  wrap: true,
                  size: "sm",
                  color: "#888888",
                },
              ],
            },
          },
        ],
      },
    });
  }

  return client.replyMessage(event.replyToken, {
    type: "text",
    text: `🔎「${keyword}」目前還沒有定義，可以請專科護理師設定關鍵字。`,
  });
}

export default app;
