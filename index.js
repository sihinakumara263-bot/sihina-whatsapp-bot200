
require("dotenv").config();

const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  }
});

client.on("qr", (qr) => {
  console.log("WhatsApp QR Code:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("SIHINA WHATSAPP AI BOT IS READY!");
});

client.on("message", async (message) => {
  if (message.fromMe) return;

  const text = message.body.toLowerCase();

  if (text.includes("හායි") || text.includes("hello")) {
    await message.reply("ආයුබෝවන්! ❤️ මම SIHINA AI BOT.");
    return;
  }

  if (text.includes("කොහොමද")) {
    await message.reply("මම හොඳින්! ඔයාට කොහොමද? 😊");
  }
});

client.initialize();
