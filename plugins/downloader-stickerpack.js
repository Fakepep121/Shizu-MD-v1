import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*EXAMPLE TO USE COMMAND ${usedPrefix + command} Anya Forger*`
try {
let res = await fetch(`https://api.xteam.xyz/sticker/stickerly?q=${args[0]}&APIKEY=5bd33b276d41d6b4`)
let json = await res.json()
for (let data of (json.result.stickerlist || json)) {
const stikers = await sticker(false, data, global.packname, global.author)
conn.sendFile(m.chat, stikers, 'sticker.webp', '', m, { asSticker: true })}
//await delay(1500)
} catch {  
await m.reply('*404 ERROR*')  
}}
handler.command = /^stickerly|stickerpack$/i
export default handler
//const delay = time => new Promise(res => setTimeout(res, time))
