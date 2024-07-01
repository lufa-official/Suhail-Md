const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://lufa:lufa@cluster0.8av8jar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/lufa-official/Jessi-md/blob/main/Assets/50c65d1da9af7322cbbc79074ec7cc26.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴇᴜꜱ ɪɴᴄ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94715486555";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://github.com/lufa-official/Jessi-md/blob/main/Assets/50c65d1da9af7322cbbc79074ec7cc26.jpg?raw=true" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_54_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgMixcbiAgICAgICAgOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE0LFxuICAgICAgICA5NixcbiAgICAgICAgMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDM4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg5LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc4LFxuICAgICAgICA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNixcbiAgICAgICAgMjE2LFxuICAgICAgICA2OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAzLFxuICAgICAgICAxNixcbiAgICAgICAgMTU4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInBGeUJGM2JTNlpvNkFXY0xqV1A1c1EzNkhQeElwLzBkdG9ZNkxPZVk3Yjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRIaEJSM3FSUXdhNkhMcHVnNlU5ZEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzI3MmI3MzUtNTM3NC00ZjQzLWI4MDItZmQ1YzRmYTI4MmE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDIyMSxcbiAgICAgIDE3OSxcbiAgICAgIDEyNCxcbiAgICAgIDEzLFxuICAgICAgMTA3LFxuICAgICAgMTA4LFxuICAgICAgMTgxLFxuICAgICAgMTc2LFxuICAgICAgMjExLFxuICAgICAgMTEsXG4gICAgICAxODAsXG4gICAgICAyMzIsXG4gICAgICA3MCxcbiAgICAgIDIzMyxcbiAgICAgIDE3LFxuICAgICAgMTMyLFxuICAgICAgMTY5LFxuICAgICAgMTk2LFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDIxNCxcbiAgICAgIDEwNyxcbiAgICAgIDIyOSxcbiAgICAgIDE3MSxcbiAgICAgIDQ0LFxuICAgICAgNjUsXG4gICAgICA2NixcbiAgICAgIDExOCxcbiAgICAgIDE4MSxcbiAgICAgIDEyMCxcbiAgICAgIDE5MCxcbiAgICAgIDcxLFxuICAgICAgMTM4LFxuICAgICAgMzQsXG4gICAgICA2NyxcbiAgICAgIDgyLFxuICAgICAgMzEsXG4gICAgICAxNjUsXG4gICAgICA1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZSkxNWkM4UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTU0ODY1NTU6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJMSUwgV0FZTkVcIixcbiAgICBcImxpZFwiOiBcIjI0ODc4MjAzODAxMjA2NToxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPeUZrN0lIRUxHaWk3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFINHM4MURHdi9CNzJLRmpQdjlxTjI5OEFkSVZ1TkZUS1pqa05kMnMzd0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibldaeFB4VFJuL3Fwa1ozbnYzODJOZTdjV1YzcHg2UWF6bGoyNitiZ3NxNC81TEh0Mi8zT081aDVteUw3VVJmd3o0bm9YZ3lMekxobkh0ZWFoYkZGRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWUl2ejFXemk0QWJpZlV0R0lvQmkyeVBRYnJJRjZXbnFibGRGeStsdkhGdmRPYTJxUkRMN1U5Y3hoWitJb3RXS0RpY0QzeG1RMFBaaFM4eWJia0RPQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTU0ODY1NTU6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTg0OTI2OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ZᴇᴜꜱBᴏᴛ",
  ownername:process.env.OWNER_NAME|| "YoungZeus",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "NARUTO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
