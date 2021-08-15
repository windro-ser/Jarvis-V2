const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();



  r_text[0] = "https://raw.githubusercontent.com/windro-ser/Jarvis-V2/main/bot.png";


    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Creater WindrO*
*Bgm updation💘*
*Owner number wa.me/918606413490*
*githublink       https://github.com/windro-ser/Jarvis-V2*
*audio commads    https://github.com/windro-ser/Jarvis-V2/tree/main/uploads*
*sticker commads  https://github.com/windro-ser/Jarvis-V2/tree/main/stickers*
`})

}));
