import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, command, args, text}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.herramientas_ajustar_tamano
  
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw tradutor.texto1;
  if (!text) throw tradutor.texto2;
  if (isNaN(text)) throw tradutor.texto3;
  if (!/image\/(jpe?g|png)|video|document/.test(mime)) throw tradutor.texto4;
  const img = await q.download();
  const url = await uploadImage(img);

  if (/image\/(jpe?g|png)/.test(mime)) {
    conn.sendMessage(m.chat, {image: {url: url}, caption: tradutor.texto5, fileLength: `${text}`, mentions: [m.sender]}, {ephemerSAPITO BOTpiration: 24*3600, quoted: m});
  } else if (/video/.test(mime)) {
    return conn.sendMessage(m.chat, {video: {url: url}, caption: tradutor.texto5, fileLength: `${text}`, mentions: [m.sender]}, {ephemerSAPITO BOTpiration: 24*3600, quoted: m});
  }
};
handler.tags = ['tools'];
handler.help = ['tamaño <cantidad>'];
handler.command = /^(length|filelength|edittamaño|totamaño|tamaño)$/i;
export default handler;
