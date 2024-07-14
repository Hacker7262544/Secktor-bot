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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_24_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0LFxuICAgICAgICA3LFxuICAgICAgICAyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDAsXG4gICAgICAgIDE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU5LFxuICAgICAgICA2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwLFxuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQyLFxuICAgICAgICA1NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMwLFxuICAgICAgICA4NixcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTExLFxuICAgICAgICA5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY0LFxuICAgICAgICA5MixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZFMHFRbndLakZFUkFkVmoxekNkMWJtY1lNN09xdVA2VlFxSlJRWGVuWk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcyOTg0Nzg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMDU4ODQxNjMxM0ZBQjJBQjQ1MUM5OEJGMDkyMTVDQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA5ODE0NjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzI5ODQ3ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJBMjQzNkNBQjRDREQ2RTg2N0YzN0FDNzhCNDg1QkFFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDk4MTQ2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvT2NBSkpaMlFNU1J6S2IzUUVsQVh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNiZWZhMWVhLWY0ODEtNDc5My1iYzlmLWE1OTUzYjg3NDg1OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDQzLFxuICAgICAgMjMsXG4gICAgICAyNixcbiAgICAgIDMyLFxuICAgICAgMTY2LFxuICAgICAgMTQsXG4gICAgICAzMSxcbiAgICAgIDE4MixcbiAgICAgIDE0NixcbiAgICAgIDgwLFxuICAgICAgMTMyLFxuICAgICAgNTksXG4gICAgICAxODAsXG4gICAgICAyMTAsXG4gICAgICA5NyxcbiAgICAgIDE5NixcbiAgICAgIDkyLFxuICAgICAgMTI0LFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgNDAsXG4gICAgICAyMTUsXG4gICAgICAxNzYsXG4gICAgICA3OCxcbiAgICAgIDE4NixcbiAgICAgIDEzOSxcbiAgICAgIDIzMCxcbiAgICAgIDIwMSxcbiAgICAgIDIwNSxcbiAgICAgIDE1LFxuICAgICAgMjA3LFxuICAgICAgMTE3LFxuICAgICAgMTI1LFxuICAgICAgMTQyLFxuICAgICAgMTg2LFxuICAgICAgNixcbiAgICAgIDI1NSxcbiAgICAgIDEzMyxcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4UUVSNzJCNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcyOTg0Nzg2OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTg1NjEzNTk3NjU1Nzc6NTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2SgPCdkajwnZG48J2RtvCdkbbwnZGpIPCdkbrwnZGyIPCfh7Xwn4ew8J+UpVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09uRzJKVUJFTmF2MExRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZHNRTlZwazV6YlVyYnZ0QWZ1NDFqSmd5NmovY1ZhU0k5OEJPL0R6Q254ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJONHdWM29tRXpZeHNFTkRUUklRU2RINGo2M1MzbFFpKzlrOVlPQjIreUVVb2VPNU9CdmJBc2tvL0kvQzlKaWtVeVVGZkg3SjNGd0dtV1IremJVcmNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsQTMzTmJwcU1CQVBmUUFRdTlJVXpLd3d5MFZnS3B2ZGw0OUw0NTJ3OFoyQlhnc01sSEgzVGtqM0tjWlVua3UrRVlXUjJBR1Juci9sRW5GcTFRWDhBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzI5ODQ3ODY6NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5ODE0NjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGSmFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZKYS5qc29uIjogIntcImtleURhdGFcIjpcIkt3dzk5RW44amkwWUVIeGNjWnhZZHQvVllmT3h3OEd3V0Zhbk1scm55RVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzEzOTI2NTA1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5ODAwODE0MjNcIn0iCn0="  // PUT your SESSION_ID 


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
