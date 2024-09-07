import fetch from 'node-fetch';

// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    // const pp = imagen7;

    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
> *⌜ ＭＥＮＵ | ＣＯＭＰＬＥＴＯ ⌟*

*╭━〔 𝐆𝐇𝐎𝐒𝐓 𝐁𝐎𝐓 〕━╮*
┃➔ ⭐ *Owner:* Alex
┃➔ 📱 *Contacto*: wa.me/595984303784
┃➔ 💌 *Pruebas:* 
╰━━━━━━━━━━━━━━╯

━━━━━━━━━━━━━━━━━━━
> *𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁*
╭┈˖⋆ ❁────
✅ ➜  *${usedPrefix}enable*
❌ ➜  *${usedPrefix}disable*
╰┄───➤ •.
━━━━━━━━━━━━━━━━━━━

> *𝙀𝙓𝙏𝙍𝘼* 💛
 Ժ╴ ╴ ╴ ╴ ╴ ╴
  ↳ ${usedPrefix}animes
  ↳ ${usedPrefix}audios

> *𝙂𝙍𝙐𝙋𝙊𝙎* 🫂
;;- ────────
➜  ${usedPrefix}menuff
➜  ${usedPrefix}comandosff
➜  ${usedPrefix}kick
➜  ${usedPrefix}grupo
➜  ${usedPrefix}promote
➜  ${usedPrefix}demote
➜  ${usedPrefix}link
➜  ${usedPrefix}invocar
➜  ${usedPrefix}setwelcome
➜  ${usedPrefix}setbye
➜  ${usedPrefix}fantasmas
︶︶︶︶︶︶︶︶

> *𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀* 🥷🏻
;;- ────────
➜  ${usedPrefix}menuff
➜  ${usedPrefix}bermuda
➜  ${usedPrefix}kalahari
➜  ${usedPrefix}alpes
➜  ${usedPrefix}purgatorio
➜  ${usedPrefix}nexterra
➜  ${usedPrefix}agendasemanal
︶︶︶︶︶︶︶︶

> *𝘽𝙐𝙎𝘾𝘼𝙍 𝙑𝙎 𝙋𝙇𝘼𝙉𝙏𝙄𝙇𝙇𝘼𝙎 🫅🏻*
;;- ────────
➜  ${usedPrefix}buscarvsmasc*
➜  ${usedPrefix}bsmsac*
➜  ${usedPrefix}buscarvsfem*
➜  ${usedPrefix}bsfem*
➜  ${usedPrefix}buscarvsmixto*
➜  ${usedPrefix}bsmixto*
︶︶︶︶︶︶︶︶

> *𝙍𝙀𝙂𝙇𝘼𝙎 𝙇𝙄𝙎𝙏𝘼 𝙁𝙄𝘾𝙃𝘼* ✅
;;- ────────
➜  ${usedPrefix}Fem4
➜  ${usedPrefix}FemInterna4
➜  ${usedPrefix}Masc4
➜  ${usedPrefix}Masc6
➜  ${usedPrefix}MascInterna4
➜  ${usedPrefix}MascInterna6
➜  ${usedPrefix}Mixto4
➜  ${usedPrefix}Mixto6
➜  ${usedPrefix}MixtoInterna4
➜  ${usedPrefix}MixtoInterna6
➜  ${usedPrefix}apos
➜  ${usedPrefix}mapa
︶︶︶︶︶︶︶︶

> *𝙄𝙉𝙏𝙀𝙍𝘼𝘾𝙄𝙊𝙉* 💚
;;- ────────
➜  ${usedPrefix}abrazo
➜  ${usedPrefix}kiss
➜  ${usedPrefix}pat 
➜  ${usedPrefix}angry
︶︶︶︶︶︶︶︶

> *𝙇𝙄𝙉𝙆 𝘿𝙀 𝘾𝙊𝙈𝙐𝙎  𝙔 𝘿𝙍𝙄𝙑𝙀𝙎 𝘿𝙕𝙉* 🩵
;;- ────────
➜  ${usedPrefix}SpamComu / Comunidades
➜  ${usedPrefix}Spam2
➜  ${usedPrefix}recursosdzn
➜  ${usedPrefix}drivesdzn
➜  ${usedPrefix}dzn
➜  ${usedPrefix}ApkEdits
︶︶︶︶︶︶︶︶

> *𝙂𝙀𝙉𝙀𝙍𝘼 𝙋𝙇𝘼𝙏𝘼𝙁𝙊𝙍𝙈𝘼𝙎* 🍟
;;- ────────
➜  ${usedPrefix}plataformas
➜  ${usedPrefix}drops
➜  ${usedPrefix}streaming
︶︶︶︶︶︶︶︶

