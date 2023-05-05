let handler = async (m, { conn, command, text }) => conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${(10).getRandom()} ${['saat', 'minit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekad', 'abad'].getRandom()} lagi ...
  `.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['', 'kah'].map(v => 'bila' + v + ' <text>?')
handler.tags = ['kerang', 'fun']
handler.command = /^bila(kah)?$/i

export default handler
