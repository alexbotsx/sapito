let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `🌷𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂 𝑮𝒆𝒏𝒆𝒓𝒂𝒍 🌷${pesan}`
  let teks = `🐸 𝗦𝗔𝗣𝗜𝗧𝗢 𝗕𝗢𝗧 🐸

𝑷𝒂𝒓𝒂 𝒂𝒅𝒒𝒖𝒊𝒓𝒊𝒓 𝒖𝒏 𝒃𝒐𝒕 👇🏻
 Wa.me//+51968914403 \n\n ${oi}\n\n`
  for (let mem of participants) {
  teks += `┏・🎀 @${mem.id.split('@')[0]}\n`}
  teks += `┗・𝗬𝗔𝗥𝗜𝗧𝗭𝗔 - 𝗩𝗘𝗡𝗧𝗔𝗦`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler