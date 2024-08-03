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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_02_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICA5MyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxLFxuICAgICAgICA0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MixcbiAgICAgICAgMjIzLFxuICAgICAgICAzLFxuICAgICAgICA3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzksXG4gICAgICAgIDU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDksXG4gICAgICAgIDM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDksXG4gICAgICAgIDU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODksXG4gICAgICAgIDI1LFxuICAgICAgICA4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU0LFxuICAgICAgICA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDU4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFSTjVrV09OM1F6bkpSNEhnN2taUXQyVUJXSEs1d1Mrb2x6ZW9hU205Z2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcyOTg0Nzg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRkY0RENEQzUwNUI1NDUzMTE5ODdDREZFRTE0MzI1MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI3MDA5MjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzI5ODQ3ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAxMjNDN0ZDNjk3MTcwNzJBNTI2NkY1MzUzNzczQUY1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjcwMDkyNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyb1hkRmdzNVJZU1dlcmt3LTFmRlpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg3Y2ExNjRkLWJhOTEtNDg4Mi05ODM4LTU5ZWMxNzczMWU3YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxNDgsXG4gICAgICAzNyxcbiAgICAgIDEwOCxcbiAgICAgIDkwLFxuICAgICAgMTAzLFxuICAgICAgMzUsXG4gICAgICAxMzUsXG4gICAgICAyMTYsXG4gICAgICAxMjksXG4gICAgICAxOTIsXG4gICAgICA1OCxcbiAgICAgIDEwNyxcbiAgICAgIDIzNSxcbiAgICAgIDYyLFxuICAgICAgMTEsXG4gICAgICAzMixcbiAgICAgIDEzMyxcbiAgICAgIDMwLFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAyMDcsXG4gICAgICAyNDAsXG4gICAgICA0LFxuICAgICAgMjM2LFxuICAgICAgMjA1LFxuICAgICAgMTAzLFxuICAgICAgMjE2LFxuICAgICAgMTczLFxuICAgICAgMCxcbiAgICAgIDE0MSxcbiAgICAgIDI2LFxuICAgICAgNixcbiAgICAgIDIzNyxcbiAgICAgIDExOSxcbiAgICAgIDQ2LFxuICAgICAgMjQsXG4gICAgICAyNixcbiAgICAgIDIwMixcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSNE02RkhTVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcyOTg0Nzg2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzAzODcxMjA1MjUzODU6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWWFxb29iIFNrXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFhJL3VzRkVQZW91YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFcVIwOUhGcUZiUkpUckVWRnhDUElrQWxjZjdTam5NaDNUS282VFEzWmdBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImcwMXh1YjdNSzF6ZitpVnBCZlhYa2U0Tks3MjJzOUJMN29iVEJNUHVyQ3gwVGpkMkhtVFJ3U3k0T1NTeTFrWFVuN3B6VkluTmpUNFlGanMxMzhFd0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNuRWJSSlZ2Rk4xTXVTOHZiM0sxY0RNcHdTZS9YWThSRXJ5Um0rejNnZDBZbkV6Zit1QkM2ZzEzN2VsQWR5L2pGV2FudlJ0MVl6aS92ajlUUmk2SWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3Mjk4NDc4NjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzAwOTIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmErXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGYSsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoaTViYVBiVFpKV0VFWlZhT3M3Qm9mTFZaWjRKV005enlROUhqVDNKRHIwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1Njg2NDYxOTYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
