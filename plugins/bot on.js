let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak 𝕻𝖚𝖙 𝕯𝖊𝖛 tadi ketiduran😊* ')
}

handler.tags = ['main']
handler.command = /^(puton)$/i

handler.admin = true

export default handler