// bot.js
const { Telegraf } = require("telegraf");

const bot = new Telegraf("8410558933:AAFf3PneAEK2-eZRExgJmzIte65tPip7euk");

// Yangi a'zo kirganda (new_chat_members) xabarni o‘chiradi
bot.on("new_chat_members", async (ctx) => {
  try {
    await ctx.deleteMessage(ctx.message.message_id);
    console.log("Deleted join message");
  } catch (err) {
    console.error("Join message delete error:", err.description);
  }
});

// Kimdir chiqib ketganda (left_chat_member) xabarni o‘chiradi
bot.on("left_chat_member", async (ctx) => {
  try {
    await ctx.deleteMessage(ctx.message.message_id);
    console.log("Deleted leave message");
  } catch (err) {
    console.error("Leave message delete error:", err.description);
  }
});

bot.launch().then(() => console.log("Cleaner bot is running..."));

// Graceful shutdown
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
