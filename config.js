const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923072984786";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  //  SUHAIL_11_12_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDM3LFxuICAgICAgICAzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjksXG4gICAgICAgIDc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDksXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDc5LFxuICAgICAgICA1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgODQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU1LFxuICAgICAgICA4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDkwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDg1LFxuICAgICAgICA3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgwLFxuICAgICAgICA1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVsSmlDSllJSlM5aUl3b2JWU2lYTDl6bWtmK1IzUVM0RUhnV0xFdXNyVGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcyOTg0Nzg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MUE2NEYwRjVCMUU1RkNERkIxQjgyNDc1QTM5REQ2MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5NDI3NThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzI5ODQ3ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhFMDI3RjA2NUNCMEVBQ0QwRDYzQUI0RkFEREI5RDQ1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjk0Mjc1OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItV20yek5EUlEyRzJiTG43anVsNXF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQzZWFkNjljLWMyZjUtNGYxZC1iMTljLTQzOGMzNWM5YTdlY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDIzMCxcbiAgICAgIDI1MyxcbiAgICAgIDUsXG4gICAgICAxNzUsXG4gICAgICAxMjMsXG4gICAgICAzNSxcbiAgICAgIDQ0LFxuICAgICAgMjQ5LFxuICAgICAgNTIsXG4gICAgICAxNjIsXG4gICAgICA4NSxcbiAgICAgIDUwLFxuICAgICAgMTA5LFxuICAgICAgMjMsXG4gICAgICAyMzcsXG4gICAgICAxNyxcbiAgICAgIDE1MCxcbiAgICAgIDIyMyxcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMjIwLFxuICAgICAgMTE2LFxuICAgICAgMTQxLFxuICAgICAgMTU0LFxuICAgICAgMTI5LFxuICAgICAgMTY2LFxuICAgICAgNjQsXG4gICAgICA5NyxcbiAgICAgIDIwMixcbiAgICAgIDQsXG4gICAgICAxMTQsXG4gICAgICAyOCxcbiAgICAgIDI1MyxcbiAgICAgIDAsXG4gICAgICAxMCxcbiAgICAgIDk3LFxuICAgICAgNzUsXG4gICAgICA3OSxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5S1hGM05IVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcyOTg0Nzg2OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzAzODcxMjA1MjUzODU6MjBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWWFxb29iIFNrXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG5JL3VzRkVKK0t5TFVHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFcVIwOUhGcUZiUkpUckVWRnhDUElrQWxjZjdTam5NaDNUS282VFEzWmdBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNRakF1WnRkanVBZ0xwUysvRjRpb0IyYi9QRWpDMlZ1d1JaUklncmk5ZjBHeXBKZURoMnBsYkJPcjViS3hGYWplKzlXNnJhbHgyeTNsbGlBbkw0bEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlE1SHRDMjh6OURFYzdPUWFMdGRuRFc0WnZrNXQ1Tk1zbDhidlRXS1k0emc2L2YwdnEwNzAwZnIrWFcwNXlTWGZCRUx3a25pcCtMWWQ4UERCdlowemdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3Mjk4NDc4NjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTQyNzUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjFKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKMUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWTzhaaGZ1RmVNTzlFWGlNbmEzN0Jxa2VoRll0MXhuNWZRQjB6SnZ6aTNZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1Njg2NDYxOTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI4NTYxMDIyNjFcIn0iCn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Yaqoob",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
