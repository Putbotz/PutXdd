let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm`
    conn.reply(m.chat, `
  ${command} *${text}*
  *${text}* is *${(101).getRandom()}*% ${command.replace('how', '').toUpperCase()}
  `.trim(), m, m.mentionedJid ? {
        mentions: m.mentionedJid
    } : {})
}
handler.help = ['gay', 'pandai', 'cantik', 'handsome', 'popular', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy', 'sadgirl'].map(v => 'how' + v + ' siapa?')
handler.tags = ['kerang', 'fun']
handler.command = /^how(gay|pandai|cantik|handsome|popular|gila|lesbi|stress?|bucin|jones|sadboy|sadgirl)/i

export default handler