> *𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙓 𝙁𝙄𝙇𝙏𝙍𝙊𝙎* 🎭
;;- ────────
➜  ${usedPrefix}sticker | s imagen o video
➜  ${usedPrefix}sticker | s url de tipo jpg
➜  ${usedPrefix}qc
➜  ${usedPrefix}scircle | círculo *imagen
➜  ${usedPrefix}semoji | emoji tipo emoji
➜  ${usedPrefix}attp texto
➜  ${usedPrefix}attp2 texto
➜  ${usedPrefix}ttp texto
➜  ${usedPrefix}ttp2 texto
➜  ${usedPrefix}ttp3 texto
➜  ${usedPrefix}ttp4 texto
➜  ${usedPrefix}ttp5 texto
➜  ${usedPrefix}ttp6 texto
➜  ${usedPrefix}dado
➜  ${usedPrefix}stickermarker efecto : responder a imagen
➜  ${usedPrefix}stickerfilter efecto : responder a imagen
➜  ${usedPrefix}cs : cs2
︶︶︶︶︶︶︶︶

> *𝙅𝙐𝙀𝙂𝙊𝙎* 🎮
;;- ────────
➜  ${usedPrefix}mates
➜  ${usedPrefix}ppt
➜  ${usedPrefix}prostituto <@tag>
➜  ${usedPrefix}prostituta <@tag>
➜  ${usedPrefix}gay2 <@tag>
➜  ${usedPrefix}lesbiana <@tag>
➜  ${usedPrefix}pajero <@tag>
➜  ${usedPrefix}pajera <@tag>
➜  ${usedPrefix}puto <@tag>
➜  ${usedPrefix}puta <@tag>
➜  ${usedPrefix}manco <@tag>
➜  ${usedPrefix}manca <@tag>
➜  ${usedPrefix}rata <@tag>
➜  ${usedPrefix}negro <@tag>
➜  ${usedPrefix}negra <@tag>
➜  ${usedPrefix}fea <@tag>
➜  ${usedPrefix}feo <@tag>
➜  ${usedPrefix}sinpito <@tag>
➜  ${usedPrefix}adoptada <@tag>
➜  ${usedPrefix}adoptado <@tag>
➜  ${usedPrefix}love
➜  ${usedPrefix}los10
➜  ${usedPrefix}suitpvp
➜  ${usedPrefix}slot
➜  ${usedPrefix}simisimi
➜  ${usedPrefix}pregunta
➜  ${usedPrefix}cuando
➜  ${usedPrefix}ship5
➜  ${usedPrefix}abrazo
➜  ${usedPrefix}ship2
➜  ${usedPrefix}formarpareja
➜  ${usedPrefix}verdad
➜  ${usedPrefix}reto
➜  ${usedPrefix}cancion
➜  ${usedPrefix}pista
➜  ${usedPrefix}ruleta
➜  ${usedPrefix}zodiac
➜  ${usedPrefix}odio
➜  ${usedPrefix}ship
➜  ${usedPrefix}sorteo
➜  ${usedPrefix}minovia
➜  ${usedPrefix}minovio
➜  ${usedPrefix}kchero
➜  ${usedPrefix}caza
➜  ${usedPrefix}lvl
➜  ${usedPrefix}cofre
➜  ${usedPrefix}work
︶︶︶︶︶︶︶︶

> *𝙄𝙈𝘼𝙂𝙀𝙉𝙀𝙎* 🗺
;;- ────────
➜  ${usedPrefix}goku
➜  ${usedPrefix}vegeta
➜  ${usedPrefix}lora
➜  ${usedPrefix}cr7
➜  ${usedPrefix}spiderman
➜  ${usedPrefix}batman
➜  ${usedPrefix}hellokitty
➜  ${usedPrefix}charmander
︶︶︶︶︶︶︶︶ 

> *𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎* 📍
;;- ────────
➜  ${usedPrefix}play
➜  ${usedPrefix}play.1
➜  ${usedPrefix}play2.2
➜  ${usedPrefix}ytv.2
➜  ${usedPrefix}yta.2
➜  ${usedPrefix}playlist
➜  ${usedPrefix}spotify
➜  ${usedPrefix}spotifydl
➜  ${usedPrefix}tiktok
➜  ${usedPrefix}instagram
➜  ${usedPrefix}mediafire
➜  ${usedPrefix}gdrive
➜  ${usedPrefix}twitter
➜  ${usedPrefix}yta
➜  ${usedPrefix}ytv
➜  ${usedPrefix}imagen
➜  ${usedPrefix}iaimagen
➜  ${usedPrefix}pinteres
➜  ${usedPrefix}igstory
︶︶︶︶︶︶︶︶

