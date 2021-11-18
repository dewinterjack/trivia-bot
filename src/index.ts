import dotenv from "dotenv";
import { Client } from "eris";
dotenv.config();

const bot = new Client(process.env.DISCORD_BOT_TOKEN);

bot.on("ready", () => {
  console.log("Ready!");
});

bot.on("messageCreate", (msg) => {
  if(msg.content === "!ping") {
    bot.createMessage(msg.channel.id, "Pong!");
  }
});

bot.connect();