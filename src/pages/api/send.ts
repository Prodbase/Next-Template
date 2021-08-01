import { NextApiRequest, NextApiResponse } from "next";
import Telegram from "node-telegram-bot-api";

const token = String(process.env.TELEGRAM_TOKEN);
const chatId = String(process.env.TELEGRAM_CHAT_ID);

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body;
  const bot = new Telegram(token);

  bot.sendMessage(chatId, `Novo usuário\nNome: ${name}\nEmail: ${email}`)
    .then(() => res.send({ status: true }))
    .catch((err) => res.send({ status: false, err }))
};