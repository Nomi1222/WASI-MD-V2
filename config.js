//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "nomil@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923319373288@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "";
global.devs = "92319373288";
global.sudo = process.env.SUDO || "923319373288";
global.owner = process.env.OWNER_NUMBER || "923319373288";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tKWjhpRTZpclpvSjRxOWFQWDFSalhORmhMU3F2V2VHMkVDcTNScTMyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmlLbDdLQ2hvWUJYTTZyRTJTTFQ3VDc1WmNLRnJ6ZlBxSXdKS043YWdIZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRUhkYzBuWk9CSW9KMmIvYldlcDI3ZlBXVlFrM3JMTVR6OUZodDBYQjBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwVGdFV2pYUCs5RjZvSkFHbHMzTGxobUM5U2xobmE4VjMxY3E0SUZyL0RBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdDZkpESjJVZWZtall0cms1RVd4ckVxMUsyU3B5QVg2WEdwUU5xbFZCMTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhRTVZwWXlTZGJJY2Njb1FGVnc1Y3RkU0dxSGcraGFkN0h5eHdOMVRJam89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkMwUTdZLy9nd1Y0eW1Kczg3L0Q5KzdvRG9lcGhYUVRDTm1uNUdaUGFtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVE5LM1BGOEJEcVBJbFd2eUo1dnB6dUNJNzZhWkNFb0Y1VzZBN2p6aFdGZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZETjJoRjUrOUhUa3pIaVJLMWJZVmZRMjVKVjQ1ZHNZekhqdVBsWkhDTmJ2L0xldlBPbEdsWkEzem41V2IyWWtRNnBPS3pXU2VwM3BVLytVT1ArYWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJWNDI5SlNGbXVnVDFBeEZ4V1E5THEwVk1TRjRDMVRBS3hQN3pJN2dYUThRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMxOTM3MzI4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1NEQ4Mjg0ODI5NkNCNTM2N0E4NUY1RDI1NTczNzM4RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMTI0Mjg3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0WFZzTFIwalRGV0swQlJudlRNZ1JnIiwicGhvbmVJZCI6ImFjZDczZGUyLTVkNzUtNDI1MC1iMGZlLTMxMDE2MzE4YjAwZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUeFVseWcreFNXbHFEOHBGWUp2c2tZN25BWjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU5wWExQYTZjV01WNHlvSUxEWDQvcEFCRXRRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJYRjNYN1NTIiwibWUiOnsiaWQiOiI5MjMzMTkzNzMyODg6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2F2YWdlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQTFJ6NHdGRVBDR25MUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0eng3RElpZndFZFltZWQ2L05zZHBER3BqTWs4K1ZONC83cVE3cjMyM0NVPSIsImFjY291bnRTaWduYXR1cmUiOiJVbkMrZFJoR3JGSzhXakIwTjdSTkdiN0tWRWpQaXkwR1JhbEVpQkVDWHpQdzRDSzlQd0diTlJjd0tuK2hnQTlIRmhucXpjTUNGNTlYWTFVYm8ralZDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSmxhVzlyREZDa2huUXRxSlNPdEhRTy9oT3p0YXRjNVNCV0tLS1ZkMUdnUWtRT0hDek0yV2xDMENaRHh1ZG1mMGpuOXV1OVFFODlaZ2g1UjMxMldiZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMTkzNzMyODg6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmM4ZXd5SW44QkhXSm5uZXZ6YkhhUXhxWXpKUFBsVGVQKzZrTzY5OXR3bCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDEyNDI4NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFONG0ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Nomi😍",
  author: process.env.PACK_AUTHER || "Nomi",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Nomi",
  ownername: process.env.OWNER_NAME || "Nomi",
  errorChat: process.env.ERROR_CHAT || "923319373288",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