> *𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍𝙀𝙎* 📌
;;- ────────
➜  ${usedPrefix}toimg
➜  ${usedPrefix}tomp3
➜  ${usedPrefix}toptt
➜  ${usedPrefix}tovideo
➜  ${usedPrefix}tts
 ︶︶︶︶︶︶︶︶

> *𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝙔 𝙇𝙊𝙂𝙊𝙎* 💛
;;- ────────
➜  ${usedPrefix}mensajefalso
➜  ${usedPrefix}logos
➜  ${usedPrefix}logocorazon
➜  ${usedPrefix}ytcomment
➜  ${usedPrefix}hornycard
➜  ${usedPrefix}pixelar
 ︶︶︶︶︶︶︶︶

> *𝙁𝙍𝘼𝙎𝙀𝙎 𝙔 𝙏𝙀𝙓𝙏𝙊* 💌
;;- ────────
➜  ${usedPrefix}piropo
➜  ${usedPrefix}consejo
➜  ${usedPrefix}fraseromantica
 ︶︶︶︶︶︶︶︶

> *𝘽𝙐𝙎𝘾𝘼𝘿𝙊𝙍𝙀𝙎* 🔎
;;- ────────
➜  ${usedPrefix}xnxxsearch
➜  ${usedPrefix}google
➜  ${usedPrefix}letra
➜  ${usedPrefix}wikipedia
➜  ${usedPrefix}ytsearch
➜  ${usedPrefix}playstore
➜  ${usedPrefix}pornhubsearch
 ︶︶︶︶︶︶︶︶

> *𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎* 🛠
;;- ────────
➜  ${usedPrefix}clima
➜  ${usedPrefix}afk
➜  ${usedPrefix}ocr
➜  ${usedPrefix}calc
➜  ${usedPrefix}del
➜  ${usedPrefix}whatmusic
➜  ${usedPrefix}qrcode
➜  ${usedPrefix}traducir
 ︶︶︶︶︶︶︶︶

> *𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼𝙎* 💰
;;- ────────
➜  ${usedPrefix}verificar
➜  ${usedPrefix}unreg
➜  ${usedPrefix}minar
➜  ${usedPrefix}buy
➜  ${usedPrefix}work
➜  ${usedPrefix}mendigar
➜  ${usedPrefix}transfer
 ︶︶︶︶︶︶︶︶

> *𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎 𝙊𝙒𝙉𝙀𝙍𝙎 ⭐* 
;;- ────────
➜  ${usedPrefix}join enlace
➜  ${usedPrefix}unete enlace
➜  ${usedPrefix}dardiamantes cantidad
➜  ${usedPrefix}darxp cantidad
➜  ${usedPrefix}dargatacoins cantidad
➜  ${usedPrefix}addprem | userpremium @tag cantidad
➜  ${usedPrefix}addprem2 | userpremium2 @tag cantidad
➜  ${usedPrefix}addprem3 | userpremium3 @tag cantidad
➜  ${usedPrefix}addprem4 | userpremium4 @tag cantidad
➜  ${usedPrefix}idioma | language
➜  ${usedPrefix}cajafuerte
➜  ${usedPrefix}comunicar | broadcastall | bc texto
➜  ${usedPrefix}broadcastchats | bcc texto
➜  ${usedPrefix}comunicarpv texto
➜  ${usedPrefix}broadcastgc texto
➜  ${usedPrefix}comunicargrupos texto
➜  ${usedPrefix}borrartmp | cleartmp
➜  ${usedPrefix}delexp @tag
➜  ${usedPrefix}deloptimuscoins @tag
➜  ${usedPrefix}deldiamantes @tag
➜  ${usedPrefix}reiniciar | restart
➜  ${usedPrefix}Actualizar | update
➜  ${usedPrefix}addprem | +prem @tag
➜  ${usedPrefix}delprem | -prem @tag
➜  ${usedPrefix}listapremium | listprem
➜  ${usedPrefix}añadirdiamantes @tag cantidad
➜  ${usedPrefix}añadirxp @tag cantidad
➜  ${usedPrefix}añadircoins @tag cantidad
︶︶︶︶︶︶︶︶`


    let pp
    // Nouvelles images de menu disponibles 
    if (idioma == 'es') {
      pp = global.imagen4
    } else if (idioma == 'pt-br') {
      pp = global.imagen7
    } else if (idioma == 'fr') {
      pp = global.imagen8
    }else if (idioma == 'en') {
      pp = global.imagen9
    } else if (idioma == 'ru') {
      pp = global.imagen10
    } else {
      pp = global.imagen4 // Imagem Default em espanhol
    }



    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
const fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
     conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    } else {
      //await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
const fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
   conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    }
  } catch {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu

    conn.reply(m.chat, tradutor.texto1[29], m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
