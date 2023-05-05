let handler = async (m, { conn }) => conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${(10).getRandom()} ${['saat', 'minit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekad', 'abad'].getRandom()} lagi ...
  `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
} : {})

handler.help = ['', 'kah'].map(v => 'bila' + v + ' <text>?')
handler.tags = ['kerang', 'fun']
handler.customPrefix = /(\?$)/
handler.command = /^bila(kah)?$/i

export default handler
