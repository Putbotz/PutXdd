// MADE BY BOCHILGAMING
// RECODE BY PUTBOTZ

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
  before: `
┌── ⳹°❀❬ %me ❭❀°
│✎ Hai, %name!
│
│✎ Tersisa *%limit Limit*
│✎ Role *%role*
│✎ Level *%level (%exp / %maxexp)* [%xp4levelup]
│✎ %totalexp XP secara Total
│ 
│✎ Tanggal: *%date*
│✎ Tanggal Islam: *%dateIslamic*
│✎ Waktu: *%time*
│
│✎ Uptime: %muptime
│✎ Database: %rtotalreg dari %totalreg
└─────┈ ⳹ ❋ཻུ۪۪⸙
%readmore
`.trimStart(),
  header: '┌─ ⳹°❀❬ %category ❭❀°',
  body: '│✎ %cmd %islimit %isPremium',
  footer: '└────┈ ⳹ ❋ཻུ۪۪⸙\n',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main',
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis & Logo',
  'audio': 'Audio',
  'maker': 'Maker',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'nocategory') tags = {
    '': 'No Category'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      const sections = [
   {
	title: `${htki} MAIN ${htka}`,
	rows: [
	    {title: `⚡ ${pmenus} SPEED BOT`, rowId: ".ping", description: "Menampilkan kecepatan respon BOT"},
	    {title: `💌 ${pmenus} OWNER BOT`, rowId: ".owner", description: "Menampilkan List owner BOT"},
	    {title: `📔 ${pmenus} SCRIPT BOT`, rowId: ".sc", description: `Source Code`},
	]
    },{
	title: `${htki} SUPPORT ${htka}`,
	rows: [
	    {title: `🔖 ${pmenus} SEWA`, rowId: ".sewa", description: "Menampilkan list harga sewa BOT"},
	    {title: `🌟 ${pmenus} BUY PREMIUM`, rowId: ".premium", description: "Menampilkan list harga premium"},
	    {title: `💹 ${pmenus} DONASI`, rowId: ".donasi", description: 'Support BOT agar lebih fast respon'},
	]
	},{
	title: `${htki} MENU ${htka}`,
	rows: [
	    {title: `💬 ${pmenus} All`, rowId: ".? all", description: "Menampilkan Semua command BOT"},
	    {title: `🌱 ${pmenus} Rpg`, rowId: ".? rpg", description: "Game Epic Rpg!"},
	{title: `✨ ${pmenus} Exp`, rowId: ".? xp", description: "Ayo tingkatkan pangkat mu!"},
	{title: `🎮 ${pmenus} Game`, rowId: ".? game", description: "Gamenya seru seru lho >-<"},
	{title: `🧩 ${pmenus} Fun`, rowId: ".? fun", description: "Fitur yang aman untuk keluarga"},
	{title: `🐚 ${pmenus} Kerang`, rowId: ".? kerangajaib", description: "Tanyakan pada ketua club"},
	{title: `📑 ${pmenus} Quotes`, rowId: ".? quotes", description: "Random Inspirasi"},
	{title: `⛩️ ${pmenus} Anime`, rowId: ".? anime", description: "Kamu wibu ya bang?"},
	{title: `🔞 ${pmenus} Nsfw`, rowId: ".? nsfw", description: "Tch, dasar sagne"},
	{title: `🌟 ${pmenus} Premium`, rowId: ".? premium", description: "Only premium Users"},
	{title: `🎭 ${pmenus} Anonymous Chats`, rowId: ".? anonymous", description: "Bicara dengan orang tidak dikenal"},
	{title: `📖 ${pmenus} Al-Quran`, rowId: ".? quran", description: "Tobat yuk kak"},
	{title: `🌎 ${pmenus} Internet`, rowId: ".? internet", description: "Cari sesuatu diBOT"},
	{title: `📩 ${pmenus} Downloaders`, rowId: ".? downloader", description: "Download sesuatu diBOT"},
	{title: `🎨 ${pmenus} Stikers`, rowId: ".? stiker", description: "Buat Sticker diBOT"},
	{title: `✏️ ${pmenus} Nulis`, rowId: ".? nulis", description: "Nulis kok males kak?"},
	{title: `🎧 ${pmenus} Audio`, rowId: ".? audio", description: "Ubah Audio dengan Filter"},
	{title: `🏢 ${pmenus} Group`, rowId: ".? group", description: "Only Groups"},
	{title: `👑 ${pmenus} Admin`, rowId: ".? admin", description: "Only Admin Group"},
	{title: `🗂️ ${pmenus} Database`, rowId: ".? database", description: "Simpan sesuatu diBOT"},
	{title: `🛠️ ${pmenus} Tools`, rowId: ".? tools", description: "Mungkin tools ini bisa membantu?"},
	{title: `ℹ️ ${pmenus} Info`, rowId: ".? info", description: "Info info BOT"},
	{title: `👩‍💻 ${pmenus} Owner`, rowId: ".? owner", description: "Owner Only!"},
	{title: `❓ ${pmenus} No Category`, rowId: ".? nocategory", description: "Fitur tanpa kategory!"},
	]
  },
]

let usrs = db.data.users[m.sender]
let tek = `*${ucapan()} ${conn.getName(m.sender)}*
┏─── ⳹°❀❬ {
  "creds": {
    "noiseKey": {
      "private": {
        "type": "Buffer",
        "data": "cMeFvw3L3LAnOhOTkzUnNSlM4IAorG4NuviGKboC01I="
      },
      "public": {
        "type": "Buffer",
        "data": "vqkH3WnkClwk/8YgLaFJ/He2Nxn1Gy9EMA9JnaNdTlQ="
      }
    },
    "signedIdentityKey": {
      "private": {
        "type": "Buffer",
        "data": "QAjfPSfhsSjkkcnANQEzcCvo3UoEA/AZtaeoXdXQBHc="
      },
      "public": {
        "type": "Buffer",
        "data": "VucY7sLtn0Au26Lc2Rxqi4bFsXzvEoap2g3hwkjAfAc="
      }
    },
    "signedPreKey": {
      "keyPair": {
        "private": {
          "type": "Buffer",
          "data": "CFjqocqP7QqL6dj2cMTxcxhEgvPYfQCWON4JdEz9S3I="
        },
        "public": {
          "type": "Buffer",
          "data": "Ge4vXWFMFxsXedt3GZoZH/AikRPYIZrhPDpDxy0mOg0="
        }
      },
      "signature": {
        "type": "Buffer",
        "data": "BFnmWRfvq7OShzJCWyoo80DhDtmJZWQGyg4dJJ0BN3MQ0o3MSrbJ7qR/GDHjtE+N0CC/6Rq4cHIBaNxurQGaAg=="
      },
      "keyId": 1
    },
    "registrationId": 54,
    "advSecretKey": "gVi/XB1aGTyUkW8BTreGa7/lnefLJBgU+zQmDntJtZA=",
    "nextPreKeyId": 31,
    "firstUnuploadedPreKeyId": 31,
    "accountSettings": {
      "unarchiveChats": false
    },
    "account": {
      "details": "CLmn1OoGEIW5oqAGGAE=",
      "accountSignature": "0uweSoiHaz3tgaqG/ovfO20FZ0viujSJJ5mcdbMh/815gWBRVVzPfz3zlLq87Px4Vkoh2ilkvVQmGyC0117cCg==",
      "deviceSignature": "PzuvGXWJfGgwbqlYyTys0+phgvn7BOO/caMjJk43UQBMw3DCA5bBJ1B18sD5wTe92LlDwliXePIwXMeYOdH9Cw=="
    },
    "me": {
      "id": "60124521823:2@s.whatsapp.net",
      "name": "вσт ηιєѕнн🍫"
    },
    "signalIdentities": [
      {
        "identifier": {
          "name": "60124521823:2@s.whatsapp.net",
          "deviceId": 0
        },
        "identifierKey": {
          "type": "Buffer",
          "data": "BWPOYiGg2b4U+Slb03r7s4B2jA5ML8BqIHaVPXRxfNwi"
        }
      }
    ],
    "platform": "android",
    "lastAccountSyncTimestamp": 1678285961,
    "myAppStateKeyId": "AAAAAHDy"
  },
  "keys": {
    "preKeys": {
      "1": {
        "private": {
          "type": "Buffer",
          "data": "2MDxBFppoXAhyJ+9MqEmx1zwnwaw9g56rQ4DOYkBu3A="
        },
        "public": {
          "type": "Buffer",
          "data": "GIXQIjipWm3JXidb8p+YlrRxFHaDoF2XdaE63t5no3o="
        }
      },
      "2": {
        "private": {
          "type": "Buffer",
          "data": "KHYE7bWJnWWUiC/3SKqrak12FJRKGEFkMTTnSNwL9Vo="
        },
        "public": {
          "type": "Buffer",
          "data": "PxiqPM/I0dIC5MVP5kAviMDpVpSX+7tmpE9VlJUIcko="
        }
      },
      "3": {
        "private": {
          "type": "Buffer",
          "data": "GIKiNyFIoE4nVw/7lKI1LNx3GMKgBVI/K40yADyA52o="
        },
        "public": {
          "type": "Buffer",
          "data": "y/vUp2PbsS9U0ekQ6qUsGeZH8mdpPIUF0Yr7bvNXYng="
        }
      },
      "4": {
        "private": {
          "type": "Buffer",
          "data": "wCAiGmVkn3Ylq9y3VnfQWQ6lwlNroEqbAIWeIusjF3w="
        },
        "public": {
          "type": "Buffer",
          "data": "E1aeV/EYKfyhEZTQ4ly1Ed97qvjs7rgd6ut6aMI8b3M="
        }
      },
      "5": {
        "private": {
          "type": "Buffer",
          "data": "IP0SWU0LuD8CNU+zo8qGVvDmYfAmm9HvsBUSyAaugEk="
        },
        "public": {
          "type": "Buffer",
          "data": "dc6T6E26MmnUvoRHiITS9+ZZAiokLRtSKoTcCFx2hlM="
        }
      },
      "6": {
        "private": {
          "type": "Buffer",
          "data": "4KgzOuDRl6jLBbNLh7ZaxRoUqfI4eRpB3pWIUPGvklg="
        },
        "public": {
          "type": "Buffer",
          "data": "lkLNFGp0oTojDnoCXizlsstE8WiA2zP2G7v+d3L460g="
        }
      },
      "7": {
        "private": {
          "type": "Buffer",
          "data": "WL/Lwgy1/Ao9L2ZEqkLWO0+xWOGkAFrHSnlKzzvghEI="
        },
        "public": {
          "type": "Buffer",
          "data": "MgTay6OAho+ArPlCbOtxyhfRmS1HuSBJRqwN2xph6V8="
        }
      },
      "8": null,
      "9": {
        "private": {
          "type": "Buffer",
          "data": "qDJqKozICwQHd0WXzTOv0IPc58syrGR+iIU4W9jk2nk="
        },
        "public": {
          "type": "Buffer",
          "data": "mXlO8JygtW+faDO+4UVguS8K6M9SEznsUSSaI6EIHCQ="
        }
      },
      "10": {
        "private": {
          "type": "Buffer",
          "data": "WMJcqmTJ0Ab9PMndV/UnL+lfJRkkWh65kN69mbuywUc="
        },
        "public": {
          "type": "Buffer",
          "data": "keYfUui4gXDrvZkFU8qDgfRQSwjUP816YYkSXUTnsAI="
        }
      },
      "11": {
        "private": {
          "type": "Buffer",
          "data": "gA6nAPLX2JKnJ2ZoZRNhYgnxCzwESb2pRRfNW3n2PGM="
        },
        "public": {
          "type": "Buffer",
          "data": "5pYp6a7VZNbv2InP7LkcplVfu8Vo1TcACmRL26STKUU="
        }
      },
      "12": {
        "private": {
          "type": "Buffer",
          "data": "aJLVk2Q/2syKh9M7FozmT1AkPCqUhqFDNdJM4EE7S0Q="
        },
        "public": {
          "type": "Buffer",
          "data": "sJVodeYkkF+hMb72rAQOVnv8b53pqhowngXFKxD5aik="
        }
      },
      "13": null,
      "14": {
        "private": {
          "type": "Buffer",
          "data": "AGbzXvkwmjOTkf2iqLih02oENpt/n9odjejxpnnGy2w="
        },
        "public": {
          "type": "Buffer",
          "data": "15uN9oH2k9mYoF4y/SCo4/9FTDTm84n1F4IpsxUFp3s="
        }
      },
      "15": {
        "private": {
          "type": "Buffer",
          "data": "IKCQ/jUu+I5vi0k9hIpNEm8fhC0+e+8cWjyiY7N6LmI="
        },
        "public": {
          "type": "Buffer",
          "data": "Okxpr8wA0T+ZPwrPJKhmKZtbtZtYYYivVQ476BGICko="
        }
      },
      "16": {
        "private": {
          "type": "Buffer",
          "data": "cPwxeLxibgFrt04iWErktNMjWn1teCcfSqAU5SLvt0A="
        },
        "public": {
          "type": "Buffer",
          "data": "E7Eu5WikIjmbTgSnJjQwSzJEMHgEUZqk4/rESdgTxBo="
        }
      },
      "17": {
        "private": {
          "type": "Buffer",
          "data": "UPtXPKn0Sg1XyJxgcaWtXmeam/m85tvtdAx/l7f56FI="
        },
        "public": {
          "type": "Buffer",
          "data": "uAVfAN+WLZCsknmShlBymW0MPfE7ZLkZN3r7JmSjHhw="
        }
      },
      "18": {
        "private": {
          "type": "Buffer",
          "data": "aCWZgTu1ZkL7Yg01/bIR1U0/BhcnOmecmWsWOnrz2Go="
        },
        "public": {
          "type": "Buffer",
          "data": "xZgwquCmLaZWeu7MtsJyE29i289tIvha4tiKFJwlsi0="
        }
      },
      "19": {
        "private": {
          "type": "Buffer",
          "data": "oHk+Ur3kTjDJSuFPgPd1grFfKABVwKRArovg8yJiJWY="
        },
        "public": {
          "type": "Buffer",
          "data": "HSUuMHqKZXNqQBLHrK9q5KjY+/tDbmxT7uN6RLS8MEQ="
        }
      },
      "20": {
        "private": {
          "type": "Buffer",
          "data": "KJmuviBnI6/xy3FngIlSV1xTzoKTHjDLT30jhwXHoXw="
        },
        "public": {
          "type": "Buffer",
          "data": "WXNYHC3OIZQbh4Dk2wxK8a8kLwdTw5jsEZgqdF16qUw="
        }
      },
      "21": {
        "private": {
          "type": "Buffer",
          "data": "CJAGrRH+19l2enitL19nIJBOaTPIEEZaS6pSHnMMZHA="
        },
        "public": {
          "type": "Buffer",
          "data": "q7+XhWEIm6+sQKP9VwZh4Q0Ca5/irromTexzrPxDwkg="
        }
      },
      "22": {
        "private": {
          "type": "Buffer",
          "data": "+MacJNfhNOBTApupUpLl4NIUBvu70r5ECB4j8fKDcGw="
        },
        "public": {
          "type": "Buffer",
          "data": "3Lc/6gbWKakKZH2AQq6RN5ZgR/ErnEaU17hAa1DZk2M="
        }
      },
      "23": {
        "private": {
          "type": "Buffer",
          "data": "QCJtQndwzmF2Rro/WRhTHwX8BM+SOgbQZ/OBvqO8Hnk="
        },
        "public": {
          "type": "Buffer",
          "data": "iyxu5DoxGDj+MLdEJ5vtcwV6yr0/4b9WpMpJ4I/FDAI="
        }
      },
      "24": {
        "private": {
          "type": "Buffer",
          "data": "uGPCXZxtQuTT0OWbCl1SjdFenaUZGyjiAH2XvjPZxF4="
        },
        "public": {
          "type": "Buffer",
          "data": "X0qSSPjKZqAeCxoET/impfcPrm/IdS8a5W815Xd0Zho="
        }
      },
      "25": {
        "private": {
          "type": "Buffer",
          "data": "QLrzZ24b4/Cwt5fbNwY8bW4r5rg6ycx5Qdq4cOd6uks="
        },
        "public": {
          "type": "Buffer",
          "data": "JKCysrNQp/+itxrvN+SLgIfCBWF9kOcmTyHqiKZBbiA="
        }
      },
      "26": {
        "private": {
          "type": "Buffer",
          "data": "sPBEfnfHnf2vBQwXjaeRsNwPMvpyn/E21qtL3WOwaGo="
        },
        "public": {
          "type": "Buffer",
          "data": "oslooQxjcPdTl+NEB6PCRPmq3f0C9/0nUe5xksgRI1M="
        }
      },
      "27": {
        "private": {
          "type": "Buffer",
          "data": "CMn/qxEo91LVmUZdW8PCt66awW4Otk9MovuYq5Jii2Y="
        },
        "public": {
          "type": "Buffer",
          "data": "5D8D1QvZVX4MuPUKdVjfHG7h+VU/gHC8neQR/8FpbTc="
        }
      },
      "28": {
        "private": {
          "type": "Buffer",
          "data": "6CIzOMfV7bYlBZMQ1zgGiDSCGU6E61JBHcszAP3glmo="
        },
        "public": {
          "type": "Buffer",
          "data": "lzKLryGtbYTuEkGrJpz7eB28sA352Uu3jnxO77PKDh0="
        }
      },
      "29": {
        "private": {
          "type": "Buffer",
          "data": "gFQhQaAXFw9PXIfO6N0yju/QizlgFyfrrTC/qkIOeUU="
        },
        "public": {
          "type": "Buffer",
          "data": "NG/f9KA7oWNCc3ewWGwBMVD0myPuW6CSx96SZIdvAis="
        }
      },
      "30": {
        "private": {
          "type": "Buffer",
          "data": "yHttBIi1EyKua4Tn8qMgDrhG1UqCduV31FpAJavRcUs="
        },
        "public": {
          "type": "Buffer",
          "data": "4YvFXzQlu8AtnKyrF/7zL2hmeJwCom4f/YQYR5O58T8="
        }
      }
    },
    "sessions": {
      "60124521823.0": {
        "_sessions": {
          "BfRJAT2geRRyQ0p8u1k+sdZhig7oc3fJ35k4twI9NHwC": {
            "registrationId": 1301471545,
            "currentRatchet": {
              "ephemeralKeyPair": {
                "pubKey": "BZ2aOMiNJc61BHta8f9kgzAsXH9eF/uisKKXsZzQeusX",
                "privKey": "SFZRv73Zlw+LSDY9n/p9VCZqm6y9GOUIqzybQkrrfWQ="
              },
              "lastRemoteEphemeralKey": "BUzuL6qFEnQJyeKkyyvKlyLaZEryxJTSMQsaT/CXbqtX",
              "previousCounter": 0,
              "rootKey": "L5aUJ8KSHFJe+o35G+MdmAm3Bhgv6so+5+6NgL0qlmk="
            },
            "indexInfo": {
              "baseKey": "BfRJAT2geRRyQ0p8u1k+sdZhig7oc3fJ35k4twI9NHwC",
              "baseKeyType": 2,
              "closed": -1,
              "used": 1678285962617,
              "created": 1678285962616,
              "remoteIdentityKey": "BWPOYiGg2b4U+Slb03r7s4B2jA5ML8BqIHaVPXRxfNwi"
            },
            "_chains": {
              "BUzuL6qFEnQJyeKkyyvKlyLaZEryxJTSMQsaT/CXbqtX": {
                "chainKey": {
                  "counter": 6,
                  "key": "MEBx//v6YHWKNFGYaKLCBOH+/WIPVVX2NI3G5CcLmNY="
                },
                "chainType": 2,
                "messageKeys": {}
              },
              "BZ2aOMiNJc61BHta8f9kgzAsXH9eF/uisKKXsZzQeusX": {
                "chainKey": {
                  "counter": -1,
                  "key": "5bLb2mYuXsCN9h83w4z/d6LEWrFYM6FKUUlCebNC2hk="
                },
                "chainType": 1,
                "messageKeys": {}
              }
            }
          }
        },
        "version": "v1"
      },
      "60167397052.0": {
        "_sessions": {
          "BeR8h/S9il087U7Lbxy/71zsmxsw22c72TSm61cU4mkQ": {
            "registrationId": 160307933,
            "currentRatchet": {
              "ephemeralKeyPair": {
                "pubKey": "Bf9q1S9INULnC14e+WG7JOor3Ai/D+LXvO3o3o9VuH1O",
                "privKey": "EPp8i0HsS3u4ENsSncHJ7rEIRl3qOJwaR6Dqe4XORkM="
              },
              "lastRemoteEphemeralKey": "BcNVM8y6MXlCjEkJd2CO/qP5gWWSGAuY5ETK26FMBmpR",
              "previousCounter": 0,
              "rootKey": "1WFs7vgNQ3WvmPYEEQvDDSjcr81x6zqDgioPGxqR5Rc="
            },
            "indexInfo": {
              "baseKey": "BeR8h/S9il087U7Lbxy/71zsmxsw22c72TSm61cU4mkQ",
              "baseKeyType": 2,
              "closed": -1,
              "used": 1678285983072,
              "created": 1678285983072,
              "remoteIdentityKey": "BQFpef1F4mot7EHqPEtKz7cM4HH5wPS6T8W2zFQmHWYM"
            },
            "_chains": {
              "BcNVM8y6MXlCjEkJd2CO/qP5gWWSGAuY5ETK26FMBmpR": {
                "chainKey": {
                  "counter": 0,
                  "key": "OCSKg7PmhzwvtZ3dAkfA41Bsnw6pW2gqNtFU0kyuLyc="
                },
                "chainType": 2,
                "messageKeys": {}
              },
              "Bf9q1S9INULnC14e+WG7JOor3Ai/D+LXvO3o3o9VuH1O": {
                "chainKey": {
                  "counter": -1,
                  "key": "h0Jr7CyRyn8dOdyup4mXNKkmVAhdufQ+l9BcZZNhHjA="
                },
                "chainType": 1,
                "messageKeys": {}
              }
            }
          }
        },
        "version": "v1"
      }
    },
    "appStateSyncKeys": {
      "AAAAAHDy": {
        "keyData": "q3kgVA1sih0D4CSESuf4Ri82/QWSiJMlUhxD0CV/V/Y=",
        "fingerprint": {
          "rawId": 1834292152,
          "currentIndex": 1,
          "deviceIndexes": [
            0,
            1
          ]
        },
        "timestamp": "0"
      }
    },
    "appStateVersions": {
      "critical_block": {
        "version": 2,
        "hash": {
          "type": "Buffer",
          "data": "EkFj6DjCDb+M4NET3MVWQxo8ZhV1Ytfns65wUM1fVltTwOX6NkrdePr06D4PFLe3/nH/IhrF+Twsx3XLCAdZ8227G6VW3JNS57Nk/uT6piScxpFjcODmbmr8Dgs2WCT2vBN/yfoOQIrJSaUzs140GunXRj+LGINYeI3o+jQQ9/s="
        },
        "indexValueMap": {
          "bTnmqoHfmjg4gKvikdiDaQBsdBg/l05CejqiAxl3d4E=": {
            "valueMac": {
              "type": "Buffer",
              "data": "/hubjItgr2xZVXJDUV5BDrq+M57PughEmEIhyQCYA2Y="
            }
          },
          "16VoUYaPKwEitBu8aKmKnK1sxKkcIUQtQ7yEUSoyfrE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Ka+vocGKDdJnFjouGp5dpWtic6pRVXcS8NvPo8DHHhQ="
            }
          },
          "mHiowf9Sa/KHuLcd3MXxZ31u4cZgnTOW4xanNcVkn5g=": {
            "valueMac": {
              "type": "Buffer",
              "data": "T6ndKO7gCRzwHRebklMULZJBnEa/bLq32n5ON9of5sY="
            }
          }
        }
      },
      "critical_unblock_low": {
        "version": 32,
        "hash": {
          "type": "Buffer",
          "data": "MPk4pW+DNJyUSlip/2YO3jdnq3LX9i67ZoQ/mv2O4+ZXQc6P7h1ClfrleS/vq44nCRib0aSDLaK7rkkzN4p7UYZfokDtaeeSwXgUirGvurACWutkrNuZFlVbBIy2bOPRQC03HleCIMq1WftZdpAhrRr7lkEsEzTRbcvTvxpPhoQ="
        },
        "indexValueMap": {
          "BxF7xXLvSid7Sjfuap+7Qj0TvJXnrIA/XDzUS79jprY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "w9KMlgm/Px+vazVGzV7XemxsfVSs1qqHX9J5KupzjJM="
            }
          },
          "DCpNyJ2dy4Ua/CoJLz4Qz5gsnjZxVCRSm4qU0UkH2RI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "HBSYLNt2m0u4N5VK/HbXsAmLqovYQI4Eu9ZDYVRu2dE="
            }
          },
          "EThN7pSExog4eIPQ78vMWpZ0ZoOIFhYpawZ+di+cOp8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "PHtf8BMmyBIZ8jri+mNKLduU+Bzqnf0Q4/YoK31Y2GA="
            }
          },
          "EjldIeqGL3X8HDUKtsT2oSfzVuPjJMFId29PqpaAE8w=": {
            "valueMac": {
              "type": "Buffer",
              "data": "qXM2jQR4Qknj9nbsRI0OUO8pkErRxxNJWvnqZ/3MDXk="
            }
          },
          "Hkw5hQ2JZHz0LZCQ6U0C0hlX5dj9Jjq0lgYRSmWZJao=": {
            "valueMac": {
              "type": "Buffer",
              "data": "2hM7ufweNGDS4jDbbkxALn5TgMVKAeYO4jiGl3qhpcg="
            }
          },
          "HuWV7O+IccMi+6Z0AElzwgsn5xz/G+t2CNoTVxdqoXA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "VsIkBYZeTWVfNRgj8lzhQKiDozHtBPtz/tnnFfypmd4="
            }
          },
          "If+eAL0aWpm9YPXDqP7D20p6/VAHMvzPs1a4TYTkge8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "nCSAbEP6XTPKjohbb2Dj/GB3q/68zDDBq7ayG0x6ACA="
            }
          },
          "JK4pKlgTgU9aBI62aez5v1hQtSSTJz2P6IZANUMDEgM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "57HvJUb++ZVtYY9KcDgh5+fPiSvN4AX2uo4DWhuocdc="
            }
          },
          "JSnsUbYSyfkb4MJDQqjKzl+78UFUiZ26qrVIQKG3ESU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "RnFjIf5P9jRk/QJUpSvLcyAutIBNK/MdMYQSepudbeo="
            }
          },
          "JhQfoPdaBD9QKViW+o+v/QzYC8ADHZgUUxx+/IzUnbY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "iInxGuWM5ByTR2xjwPVSKxVQfo6QiguXNM/SMBnvYtU="
            }
          },
          "K5oIP/Mg5QYF4kL8nk03cWlVYbw5fmZVq/7xtghT1dc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "EHYtocXLSIbbEMyyrwneN609lmdtUBqM2ZyKWAZBUgw="
            }
          },
          "K8c/s3vdTmOgD2X2HjA0rh+U+o2lSZGXyflUmjmiFPQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "De5XyEKUGhvMRvDi0Ow1qd0fpKKNq/ziYpREMvnYjTk="
            }
          },
          "LwrvCw4vgwkiS7wLl7VnZiW+08RwfWZl+rDisC4vTwo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "5StpO3MzavTDohO0yP+bZxS93q1VHDbaRl+wXft2zIE="
            }
          },
          "L1e7+ih9E2tj9slFXBSadG+spqMpGNhqm96OXsIcl7M=": {
            "valueMac": {
              "type": "Buffer",
              "data": "7mOQCRVAAy3tsmmjpYpgTJIi5r5tQXrNb3IhpDKIAtU="
            }
          },
          "MJa/d+4+PFb+kHoZgeMdSO1fli7ydz/H2SgzPWj9hj4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "e1tWbdfZnLtq7CEeoAnl6/XTJkHI/Si1im/lBzgVmX8="
            }
          },
          "MgI33AmCDfoYaxHM5oztsqEHo7WZN82aI5VklMDQTQ8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "rNDau7pVLbF+IAvEGVDnYPRZTmP6jbyuT4CxeSAAnF8="
            }
          },
          "M134mhXH8YsZT5mXk35N5WkCCpaauowJJD0YGqxPUVE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "TVnAGY/XeJsvm221EDH4HwMG0AKQKoGreDDndvmJisU="
            }
          },
          "NndKtaQJLCjpP8bTC/U4xOfataMRYdKQmYcD07w9Z2c=": {
            "valueMac": {
              "type": "Buffer",
              "data": "nce3SZz/zdg6/Z/4orlCbrsE0G9iVYkjZI73Cl7DPT8="
            }
          },
          "N4fR7dUV5uNSGwkC9dDkyztlRlxcE8jLiJyJ5M4iHCs=": {
            "valueMac": {
              "type": "Buffer",
              "data": "UU+C4sVdhJQYdRWwTQWtr0yVM1y+9zmteBrFr1hnxbI="
            }
          },
          "OQnV0GbnAQ+6KYoFd8e+bcPwhVcGvHbyYnAn4tYweFM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "LWbu8r+LbgGLITKwpsrTlpj/8Q1VAPnOZFYffSvxsbo="
            }
          },
          "PpTZoF5NabaRNAb3KN4sonz/hGZCTfqnAoH6aI4qotI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "sHBJhFLQJ7IqgzbEW3znaNk5ADDupSsfSLVyLMpKxnM="
            }
          },
          "St48yV61fU+/Qnp16wBMMBkwxfCwtXqIDxHKNzkdcaw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "vF8A8zAaXUelhG1OMHnlUhTl3fHj8IxoXDMeQUyoBoA="
            }
          },
          "S4yIuJURfuE5PVHOkW/Zi0xjf5n4VsLZkD6yJZk88Vk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "bBacSvC3IZLKA0+2dxlltXgKTENmDdt6T+vslIEH3pg="
            }
          },
          "S+HGyml13Tuo4Zi6SmUmMLrbP39GuTpyKF/UF97/eyo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "PhfsFpzi2r9CAbZYoABx5hVkgkO/M99h4ACZq/Nw5+Y="
            }
          },
          "TItrDZXSzxSC2bpJ0lpaM7X8VJIKV/773BBiXliJ1q8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "MjF+/DQlzwTJARTfk07VYwYYV+dSWnKTFdAl8IoQPyY="
            }
          },
          "U5JhiZmz9sI5vRkjK7QUB0Lu+MDW9wdtI5NBOGDyiDI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "rQZ6Y2yLFlLBhM+9NnNYEed+U4ecL+bYz74TxAcyAAY="
            }
          },
          "Vi/bbjVJqqU0UdmhBgb4r95AoGVhRamSCAQE4diMZYg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "m6RFMHBInjjBfcT0RaGv2wnTE4p7cnTFeEaF238d0js="
            }
          },
          "XbQIoJ9QZzT/u5nPPBPPOdchGXN1qCQyUbRxHOP1opA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "/kVD7ms0S8za0il7E2yp+7TI/U/jCeYhrcaSo8925Rk="
            }
          },
          "YB/g4Z4DAo03gQX4fypyi2Uf8QmHUNvmDnX2tfGH6gc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "mu29JME4wUbEzGNht1K4Y7MTYB+f4Eh6XQRgBy8a9xA="
            }
          },
          "Yfw5qaawPxwkAoZcji3RIn0+zYjFcNhsvA1ld8BEHRw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "jsTu427sOnLg6lEEErzl9QqkL9/WvAFFshczhjb66ic="
            }
          },
          "YyellwAMv1WIYYtLIdOZpo59bqjevf6svX66HagBDz8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "J6Cr0sUy0bASfQyOyWQQNeq0RVHcaoXYkRKaYPj80wE="
            }
          },
          "bwSCtnhnOS7Lg6pIWkLZ007itQOv5tmtRQbCimGeb2Q=": {
            "valueMac": {
              "type": "Buffer",
              "data": "AtU0HAOz7+SQ3Jdle1w71iOg6I9urtAplbadoKu+KeU="
            }
          },
          "cce4kGt81bcqF+jjllvKpXDLENkpr3FbQQAXy6SszJY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "zjJ1mllFyxmAoLqwMuApVvgABZAmi8gFy04l5twX7XE="
            }
          },
          "gHWSdaiQqbVIyLep9S/bNHZlXjiRaUJnqNq5G4AO9+Q=": {
            "valueMac": {
              "type": "Buffer",
              "data": "+fWOe12VTh1fpQhyf6ry/qN7BFtyzZvrURO/D7SaTTc="
            }
          },
          "g5Yqe+bS6MPl93RzFs+JiWinCdQ36FdyCM78XaOqsCk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "NOMo6F3kkY4I1fgIDjTmanpW+uz2y+2b04lp5zGDtcw="
            }
          },
          "iUn2pNg7Gg6elQdxLPu+nKTLn+THK0LF/RTTFshZaUg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "IMupjssi8ogGPzgxC9ZWNkuxJqA4B6xgnmE+X52UDw4="
            }
          },
          "kOCu6KN7ASyvP2AAf5uXOKF3hK5GRaWvTh79dV8fCCY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "P3hcL5vA9t0FKAbPKg2tqxr3lnFJ4Z1CDhAaSu5YFUM="
            }
          },
          "ktW/G3N/afovAGwfIoAlTzGHEwVXURSCvJi1Oug7gM4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "VMBAdb24ycm2MsCxX6lfHCSSST0Udkd2WXO6J/gjkG0="
            }
          },
          "l7YcaNre/SkjL0yS0YqLKkX7ojOvE3cgFJhhsYbk3Ek=": {
            "valueMac": {
              "type": "Buffer",
              "data": "kC5OV13Oz5Gfbiyf4oHv0Ves7DUQ5mbdMQTkXbA4nqk="
            }
          },
          "mHxGhoNRJpNY248Mh5a11cPBI/0si0vVhbQWTVQKd2Q=": {
            "valueMac": {
              "type": "Buffer",
              "data": "u5AmFmBWWJjU9J5Rh8lRuaLcobGeVJPjSdFbdeMEoik="
            }
          },
          "mfwEb1yo8rpkBr7J0qXf7f8bhbMAOyfgQ7A6yJ+5Ndw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "zpMgwHztXWwe6EGFT1vlsIyvHNE8drLYtGP3uUuHnZA="
            }
          },
          "mtYd5WfNqg3gCm2ZZrcXB1/xD2QE7VORLnMuXBmLPiU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "FMeNEc2sp3ZEMQQsa/J6AUUDknzB+vBnqu0VpOkfAiw="
            }
          },
          "mus221in5HPDephkJCtPDOsGUhGShpVABqSsLaGAF4o=": {
            "valueMac": {
              "type": "Buffer",
              "data": "yQ/Xa2dei4uRR9gIn7vhiDeCyEeW2e3Nf7tUBU8C4ZA="
            }
          },
          "nGocg6XODp0omU0rJYkEtpPUyZHYsG9oT6npJIK3L4o=": {
            "valueMac": {
              "type": "Buffer",
              "data": "WOY9FLXpoayxQOO9Duj2zoPp1EtjtNm8jfevRb8C5HI="
            }
          },
          "nN39kkVyb6yB8dPolvau6N/OptEA3lg735bReWbok/M=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Y+f9RpnkkdOapdIgXskjUYjcwTCSxeVhw1+BbAW2Ix0="
            }
          },
          "o6zNvWsikLM0hCJ1L50kNQNSq3rJnNuv5SoSlLMQVI8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "jVclXxKXhIUYQPzxzQj+gYaWB3nf8oh/8z9IuSH39Zc="
            }
          },
          "qi4/YUf0ljT907LSilugqout13PHApGUl0a/EdvVah8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "aQKbsJhuMGb/2jyZ4uFcKVL9ZY/85rkp8sTIjT1IJmg="
            }
          },
          "r7UaeHUzOKkausbwER3txOHy+KKAr6jye+cTfAmsxaE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "a+FgL4RrYyKnkg4SsNnvFyaufRTeC6VxZUhEyg2ArjY="
            }
          },
          "sm/qOiy17WsdO4CWzy0boAxHABAZTbEMXJeFQPjSCTc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "vSYNI2DFsf8iRA4b2LeCn2DRZYc2XfhHplc+HAFDnHo="
            }
          },
          "tb/mOanUo80XJW40uDZ5bz8QbnUZDCm/GaQ5nWNCyN4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "KwhdyvnqKmI0JUC6ukxHdjHwDRrnQt8O2CIyVBUNFH4="
            }
          },
          "thB4KjJMCdTXymYgViBk73aPLiXU3m/bWrFlSGhlP+E=": {
            "valueMac": {
              "type": "Buffer",
              "data": "sTNhjCNXzaYUOiYB//fqjwjaywTLNVp5q276qglTx24="
            }
          },
          "uZRtU2ySzjIAuk8r2hSTPcWsVEa34HsdN43Afg29Qtw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "BTDyvQGeWha9xYlGQue6uaSEa+Vgj5FJHBX32XAudb8="
            }
          },
          "upuW5EdXRpsGdyK3/DcDIRZCkK/h0VkU5m9Sp8snhFg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "cC2UBerV+mwL7LV0XuP/XeFd5xn7S/RM+oT9B3ILgkY="
            }
          },
          "u4adnJgC0ArPS/8oE6qQguS7x6g5RjrK9bUXFBcmgao=": {
            "valueMac": {
              "type": "Buffer",
              "data": "qxvitfdzbNBqsxPVG8NIR6llKOCtTEwunxdeLMvEfTY="
            }
          },
          "x0n9+NBcKzhiLliwP2D0uMxp7lrHCMsXARfsFJQqh4E=": {
            "valueMac": {
              "type": "Buffer",
              "data": "+zlGYKMC0/uCEntb4W47pP+pOOsZWey0UvypHq6LzSw="
            }
          },
          "yGufQ4y3GWKYY4WpCgLNZQRg2ExsXlRY5iI0EMuzvZM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "sehatWPxTt6K03DtxvqIK3eEZiUGLgtfATVee6ETMSI="
            }
          },
          "yQVZsiT2kNXIYrXgEe9SJ38XFOnlfJoxCNIsNGvVnWE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "22gyyk6rc8Qgliqeq1c43jYXsAVcm0qQaHXvVVrGdRM="
            }
          },
          "ykrql1KKCW6gVzQ76iL3uLgmNt0dXW6e3FOjIeJJFSM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "aBZvoUoi9Avcucayc9o9srJOUMxv0gYVLDody8KOsbM="
            }
          },
          "z7vLcfQSI2WhEU9Do0vI0Ie4GMNi6roSefR4WiSCPb8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "o0BooaZG3XNjQFh14/YVM/POKWnIKpg7a0G5HP5aFb0="
            }
          },
          "0FdB3I1h76P3+yXYpI/76EHhtcJOBHbuaEbtuGDBwDc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "X6wzOzPBQphTnYVl8OUOoso9DKQK9KsD0jBs4Us315c="
            }
          },
          "03+swEXsKYDn9P4WuIyDfca+OpDQbsykDxtRttXS9iU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "45LIZDSjWah8cRtFqMJCv/o9F2ZrVeh3YlFeXGFl/H4="
            }
          },
          "1TrjfFKVEVCpWq1ehr3glSEO6t5WTttTwd3oMBZSnEc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "FcOaFpsCKXeDr8ohQ3LQQrHAakN9ihX0bu6vUfrzxqg="
            }
          },
          "1lJc2tsR0QjSigBMtULPe7Cr/DcCWN7/LggxkiVZ9tw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "dVU4UkmCAHO9XxVWcWLT0P5lzqluGspkgohLNxo+n3A="
            }
          },
          "2z5zR2g8yHURa3c/OR+5M4ZU6dB22RrVBrNOzh1bbA4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "oKIF0Jt8MYn9uvJNGL7Dx6Pbb3ZSqV5JBq+tXrIrU9E="
            }
          },
          "3PWAXHj0zd2/FlNX5sPpAisz2yXM8mGlOoOLNG8i07Q=": {
            "valueMac": {
              "type": "Buffer",
              "data": "wvlkCIOyZTy0mCkDMSzDPaHE8SoGUGYTBsxQR2PYxxE="
            }
          },
          "3iuDLCQf5SR+j6jyduxY8G/dl7QJiH1g/b+Z4bcosIg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Z+3E9Mi9fIEP3/Pmpo7S24W2XP9GuGSRk28PBJ9nR1I="
            }
          },
          "4evpYVyMNwf7wOGsElW7WhBwMOXMPDh71OBPNy7PBoI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "CUY26ZSqt6WKHyT5i36d/zUoejQLHIvMlXub8zgsNGI="
            }
          },
          "42C2ZBjE0InfN1s0B0udP7UCeVPIT1ymFhDdeIYtJHc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "OfNIS0phQpNNFNHmKo0dAycTcIjHH6m4BsoI6jPrLio="
            }
          },
          "7PyUpxwObDUJIh1nGUaFwqBqdeCqwMA3nDduqfzmHOo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "64Yd2JJk4ys8u3TpCic1Okn679yar+0XN1Gg84Tc6Cg="
            }
          },
          "7pPL1vzQBXziNS1Dp+7qihfvjLpuM9qincc6bb0VlQU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "BiV+/JAvyFRf5Om/6PnmCDefLziDpraYXMpryT+vhQY="
            }
          },
          "8hvvYMpipfmEU9Wjc0wdkybNoNfuijajE9rh7KsbPKk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "kPsd26moe3lR8iw95FtMXq95t9VgsFCgGnBE8WnYhlE="
            }
          },
          "+MiT9YXh8qV4+6TiiirGCh4DdJsleWPr1v9CnDQB6bQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "mvkIZeKR+g2IwSjTt5RP88EyGrOu+eyjnFXkR2g3vs4="
            }
          },
          "MzQnAgtcq9pEXjjcPFBwt9YHcn5Z/jP1nzCt3SOwAjE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "mZuz+7GTiZsO/TG/aqtK4Wu1EB2r62fWXKgpbLfyc0s="
            }
          }
        }
      },
      "regular_high": {
        "version": 59,
        "hash": {
          "type": "Buffer",
          "data": "efB8ovMF2AAWwbcJMrjBhrWhI/uyOnQfWvDJRZ7irvuFdCnTOZhpDqU7QDe2ONOSwmFz0KcENiZ3ipBGmQ/BinLgrNQOAK0xLfaneTaHF6WEG5uEFKcfJ5KdSreVMFYbR8uRkbEM+buIW2suaVZ8sthdCOVMCXpDLO5niQMjkRs="
        },
        "indexValueMap": {
          "ALsbeBATwDRQtsy8rMykoNhckImbM2xGNvs61fdbih4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "XWM6NPoW0GNA2LolHoq/Gc+NDZF23YVAf1UYR9pDdks="
            }
          },
          "AZNqajA5UdLvxG7Q/yYAo2DSZOMZv6zMetPN8PQmX2k=": {
            "valueMac": {
              "type": "Buffer",
              "data": "S/YsbTOVwbA59r1gpKRXwYjAMPYQQ8RyHOjL28ljOx8="
            }
          },
          "BCXgBDrznehI1oxZiXFMfE4NyVfsu+B30v/PTxUQNiY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ICv9kcabvBKcYiwm3u9UhtwdB8dsGWeG9Uv5eB7uFwE="
            }
          },
          "Bv1yOyuvmXWY2YeM4xhHy6R4eNma45XzIz2eSVsQZ04=": {
            "valueMac": {
              "type": "Buffer",
              "data": "G1vXNsHC3CSpOGD8/vGH2wUH8IuVs2Wjin33dYQxTh4="
            }
          },
          "CFtffUh+u75k+A+dVcgYloLlLl4TjBNtyElV94Uhjr8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "+0wmdF/hd7vtNnt0liJkdhSXjUO2G66FZ/orhKVSMLw="
            }
          },
          "CKx/fkGmwBZ+F8U4yi4b34xDgvnETQfpHwVTlWHe+Mw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "jp6OhppSwLBt9c6XABevB711B7x9I0s9t5IFm35mh3I="
            }
          },
          "CiS77eCx7wbgxbBmD+NAI3wrOtGfzy2bD42PN+p4arg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Tv1Pvh3UJ9iinYv/uSglQadIuaxA9Gg1ZhGV3oo+2Sk="
            }
          },
          "Ct++/xDcwEbG8KHw8lfaWo6f0H34O5PGHb5dG2+d5Xc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "a4lvgRNjWhQsXAdD5z+jw/g77kwLAARZHDWRNIv2hF8="
            }
          },
          "DbYgLHXep4anxW5FZP2zzw09dAZVEfPvGpwNc5Nw3CY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "p4bQyDLJCY6hCh+8NnXB0CTRJ0lMl1L+DtNzz3GWtcY="
            }
          },
          "EQUWkYvNsN10inZDOzrDVrGlJjqAS7b3bIrnotISY0s=": {
            "valueMac": {
              "type": "Buffer",
              "data": "+O0kNDRppQqT4ZzxTYaCk7tVIfq5nm88DAvV8K7ptfQ="
            }
          },
          "EhrSl4/J3OxTMbu407Sssbq2d+qbWuN9iHVtAxGtSgE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "DwKbxwdkbbOy+z7yngu2tJvcdG+TwY2r5gzTILAkwOA="
            }
          },
          "E7aqly5BKSI0/K6g414GUdg+dzSIWeIjW/v3j8RN5Z0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "b2p2WQvGJKoySySXJhPUw1EMsEmu5J7a0yN0QW0nfvo="
            }
          },
          "GR8xhhDDG/O/SV8tJ8A9ESgSj7DhUCtjWGKf6K089f0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "gQAwQ0FGOpcTYn9Dbnq9LO/felsTG9hC8ZWxMwgCumc="
            }
          },
          "GZBfPn9IcunA21LKKfjrzIihr0x5h/NRluY4587GF34=": {
            "valueMac": {
              "type": "Buffer",
              "data": "HpNBm2wNb09n4LDYimWsRtpl5BEF/bX+20mVowzOzoY="
            }
          },
          "G1zTlo8EopCgW3FkrIVGfPIf09VTkNRpayrEXUscZ0o=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Ip1s43wP3Ap5jU/NMK7mh0o+GDW7mp/UBuS9yaP+zwo="
            }
          },
          "IZ3HlA1hNmi22N3y+qL07b821Lq8vlSLMIa1LW/6IA4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "xJZT1fpIAtqMfFSWV/2P/yJW4X9q/hrrvyTqopmCuFM="
            }
          },
          "I6PgIuWYFYN9QYf0eWgzwMvLZvfs3ztR8HU8fsFvkYQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Vx0KMtnceq9HoVm7LtCkBlT/W4B3cTkOrxwouy+yYhY="
            }
          },
          "I7aP80BsWLVbrD7+b32CHAjex+r/v3vh+U2zSsxkKyg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "w04JnVrTA+hl93td8I+Et//RTLulIbw2hX/jjY7Ys5M="
            }
          },
          "KyKN7nrEQTvbaijPh6gNKvUyRwSHtCNtHd096S5xqDY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "8vO4Re+bdzwFIZZVjBjiVbv953WSQNFwT8wBwjF4Pa0="
            }
          },
          "LBywFHx5qIrlQ9KkCkvFEYfbGj7p0nXWhmRn3Ld05vU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "4C/Hh+YY0O5xkA0qcQkF7xMCuL5sUWkyzKWJw2e6fkI="
            }
          },
          "LaIEr0RSPCa7ZcVFTApj19LcS7KKKJ4HlGN4eZQW7zY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "w3Ebbb8+s63k11U0PwZk6RZXP/GLuu6p88/K6/TIo3Q="
            }
          },
          "LeermLHUCYKTqGjz4jlvpr+piv5kDstLYEiYBWjsbjE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "OE2A1x6m9WqYaCfn0P5nixIVY6NUDAwphDmXGbBg+t8="
            }
          },
          "L6ofCOW5i9gmvd/cFeqetpM3N4Zs6OJcvVPA8ouq/Zg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "OHhch2Q0w9QdYVXB15OCjzHy+6kliDtnTgLD848KaAk="
            }
          },
          "MEkcCds/v7qMdJCiO9F/gGIlt4ORaEtOw3Y3vfaoPPk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ciig1111xgg2a0Cm/E6okvNuwK6zF4Ya3cD3+urt+o0="
            }
          },
          "Mgo7OqesHkPr4ife4IREPhJ1uOv4Oa7ov4bIlNw8EoQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "aph6VQD4Qcx6CFU6a5tR197Pz1LMDAfag6Exwa0mm7g="
            }
          },
          "NaLPIoPa7E8c9TLHgz7vJBUGQOtgTeBM8IhkJFFB0Eo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "SttdVFp/ZRp1BYRFV/TDsiIlRddIsq3eG6+uNVz+PRk="
            }
          },
          "Nni7ND9qOgQuO0achuwyZtFQYkfW2AeqC8QMWy4P6Bg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "AifEybiUry0uyFanuNnoPpYtWfotJ1jQBsBM+Ca4pyw="
            }
          },
          "N6uq7A5Xi7HrNdsaLtIqRUMW64TxL5YReo9ZOcicp+Y=": {
            "valueMac": {
              "type": "Buffer",
              "data": "PuCGE9T4zL4q7BykwIggYVR37UaWQCpEEWmq+uTs5Mg="
            }
          },
          "O26Hi840/J1WBT0SH4RoF2hkzParZLbEO7G+4AnMot8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ic1d7Ih36P5i3YgyF93Vh6X3ll+01tfpFJm0hDSbLfY="
            }
          },
          "PUfEAo1pX9Yk8xqknbB+M6w1zyEtZkNcfD2UgjIsGlo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "CcXQlGVwxTcl2z3VqJkoRIVY2QnwC4n8udnwdzZ1ZJs="
            }
          },
          "P23zuWMeE82Tj8rBaG8YnZSSMVz8jPYUUeeWl3LzPUE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "tilTFhmA9VtIE4XghApC11URhYoDbmDmkYobSHxlVVA="
            }
          },
          "QwneEvNt3S1LuazMaOGY2u2fGbMIR1mv4BgGKGvk6mk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "dGab1xQIg7ZRaXcO+6rgpGXj0ZdJua/M5u+/ifRviZo="
            }
          },
          "ReLFJO9Tusq4zfUhDpryLJH8d83ra8dMnYl5ZuTHhAU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "lNy2D636X/YYz5/u9yjDfffxEflxikX3QKcFGnasBUc="
            }
          },
          "SiSqiHjJgTTxGObzaCV/VN55/j1On//nkw0XrJH9kYg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "dIH64otdaNcvRN15oOFgOiOaY7PIuKRekQahydVP7NU="
            }
          },
          "Suu7zVM6gz1ATiJNnJzaQqwbt7UJ0LMZ+XxNDTUek6Q=": {
            "valueMac": {
              "type": "Buffer",
              "data": "acDJFL9JStOTL1bXIIAzGKuxyNFkhH+HS6SbClEV0vA="
            }
          },
          "SvDj60i8jmwrHqFAJYxjP2/7p+Y3r43f054usuNdCfE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "hdz9ZVQTokdd9SgMyAQHBO9VwHA+1Xfu9vJmI8Cy2pU="
            }
          },
          "TdXQ2xumec96lfrJ8ZT9fysWPNnuyFQeqkSxsm1b5Co=": {
            "valueMac": {
              "type": "Buffer",
              "data": "dKt/qt6boVYkpfqNKdjyTBlz6YJM0SpPDNI/e+EiQKE="
            }
          },
          "Tvh9LfkLFyjJSXq8qJCCYI5GInXj24YJZ5hw0TKZJvA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "yE6B3bUAGfT7EBEF7yFW80ZFee6s4HvRtyuMd6T1gCk="
            }
          },
          "UUxX7MKDZ6CLGWIaSxHZucX7i3rar+EsT7kJKox/whE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ufQ/aR5ZZHkVmVmxT/ssuqNAelRF8oWCByEegMn0pZg="
            }
          },
          "UiNZEhp1wnJKpDjoi/g+fEVG2IvZA7RYnwAttjGZM/I=": {
            "valueMac": {
              "type": "Buffer",
              "data": "5Jang9CLo1qMZT2JMCUpa7JiuA9s7gXFRDQ1eJLyOe0="
            }
          },
          "Vie8pZwJk18cG2iPd7io3qWOgINxGkwY+lJKIyrhuLg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "12TiZafFpsUALrurPCa0BeLpgqFxNAgJolHUx8sxgbY="
            }
          },
          "V4FySYsE3SMYOBlGYR2vLCCpV+OX8TNKxopMSEyrCeE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "r9Sec/uBL9S1ewgLeLnXchLprPA7tZZlwHy8JKlUYTQ="
            }
          },
          "WmIS0Y3exRBBjXdvTs2Ci9LRClEjZHnDadRHP5T+K3o=": {
            "valueMac": {
              "type": "Buffer",
              "data": "oqGFU9ckMUkJ/G7Flg2aLYZvJYqbI/uMR0r6o4s0ZbY="
            }
          },
          "YOd5sITSETatAKTbxwUB9pfvhtl0lAvDZvVRuICv88k=": {
            "valueMac": {
              "type": "Buffer",
              "data": "wPvtnE6Bv05M5smSXnynYJAwmT/wvZweUsjoMT4kW/g="
            }
          },
          "YZslVT79xmCLBV9sFVObB3dasyDGB+5v1gX3SMjVbCs=": {
            "valueMac": {
              "type": "Buffer",
              "data": "+6zC1DTiFNwmFFZCdwnzPs3Ut2d5vpP+ktZquOuDCKo="
            }
          },
          "YmW6/N6pPY5Cldp8ZhdLIswbdEVnp+O10LPeDZpNjZA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "SsONakr+hU5o4nxIqySEiNd/Pe/p8XVsHXRJ8s9oAzc="
            }
          },
          "Y3VFy4sey6TwDFCjGpojKAjFDfpCfRyYF/GCEZd0JOU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "2Mt9BqVrLi3VQSCUmaiuQ6Gl5tB0OaCErTdbCsDAt1U="
            }
          },
          "Z3jdRmgSMKjUQKTPJf0dL54wHmbRa4ORqz/qRvYBNPA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "/TTgkj3U5BUKRcL6An7bKnvma8YjK82raaP5LJ0MUjU="
            }
          },
          "abu3UbE5N0WHhqJDZcAv4lr7Dck8XRQrqTXsS7DpJNo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "VrdyI/pPNLCJJxZTm1wD3i5r9aWEY+PnqO8g1vUkIXE="
            }
          },
          "a70dE3lE90ROJwgvzSfrQ7eVfY8dV0dzumKK4DwgjxA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "FweJL6ZAkZLDp48jREFv5q4r55DxVLq53GReTlH5ecc="
            }
          },
          "bMcAhu65UTrchtmbagyKY6BKVEeAS6OXJcAphtUzuz8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "WTexmUs+BNQU8V2OmB+92GSUG6Ftt5EGum7RW0vQRhk="
            }
          },
          "cO/ppDFb5JUMt1YkYSl/MaVZp/JLhByT+gTUxbKwcPA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "toOhHMpf+wHsPfgYEK5jnqfk23isYJ5UEvJ2CX7cv5I="
            }
          },
          "c5C7YNgVr9oZQFrhGATlIfUY00tB7tIWvmlqpNzuAzQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "QY6Vgz/0U9V8D5I0ozy+D5kr5J4ZsKUHZnQC5iwK7lI="
            }
          },
          "dC1kJJgiWUSLMp3Kw1C9GNnNTqgQFo/GeUVGu+oQLW8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "lQgPWWHKlXLNRjxhN1HTD1lFkZmDg44wyvaeWeGk7Vg="
            }
          },
          "evyCsFylGY+isIoZalK6ld42+QtXEyJHL9Hv1qXG8vE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "hsPGgNgwKG8MeUSWaJjoktuLG1aokLiU2jLFJv6DYBU="
            }
          },
          "fOo1Ivo5TWfmb2m0ygYQEe+7B28qY18sIrokCxRv0VQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "uwLJgCLBavz3s7OnSAsJlD9pMJtdGCTbtDr/D6Hd3j8="
            }
          },
          "fS/1C8VqpZnWtuMxbXtQ1EFv5V55ynIM0y3HODusT/o=": {
            "valueMac": {
              "type": "Buffer",
              "data": "NFnXEvB4cZ59Wq1yeDl1bWmoihooNFfeHwLmgaS2pao="
            }
          },
          "fiQw4dfW9NfsF34yPFjqK0wDaojCZOARu8Lt5KkK6ug=": {
            "valueMac": {
              "type": "Buffer",
              "data": "dvQ28LjamQ/KPfRxvHu5LMpab6kNRN0O34Qe3rUF27g="
            }
          },
          "gQQpiDZmil3OzQQSJM4KyBG+84F1ejZPjBaxB9FhnQc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "a2NzDWyYLeklGdwMvdLHz87qp2PTKUqzk8hM1IzvG6Y="
            }
          },
          "hAbEEKJzK7pIqDka46tb4x4Ga8QEywJcXQ94gtR1LYk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "LypsB8pUse+szr8BENYzBWqDHU4JbV9A9tyx4mcE/dI="
            }
          },
          "hart6gZ/yCGJDC05T8l9UuRDi5k38SJ5IRHOpR4w3ao=": {
            "valueMac": {
              "type": "Buffer",
              "data": "cc8Pyw5WoVVMVFL3iimdtdWb7zYB7CvKnI2DwMKnuSw="
            }
          },
          "iB9b7WDktdJK/rG4vDqzZibrrU4ZzyaClEvgkF2LQ5A=": {
            "valueMac": {
              "type": "Buffer",
              "data": "wiITcR/Zw67zH2MrhefNRzb1CC0FTE9mMWmzJNOc3ys="
            }
          },
          "iuuqIiET1vEGOoe1SemToE9/LKJZGlEoCcD6y0RUK0M=": {
            "valueMac": {
              "type": "Buffer",
              "data": "nInhZi2zSQGzU+iCpIdIawYJGbpirWF1TEftbN21Rfw="
            }
          },
          "i1XL/Rw9FVfcZJKgVF3c54TyqOI41uRaLIVRi23NM8I=": {
            "valueMac": {
              "type": "Buffer",
              "data": "vP2BTmtfMXOhpnS4Dsk7gac9iNgE6At7xvVMnA9pHPc="
            }
          },
          "jHzlTv2/iWz1/QJ7j4MMSDtdKvTO/Krymd83ycz7UNM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Eq+afgHyN15iLtSQz+66gcKs3/SWDhkI1LX91CWI88I="
            }
          },
          "jI5kwhJST49NtspmEeiH0DxpxXt4OB8Q46DUtP9QugQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "7FqPHDUcV7SYIICKXSZFpk3/u6OQGS0zj1w2DPv88DM="
            }
          },
          "jX02Z+/Fq2EvNAYXKoZtNEux2/gfzySkF/lA5qn0O94=": {
            "valueMac": {
              "type": "Buffer",
              "data": "YpXBNpNvUPV1F43I3SWzxOiN+yrZmWgKJ8Il54xR7Xs="
            }
          },
          "kTA9MSjH8VjvNZW1rQ4s+4LfvI2RJznHjEbpsHumPJQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "PWAe5IYh8XoohE3PhP6NveOO+swA5h3QR0IkMKcLepg="
            }
          },
          "kXjvWBjd0k/4vpkAkvUny50csGENjWcY1mMkJV9N9iY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "IO1fu4psWonJG+laObIJ76+gpJuRK48ViD/ahkEhpQ4="
            }
          },
          "kbIPoRe8bSD96tHn5vGwZQQzG+Dyl98A265S/bc2FWI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "p2qbfkLOMsaTLprSYrRYCdFE5fwfTKV61zPOcGazIyk="
            }
          },
          "kduAJYScgcFuB+5BQ0a4k2D7Mq5BIw6MwDbyKIwLHXE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "myxma4VH/m/u8+DznHYlwXLXz+SVg/Bl4bfTc0bXgn4="
            }
          },
          "kd6KfZrmAlg2poLZoS0eeWOyo0MXIhyqNTpQOmkgHmA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "rH1iLr9DVLF0J2wbVUwowRFcIJdemwksmfNaTjyupls="
            }
          },
          "kfyey/EPydpd+qGj7NIQStd0W36qNZWFx/E9yE7KWIo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "kVxGDT07vOUXc9Ka4LV6OLe2vrL7vxGflHwry7hVQSg="
            }
          },
          "klRVpLmzX1HZW4EGX3dMA3f6rq6FWhx3R4t6kkfHHb0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "dkteiyfFVMqb0AT7Ajt/rObkKcCPcFHKc32yqPWqFN8="
            }
          },
          "lnQjZ1BIxm4NJGMgG9S08GlCYHCnnaCI0Cj/UqbV03I=": {
            "valueMac": {
              "type": "Buffer",
              "data": "K4T2XVIGCmlCOEVvZIKeW+bBK2/fDKkScsotzt3mNlc="
            }
          },
          "mIb4ndDai2HIDNMGVs17RQNMAr6kxLaXliKcyeGX5Tg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "OFwJxLEnj7Q93aMP1BbIujiaE6KwYBKWANvpK3YEOHw="
            }
          },
          "mgP60yB7h5B8a72MpuK67G3tcd+wi9FEoaKKZieRF3M=": {
            "valueMac": {
              "type": "Buffer",
              "data": "zcbm99/VOG6+JLkSg0/jHEm5xLYw8uYw5QjW8FS4ws0="
            }
          },
          "nYJK8bng7SQje3jMkr14Jl+pnlUG5Smh0IMBek5UW4s=": {
            "valueMac": {
              "type": "Buffer",
              "data": "k+IK63gEeGcH5Jz7QIBQeLWwuD6gZ6R6113GUsoeADY="
            }
          },
          "nfG0cnuQ1PvnE321xdsvS8MjGJ7YYoQyvm636ETTaxA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "JRKwWj0KcqeHRQp1jxmUJJHIrXjGzM2ROZ9XRkoCHOA="
            }
          },
          "oTIyhLjcVdxYU1yovO6Xz98GXLAJ381ev/IrPPkLW/w=": {
            "valueMac": {
              "type": "Buffer",
              "data": "uWmJqkKYqy1qoPLOxA0WsMh5TX+9QcIy5Z8zDcgEr58="
            }
          },
          "orAWu3AaBvIed9xzXz0wCMSFQWfycpmQWv6l5H+bXco=": {
            "valueMac": {
              "type": "Buffer",
              "data": "8mVdtwrV6qcwyFw8kQiq2QFnLWQEW62k0ujhZrBsJFA="
            }
          },
          "pIFY8bb4I7j6ckhsOcY3SnMGFBgx/Ig/f2p2g1t5wh4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "5yTG7pLA5kwvd2xLcycFBuCv0ZQkGUV9EuQGNTbeJas="
            }
          },
          "pbcQBII/dQHFSouhWOtNuBVekn9TiiE39nmyiWquSlU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "aZu0xGE6KexIjJq2MFn3cLdhD271arX+iaE2qFhbCgE="
            }
          },
          "poxxibJZCDMkYP/XI9ra2YQZI5B1Q8hUtQ7BAeupl5U=": {
            "valueMac": {
              "type": "Buffer",
              "data": "f0DG6IYAKD9YMu7++7NGr/qmLJM2eV7vXvlOBkFmgSo="
            }
          },
          "prXeqghf83+3BslMfm9w4fRdhIFYEWFa0nk3OmEqY8Y=": {
            "valueMac": {
              "type": "Buffer",
              "data": "79/fNXYiUdikWl6KsSCAc+i6ln8EiAoq8bH4iyMV0vw="
            }
          },
          "p7L3HR18TGDDeiyP8PVNNe4L0nW3HsXQ6vle2lwmP+0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "40I6B+BiUk4fZxVzlQsbvwYqmi0JyVEZUwKTX5Ea1bo="
            }
          },
          "qkKkFRQZtrLYDgAjOsiFU2Cbl/sYXczn6DEaUvEnkgo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "NZX78trxKsljsDFnWzv9La+NMzK4CuADffXuMkxG8Cs="
            }
          },
          "rSzVB0/4+M0V19hiOqRwJCGwxAX7/rqd2VjUdv/BaHE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "eqar5dj6opxBDWWhklXCYG9L/8rXdfTMuh/WkerrR+0="
            }
          },
          "rTUPqsp2j+tYgzoFXcGBGnz0rZpeKj5SbWQMDxBHITY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "5DvAgwxQ8P+DwItIh1K0eQbHEduc+AEptq9ql+JE5PY="
            }
          },
          "s2tWP9QMX9kmR3+bHUpZYpmmTU62A55b8E/aV+unUT0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "jhLPEhKjOxHSk1CxGlskoj5n7dabTkwv048uJC0484M="
            }
          },
          "s9nm74CFsuoX860UBf49N4HDIg6RGDUC3iNoexZk3xY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "GQrjxK+TnyizwE0BM0Hq54dyZurCEFE4X6FrhZbB4XE="
            }
          },
          "tnWiJAMpj0Fc5UkJDbVA0LelfdDc9KUab7bnBbVqfhM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "hXg9jVlPaMussTJMDCmOSlJMPcLdNyfPr1Kxd+y7Thc="
            }
          },
          "uGB7+c4ZtF3ARd0cjCoGHfguUw5z1nGLGfrLr6lCwiw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "VN8DB3+INFGvLYcIn+KQuDFsIpVxcvTv1pdXpRPQY98="
            }
          },
          "ug9lOdeWzDDf5thFOzPTWm3i1OZ9N9PozfxTjN40leE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "AXsA1097JmtkCOuoUUvq3iq1LQejBTE10PnoMJCehIY="
            }
          },
          "u/7DhxZRJuInfc+l81oEyuT94GiuLgQJchdRz+FXB74=": {
            "valueMac": {
              "type": "Buffer",
              "data": "eHNi/WrOUj5ZGfuwra7Zx7Qg7wZbux7L5SathRcteSg="
            }
          },
          "wXPoOa57fuEVbXyr4OE7WDXo+I7PkB6eAIGEjIC7NFU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "rE4bm3KV1ati/7FDpgd9yH9ZaoGUSoSlRrDWZY/6xyE="
            }
          },
          "xiiA6gk77KcDeY/2yNv7Guh2PEXXyd+99VyDUvhZtfg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ks5lMtUN7q4er8ZR5KZEnTNrW83KNurngu4u6lalgTU="
            }
          },
          "ymIxzPsY09ZEVPFLxRdO7HFy78JJ2XMaN406IBzbaqQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ZP36r5x0JtbOqcL4Da+h+XVH9JFKOpDxM0cGaVU5HRA="
            }
          },
          "zl50rI8L8MIonkb7D8JpXIjhgAPVBYl6DuwhG7B6toc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "1wpOAmmTcOWK8cVzY6X6BmZhgT80p2+wvaYiiMZ/OM0="
            }
          },
          "zyfiJ/Gl8kyK9ooJQJYfcYxG1jZAuFYFACAl/HUMua8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Lp4s9P/MXaZtaM12tRYxjcjBgddbWyfcl+4uwMPJyVA="
            }
          },
          "1olbg6ZZpi1k8Ei8NcJLCfFCOnloR1mV56jTsWNW8AE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "fX92rAdUpMBFC3nOMxTKgvRTWjLZJc3VFPNmrwHHKGU="
            }
          },
          "3YgfHx6FDZr6LHtcZFaZsKa3Q+zK18AwptE4pUwZ+54=": {
            "valueMac": {
              "type": "Buffer",
              "data": "pt8VwFA6udbQgNgBL6bDlG59XtdoVQOiyaWEE6dz+mA="
            }
          },
          "3Y/Q0JqtfDKD+2ffxdvGMHuZi/fl43y0hVvw2nT6yBc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "obMn62F6O91rd1RNItaSoxv/+e6y5y8uIWnrOnwLuPM="
            }
          },
          "4AIJznOTrJq7kr8vCxloa9IYaD0nciKhWQy3c10IwDY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "f8S4UpWLx/eyjt4ZKsarGWYzNy6j83gq98E2JlH/7Bc="
            }
          },
          "5o30rW/YmYd1VEXLkTFnLos6YzVfWq/iLOsnzdM1n0I=": {
            "valueMac": {
              "type": "Buffer",
              "data": "BPxseJLEWXfTDDibpPosI47KcKXDilStCWZBwwdHwZU="
            }
          },
          "5v0UDDzdnxycjkpsa3YZXJGHjTBL84PgDXX1lVYwZcI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "DqKgJ2+zYu/D1qsVueffuGlYlQWbGPezb+VLTvmhYNA="
            }
          },
          "6Rxuy8hjwIRQS0JZ/n86WsTVUykWibTtWh9m/UCh7uE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "byF5cNep7ShD0aj1fi5wFy9wwcShcMnfRD42qn3buAk="
            }
          },
          "6RyHdQSQz0JRMyqQw+sGtEhc2Q6AbKwg40YVBJmkLXM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "gRzVA0IzagCx0WyUGmYs/XI/HVTJVUc/nVItRbS0nFk="
            }
          },
          "6pVsOH4BfcGB0O34yhKpEL5YrvVjxs5f4Wu70XOInP0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "TOMcVqXSrFYypS4w9wY7HX8k3FYhs82ClqSmFNzECXg="
            }
          },
          "7XdqOBEX+hQSuRktgFiLk9AxqBYjjR71BvbgV+nD2BE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "R5YkR/IQKKPj4FxKaO3m6X2ojYqj4hoa/QqtkvTegTw="
            }
          },
          "7b3rJimLh00QTyhs4ow5LWA3Nt+Hk3C4g6kgYvtUzOI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Fam8QHnUENWoYwAWRvIUGURxGLCQo6Hni/8Qm1V/nzM="
            }
          },
          "8s+RlELaeLezABnTOyzars+/0ViqMj3+rQqWEvIale0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "KzCphBBLNxXVphJFHbqn+C5ScRbdabZFnIm+VEONLA4="
            }
          },
          "8uuWM28XwCApGMnX5ekS1X4Wrl6HW9B7hpi79h2NeBU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "m+cHQijTcQcJDsaUDphcGq7ScBuyedyANHaINYpkkNg="
            }
          },
          "9fjHrwVB1zRprj636M5pO0NQeiuE7laehWfQvmIP7QA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "TQ4BN2mYBvKW6gY5IDGqMSqFDdEK+gx9MJ0usHIL0Cw="
            }
          },
          "+1g5ozY/8rTKpCNNl3A4+RDdWyxrk1PJDrl7cPeYmRQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "rKJ8Xcv69IMo+ziZvsuAtscpCqYDGMXnWxBJCPUQssk="
            }
          },
          "/BT6DBWzg14QOA/QTbU/j9Wb2w4hZToVOLnRPkj6ic4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "CSh6fe8UbV7l/yJ8aEQ22Bm7jMKS/zpm4p+IGhUSDbg="
            }
          },
          "/IBaenbJ+rjtFZoiTrCEo5CpTFEomOyhALEWZVLHKKE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "UHPm9VmHM6b9DLvltJ6rUrIAXpIkT9jwFs4vfuR7sd8="
            }
          },
          "/htONwqzFUyB5yktb4DXg44XCGRPRQ13aeOGLuGNpXY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "+/TccGubXdce9c3CE6OeT9BqhMoH568Lyu75oUw9T7A="
            }
          },
          "/uKoQ0PTHOsUIM+n0nqnuoKLkQ6a06WbyA/6QTPxy3s=": {
            "valueMac": {
              "type": "Buffer",
              "data": "hMF74iIFWxlURS5haoISVz0G+M9JAbsHcnRWqhWQWYQ="
            }
          },
          "jd3XM0OLrzAuWn61KdOpJKTQcY3FZlnDxVVRwua1NHI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "N/tJv0m5onsNIhqai60w+Ka2gdcRITbEQnQH/MhhEjI="
            }
          },
          "CF+sxgPPo1G5ouiSiZvXgLMh3NObMv+VFwZx2/fv87U=": {
            "valueMac": {
              "type": "Buffer",
              "data": "i2KCNpGkZleUPM/5b+HmUFJG3Is+Kz9uUo6B3ovUCLM="
            }
          },
          "gCrZdq2FIHFT2W+GsOpJirtW16lIf+50erygAj13FTc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "FUC+RzjbOw671gziWbCS5rPRTOXU/OCwxlg9o4+VKy8="
            }
          },
          "h8akwSB9plkXRmbQXI/s91qnvvU3cGpmk7IlZdjPcFU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "RrcAXInar7dKEPbNgLfWDl0WabtAvxzmXp/M9/3++Ns="
            }
          },
          "k+4nVeXpqJfRIw3MaSfzwz4UqRgKN/uhSnp0ho99tp4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "tBhoJm7tWaY1WjMfNVhpP7o0+dIJkHeLx2rwsMNu6cQ="
            }
          },
          "XHsM9PaP0mJfAIj07wODNyYflp4y2Hm1896pKoF7myY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "MkVh5ghdT+2+iQwDpqhGk83HXCcuQo8XltgIA1HrWHE="
            }
          },
          "cdjNwP/FnAAaYd7ZE7ebg3rdMSQfOSlBW9j1MKqch8g=": {
            "valueMac": {
              "type": "Buffer",
              "data": "/1BEArZdk8h73VekmPl3YtAixW2BvO2eMaZXl1xatFE="
            }
          },
          "KfIDlWrwx88L0Y6DAmXxEjz4wd1PNonPAqsi4qUEA8E=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ZrukucIOA+juR4w/rAZnWb0jiThP5UMwdoqrcAVPWyQ="
            }
          },
          "W483MW26w0H1oFvCfmM9UMCyfx+6m8WVTWxCIzp1D+s=": {
            "valueMac": {
              "type": "Buffer",
              "data": "/5/yELi4ttwHq6RUDFjtXXA7prfgjbXFzX1xwIqfxHo="
            }
          },
          "KRbFLLhB0douFvYiCboriBRwVJBQCHPK7Q4PLrAPXWI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "3Fhaz1vd10jHWAfYZdSOoZG2PMWx6wCiaoDWQZmK+J0="
            }
          },
          "rF8RFw0yBJmE4GLbU9GLNinuQOvZabcNFBXi0oMH388=": {
            "valueMac": {
              "type": "Buffer",
              "data": "3zYVhQRXGF+1/tYnZMKu9jL+8OGL6QgvQYhLpwBnwO4="
            }
          },
          "qNj+wJGCnpgd0QjDClnivX5O29hg4KDxnSucVtdkOgM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Msb+rc/lEMcWKRN6q2hdYY2rezGb6jsGtYPYQSyJu1Q="
            }
          },
          "peJ6lqQttJVKbWYQt6d/h+oH/6GtfPX+6NQBpavedv0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "NtsmBW71cO/SsY23dItm21w0A28C2Twxvl2KGGTIlj8="
            }
          },
          "J/OOmJLtVNE8FU83bI32+FiFg7RVma42TNYry3a9Lgk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "j9Nl+SmlgoxSdDFvpG7zIRSBVD2dBqYi6Ublb2jtpKg="
            }
          },
          "E1flHym3oBa4FNHaUks3QRSNwV9PjGDM3GpEOI24vpg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "f+nm3IN0rdAXs17Txd83pKM+X3z08Utm24d51ChA2Dk="
            }
          },
          "9WxaTKDsUUA5NQB5+ma/jH8NCoMGpWkVmooeFJiRJ6M=": {
            "valueMac": {
              "type": "Buffer",
              "data": "v4GCiYCtV4t4+9r9kFWty+oJoUyIGXpjct2IORQTkQY="
            }
          },
          "aL+JzKr8Zvpi14PSc1SWx9+46l0rHdjyo6SpG2HTL/c=": {
            "valueMac": {
              "type": "Buffer",
              "data": "seemzATLYqUfBQIuB2hFDpt/C1cfda5FrLatB20NdeY="
            }
          },
          "/VCWIzThrL0YiQP3ZHF9WnypLwXwwxgJXv+I8PWy3Ik=": {
            "valueMac": {
              "type": "Buffer",
              "data": "y/Ly5jUe0EkorTBFtmLTsz6W4xG9dwrk7VSwhR31mqM="
            }
          },
          "e92WMolE7O7UUib+8v2/wv0c7D8YJMONzHd/3BVgyak=": {
            "valueMac": {
              "type": "Buffer",
              "data": "g+vUwEk1xeF8vWNuxyfzyO1cO1/398wfaiAONJ8tzmE="
            }
          },
          "O+/tWNlLaICmLkmdlTad+mk2lAhhW5WlHhKqcoofqIs=": {
            "valueMac": {
              "type": "Buffer",
              "data": "UvQvu7J0Aw3hXTDpNNpovhEeRln+MS6oMo36Yh70zpM="
            }
          },
          "M2xChYk4XgnrZKJJAYI8kd0KlsKHE7VTCAOM5n1g31E=": {
            "valueMac": {
              "type": "Buffer",
              "data": "oyYMRg3FmdGZkV7QM+YqIv0UkQCyQeBENQXPYK/TwDg="
            }
          },
          "4PmxcklfV5rdtxxtK7g1xWFwvjiWbCMAX+vtebYzt58=": {
            "valueMac": {
              "type": "Buffer",
              "data": "lBPt0hOTz40mGyISKAsgH/ImCW/8SdzgI3wOUi+tNak="
            }
          },
          "5oC+LAP6KBnUrRtTKHNS3FatcvXjgSdHykkR8MUUXws=": {
            "valueMac": {
              "type": "Buffer",
              "data": "tkAkFaGg49FKmiKAGmw+t7EYWFHRA4jXj4eLXFIWHk0="
            }
          },
          "3wWDU4Ivw1vWVflZRkeEfKJDxSlxGKUsUXeE6YPldIQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "sFJSNy02sSgxbAEa3MUOwdJQgobmhIBOuszyFxjATbY="
            }
          },
          "mssZiNpIR4ThJhlKsZ9ojFzDhIqvdHT4+2yh9k7uwYU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "F1bnJ/qbgKkCz09i+Q/GcLRn4NtNCrMDViop9iJS9No="
            }
          },
          "ZzESY9acQ0eHQoVUZ8yXco0B+RdEdjCvH5tV6baxpL4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "zOv8lev17yY3+o/0WBab2I1WK6dh82Pl8RXmZUTHomk="
            }
          },
          "/cayNjH+cHZF2sh3Em6tzQfMQ47kmk3XRitdtar5F3k=": {
            "valueMac": {
              "type": "Buffer",
              "data": "/u4njCpbr6u35bf0luca+tZrBSV6HxClFazPN8REnQw="
            }
          },
          "UyLfuDPZfx6KGFYuzuFuIAO4A6R5yZMCdUPRzqnN668=": {
            "valueMac": {
              "type": "Buffer",
              "data": "i+gLAR79hMS/0HZIgJdAiQ49xbyyrMhuap6D2FNGZ+Q="
            }
          },
          "UEgH3fi/Y8wcTld+p9sOWbI4tE6HRlcB4UQaL69JYTU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Vmp6OCN/qLwF5D4VJq2ehX3NqGqInKwItewRJxw0Z5c="
            }
          },
          "wbWHvblXXLm3Yhcx2hhfbTOQiL+/hCbeQvDmDtiH5rM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "M/WommHdW7bfbv8os9gdQkJXaZa4eh2JS6RnYydImS4="
            }
          },
          "V2YlQ7zuKBfxsYpe4monv1RTKGe4t3T1Kq4WdmCUhZ8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "fohFIPgN3Mh54l0tX0SZiP58imdsm9oMrjngcyPNixw="
            }
          },
          "sNh+OZxGHfmr5bxIGxrgMbY6wgMlIhWUShAXmJj16xY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "UexRMoplKNNxwyHGpdPPsX9uRYGfnA7AEhhjazIhPlc="
            }
          },
          "4zBFqOglG8uxnG8xQlsVUNjajNe+5sl603vCB9MXgfA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "LCI2zG/tVcnGx4MuU027y4VsuRK/gWpn5LLiJ04O8Ao="
            }
          },
          "mTChAM7duBqiIwhopaJvXTRLterO1drHhnWuSP+CC1A=": {
            "valueMac": {
              "type": "Buffer",
              "data": "08+18eA2bPbC8WIue9ECm8pZexZuJNbkmRNRlj4SvoM="
            }
          },
          "39u+sfSpXYbOh4glYiapGx3LcGb8pi4mXF1U3N3Neo8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "OJA6801IhjoG+lxysBNVmes6/8HmVjdN91azX+O8ue0="
            }
          },
          "xbBjDynlJ2QM+UkGr3da+a3CcEOtKwtLblxpKd8/Tpo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "J+hBYxm3LZcrquwTF63KulsL+da7G2uy/7LTnYwt8oA="
            }
          },
          "OQ98AK2YkEWmZ5AEj0PRYw8Y/drTF4FmkbXKdoHbkUg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "8e9YVc8vgmYXdMHRtoXnCa0HnhfY4gv0RFbdhE40sMk="
            }
          },
          "xqVZYArnFTP7VF7sOHIeY/AsyYH9UZ6RIzDpODU2dWw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "SOLcqwBQ12RzBlHxLO/DZSofpbft2IsLufdnYJWI34c="
            }
          },
          "Q7bsaEHfdlT0ClOgc/1zzGBpjpZVZlsKKpJFsIJiLDc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "GE2OxIfjmH4srEouoIzlCpISYz7PIdrCdOqWcJRO2o4="
            }
          },
          "7jw6JlU8JwS6C2kJI6fUwVVddgg3ALzd8nC9gxkOxeE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "i9AvkPHA0QfdYXPaeKg2xZFGlVvQGFO2FZzfCKc30e8="
            }
          },
          "wZs5G7rFeQTjhlV0cTLMpsOY3hvlyt6GQh1vzLlDrBQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "hl9BQLwj1WYdyCo9gRkF2M8L++8yizwl17hm7TYhGNE="
            }
          },
          "XTS33xd8zZvz6+UfjoVBVxE5KDypNHprOVFjs/VD7MU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "26KhVYJxbtPWZ/vyzDxIwzQmw85pW3nc0VBSQn+SA9c="
            }
          },
          "hwooLcly0f36+/lj6pfpMkm1oG9M+kCyZSMajgrJ7kw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "4cyfCxV3MklQWPd1GsXzd+zOm2KcbA/QnppjWYJyEYQ="
            }
          },
          "paqptm6EtLyjD/eE2yq3Iv8tENcdOi8Z8xDLxJK4V9g=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Q4BR0htYRXGcFPE+Y22VbLtFF9LzTmqWW1exjBX7/J8="
            }
          },
          "0zyXUdVmdzhiwDn1sK2Q+ptWFA9aZEyb9+0vkz2E1NU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "UWa2HzWEwAKd4P+hWglDHL5yDmckI1v/c5L3tyv5UOA="
            }
          },
          "+iPrQgderUT0jxxsCfMmjsJm0uSSSCYStdvlVoXUOfU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "+q78VptC5lrpEQiBpLtBWlAjd2AITqiifO5a7Acyq8c="
            }
          },
          "vifwAUewUeXSo5YJ06qC7Lw+xczOHgzppXO0rdksJuc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "wZt7FsO8h7uiG1JR9fVmFOc7vze1MOq7QA5N9cMfIPw="
            }
          },
          "mxbgJBMKwlXIIJsYN6OCyX3Znqw7SyhEDPC0BsDgLO8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "AThx73tGeLcEk0Ie3EAOiPX4hA7m9Wc9Qj9bI8rANJ0="
            }
          },
          "A0AqJS8RKMhWz8n+kCMyNbSR2WTnaftliNirczWLkRw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "wMd8CTownSQbpvS/lyZZArosULhikhDH4jkyseGvVhg="
            }
          },
          "tQSdJSlx4rN1xbVP53EurkwH6V8ePMCgyIZrUYVSNks=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ECSZiZf0ZaLHhxjm33gq8EH8IOm7wAdF4/ScrMzQSJQ="
            }
          },
          "eq+msMZYPZgAPy1YQHdKKhwfaiEL3gGmrlAC6EV17bg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Evyau7g87hLE5wtF6GZpQhRQmH2KpF0jN0mXth8Yc0A="
            }
          },
          "l+G1XCeh4ru3l9HxzebunvLZbKGSvwVRbeDZ5mBWlqk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "AwajfnXZWMFMH3WYFNereorOflTckWI38tNjzlnmzbg="
            }
          },
          "g3xW5Z2bVkUulA/CakJMoth4QpQfWhSszjhFi6vq2qA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "xJpIKHbiJnCVTSWAmpK8EnJ4JE0Wg2mY6MviCGTA48M="
            }
          },
          "u2VFhbQ2rx3Jm6/bKQ9imH6x3o3/lz7A95hoN4jLCuI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "poNnJ/Qxy2nhWmPwaO/S7vIBFz++dinwyr+umdRG9t4="
            }
          },
          "ghIrWqJohccX2Ll9Dw4vZNGLf4Js2Z/wBGFV9TOQ/+w=": {
            "valueMac": {
              "type": "Buffer",
              "data": "YGC6aapRd56TZRO/40olmqe8cSRSPMpq5X47zXeODPw="
            }
          },
          "6v+ZpAPlq0rZXLuYM111DiwtuJaxBJ2dimBzLeXt3Jc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "fcxyG8gEK2tPPrq8p+4g5+mjB3yl/pTZFr1e5Oo0f1g="
            }
          },
          "xLPztVJFGO9pdxTe0buB8AB4GrYnGu7LYbvFdHuczhg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "qb3jsot2TuahlNuUWHTBgUnqyfkybyq5gSHLm1RvuCE="
            }
          },
          "7L46J6Z91fSAG7yRVTk7ApHF50mcionslTFuZKMUM6Y=": {
            "valueMac": {
              "type": "Buffer",
              "data": "UvyR8xI7W5v30qGf68jOgHorTzN7DvqwcZnmhvEDzh8="
            }
          },
          "vhOTTala8ZfwpATt6AOsrjS0nfHFRItrH539u7AByrY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "N7x4mtAp2+cAbinHP3x6hdg9CdtgEgCReF5UHOBI0xI="
            }
          },
          "mrZNR3WOc5ln/O0SAuoN9xe7zqj9kXOu5yPLgHi1oYg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "DPtCYgRsRnuUUPcdKHH700lnpYEPm+3mY1qfa/d+vvI="
            }
          },
          "OxId6HgHHAt4UL4RkUj0K3Or9whe/OoUtt7bupjpcaE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "1/4HVDbFE4hNR/Vq6f7sj7iInvaoGjE4r4jevfBt+lk="
            }
          },
          "JvfxQZZCNepYJXvFb50RQh4CwGDHMrNhq9zJpWSauI0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "MvQM1MAZRrWMJTTl+gCUL/UMHpG/AaPUcETsmFNEAWQ="
            }
          },
          "JEXqGFhFq1k5329VxJ846+5cbWpypPxSNWRZr4qqdv4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "oAxdBoWIE3z0L4RlaxGSshrC85dlygDLsdINi2HJ9gI="
            }
          },
          "SXVvzLvEeULl2nskiDrZlPMzHZGmbuUF6nI9QAkQ/p0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "2aGQT00yNy7R8MQF/lim+9oWmX+zZ6/D9bxMSrixLNc="
            }
          },
          "Ca8AOjG6KQ4k0+JE0fCGJGECs6Be9gLE7YWWDUpDQOk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ab+KSc7DI4UfUPBAW4Z3BoF76cjW+THk4pTs/Zgm16k="
            }
          },
          "ePZKoxifhxptspzodEKmT/Fq8HVbfJcnXZyDUn9e8LA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "dZBBVdA7sHcYicix5flRWsqqzY9WfG3JTZk/n6zgPRI="
            }
          },
          "t/6bk4blfhp7ej6McksncW33IAw3kT6qqJcnWbdQf74=": {
            "valueMac": {
              "type": "Buffer",
              "data": "b1g67ZZb7WOEb9uty2JsG6ViQMoXtwO/LdNh0df5+kQ="
            }
          },
          "G3UrMZCZcniP1t9c6OA1dUN8x4P/CWXqnvqjfO1M+KY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "l3s50Xa+OdqmVYsJ5IGwGaB9GeUBu+pbronmURrzpjY="
            }
          },
          "Xj7wxvDKgbrv88ecijA3APOTQRf+LM47mE1s/k1osGs=": {
            "valueMac": {
              "type": "Buffer",
              "data": "bbGC1baTffb+jE6hHSk2848P7G+veADlbaJ6nIru1EM="
            }
          },
          "nb54iPW/Kc64Ov5P0p6MslGrtx0OhopKcMOWM4HbWQA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "yN/844IkaaUm/h05HgE3lVTVwvkIamPmb9PJwTHWWFs="
            }
          },
          "ZrpzvEuyTgGnovxQv3Jd/Rs5OhE1LvD12/F0qdKbrZk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "6JtHoy69nwbSrY/Z3kKIGxkpu6Ilxm5xDd6+ldlut8E="
            }
          },
          "R5pQ7JGQiWQKU+lTws3BdB4Bd0/2LoYhXVm6/FvCDP0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "PREGSNuGzbAyn7m9Mko37j4kxfNitkb0Fn9hZlGxBJ8="
            }
          },
          "0W3z2m4KunuWOn0ovrKhklen+PKKd2wMsd4bST5XQYM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Exj+6xo5HQbjwA6kaqazZPuAiiJ2G/8Dw+6PKuZzMSI="
            }
          },
          "Loi5pNyqlzEVAk3IVCF1naxGB3MgoFdr1SPYAyYgqYc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "mmRsPzD/DUTJc7d0Un2vwDI0R9GfLjsKg1JVZE7QrWw="
            }
          },
          "LxMXUKd+j46x6NLGkKG4ZtMmv4w52bmlctFt8h55qS4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "jwgg9ZVMtvUVPKiZ32DNS40JWDRySr3g+u1HBrxLOMc="
            }
          },
          "VIESUe1DxFDONJB2JOg+pY6NhH2yxKu1ct7JABNaf1U=": {
            "valueMac": {
              "type": "Buffer",
              "data": "+5WGqyjfidl8XzxPs+f64qLqQA+XwgYdMIrvkHYQN7Q="
            }
          },
          "y+r4K3xl9OnI7CKMh05JHtw6+3zhKuhRQwz3xMSihbY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "x2s+kR3WqfctjRe2cOh52nk9dfNeokbvVEqkZUddYKw="
            }
          },
          "iLYzNzwyih45yLgHNyJn8pfzYrB1KVCM//zdGrf4Mk8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "v5TyQrOfhl1e0jjM4WGfN1F+Hkcf0fQ7CUBJpqBUrmY="
            }
          },
          "wCADiUW8xSse9FcASGy6tpf5/kMvCYSZnNtlVeny6Lw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Ud2vkWUDaDI3yxmZ8K49/t7TxqtEaAmBPxnEwcHmrVM="
            }
          },
          "NqEUNJKlxeYkguTNiLTQikuBJnryTAOz81vByREqwW8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "r7C/J6e080Gzwlr7G6pKBi0lgsHmAMe41OMFL5JvP00="
            }
          },
          "cAdZe/4JTSCpao+IBrtXnqW7b+u8OaJ/xh8VTNfPiNY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "vBjH9Fnp5HgMyzFZsk9KpunJEvt6KbyG9yPpWp+vVhE="
            }
          },
          "uDvaBMZflrIfI5prztn6GFISjo3IMP6MFgXSX45loXg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "9RniwaqV8zQRj+eh6K1WdeSVIzL5Yg9Ykhoc2EylGpo="
            }
          },
          "H+LOxyQq9nZJoG1wiy8YMwVQfJc83xjaI9PsYqYHb8g=": {
            "valueMac": {
              "type": "Buffer",
              "data": "qvqdfna/e13h3bWt1L7M0/7a0h6/URJjyTbkj/NStZM="
            }
          },
          "tyL6CpB2sZWLXR64oJryTj7WvsA6mhl8DL8phRaiRik=": {
            "valueMac": {
              "type": "Buffer",
              "data": "TCnIV0IOJPh/ODGDUslAQjiYg2Y/7r3i7kOi2JGs4pA="
            }
          },
          "BCn4BmIB4tWounyUDo+OCu6XgyYpNYj0S38ErbBHkVw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "HVmvzZfpO/ItWX+WCo8fltO7wWGj2OOp7LX3zrzTQ74="
            }
          },
          "1RkH2JVvZ53yrfsD3bV17JO+nz2GHS+rTt3OV6OYvd4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "2XCcRqLrRTDmY03Dhj+AELDdRidAZUqZz3/TXkHPnk4="
            }
          },
          "WRLHNM4nnG3JEIwcVetf00xBEYTko2uqd+CuGXPRxZY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "oDh2+ummQchKsmLWM+MzTm3UMFoTuaehO66HXgwpiHo="
            }
          },
          "PoTyCj1ua4yqEzHREcC1/yScHYzuLImB3NWjQsPgIbo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "NcHqrUAsstn0PnRRnvgmjuhbSqlpXKNPNx7RKf54cnE="
            }
          },
          "xmE8SX21UH33KOU18vbQ+QpJAYfhonY+4ncXepq5AM0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "E3CgIjEuVF8rsu4lBXGTG5jby8kGt92tKKWzZdeKfgQ="
            }
          },
          "5sC3MxqDCGi2FwVzeDEQvotasD3EegUN1SFtRMpLK18=": {
            "valueMac": {
              "type": "Buffer",
              "data": "nffSIDlMb5tfZ+u2JB6O9d82DBDarIOfA7XEyM+uu3E="
            }
          },
          "0zCmh3ku9H5A8RYOr7fc/MacP14huoHoVcDqCWaBdAs=": {
            "valueMac": {
              "type": "Buffer",
              "data": "oztMoSmkk3D8CLVLSfhhAOdvwnlVTAbUm7yUUWl694E="
            }
          }
        }
      },
      "regular_low": {
        "version": 55,
        "hash": {
          "type": "Buffer",
          "data": "3N86kllT7pQvy3npZseYpJjXL/b4uInozFuxO9i7Eg7yxrjot/jaXTrqMRtoZhTrrOQ2DdU/17VXjXiz2rykaFg3GodxbntV82mTHAMdJZ5wlzGR/wLMbOmY8Lg2PsP8YDcRZpx364FuCqpZO5/xun4lKGzzl4Xv6nhj3kbdGcc="
        },
        "indexValueMap": {
          "AdckuQuexhV05idL9QIjLCeCbNce5PJew/XIDeODXbI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "iRgUGPCjw+WksJVkk2Div5emafAuwvDRtNuAWjR/h10="
            }
          },
          "BWpQC1uHA1r9dzU5lvr2YnOUMIo1WwKZuHUc7x/ZeU0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "jTDxyJl2R1tfFGv4ebvwgdgl+CHMyAuxyOWZYxKmeSg="
            }
          },
          "Bcf/K0mxU36tDcrOoBmBRZ1VPyWXS8JylFU4yj3YZqQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "d/RZeMGmS68Zx3M+6xxRQgO0iztKLHdc3BcWOjKU4nQ="
            }
          },
          "EL3tbnLY7h3UD+VpQnuDkWqkbeJdq+aYhjVzpSdd8fA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "x7Pz24eZKiZMwqYPvOR+y2+UN3iUof/yRBtHho0pYQk="
            }
          },
          "EZ3cuLT46H/ZU2uJNbak6OJO3eC7yTDALIzQjL+yvOw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "KD0aWy69ER27EupQ04KgsNnBLXIBqNQ8SCLSbiYXFyY="
            }
          },
          "E1Z9rY47Ip+uMT7XCPUYXe7+0J0lvEfj+S0xCZARyso=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Xvm0RWaHdOaBlSqBbhmlpeaZixdBcAXHaE0/cRNV/GA="
            }
          },
          "IQH+Fxhc/fFNyPfwTC07F0RwdxBcm7xvqIDB3aeJSwQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "oHYibDL7EJI8uhXuwyz4wrRBmf+T0K4ljiLFex+Izb4="
            }
          },
          "JJn/Yqy0LwzIbwO94aHeLNdFjk5y4kGE+j28BoXlQ9A=": {
            "valueMac": {
              "type": "Buffer",
              "data": "/NqATi6wJ7y1ozOvNHr0v9YOZhHMf3tz7u2j+XeJQqQ="
            }
          },
          "J7ahE9kT6ki6+xSdBGaa9x+wdB6H0YbJtRfnvCD3DjM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "mKzWhmHk+LXIevc38JU6Av6QbfzJv0y3PjDg956lIl4="
            }
          },
          "KPeByBMdMtNb2jhC536byohhEj98a3DQEz5GUl8cl4U=": {
            "valueMac": {
              "type": "Buffer",
              "data": "JlIyeg2qqlM2to7zMu8I6VcWCGpSlkQIx0va+36zu2k="
            }
          },
          "Kp6kd4Te8g5YlKAzRhUfMVtJtie4UOoViYjOqHj0fIM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "smy5SE0tPTX34agmwijHvpG2X2XBAVEqxIhZvP/IcYs="
            }
          },
          "OPYtUWmqGuczNvhsSFb/IsEW2iS7FKsQy+hZTHb5DF4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "2SHh6znYMDpqCG5BifrLTRZfXsFZD1/QlbpWt8PAI6c="
            }
          },
          "OXK7FTT86q1+jRm/9gLK6+SyA7Hq3qLjunY/wzyWl10=": {
            "valueMac": {
              "type": "Buffer",
              "data": "OlUXdveluiakwFofEglZK4krbYUu0JLgmnYiU4a698g="
            }
          },
          "QU/pww1UPVgSc+RaRF7e0t9ty181P0NRL9QitQO2BZo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "nQrUBz2/NRsQTPWK9cVn04QgYbxiiAxMk1tv21+9VLs="
            }
          },
          "QtNDYPy4aIxweI8EgHu2bPnSRn6ap3P1K77h31nEx6s=": {
            "valueMac": {
              "type": "Buffer",
              "data": "DUuMs3YCAJ/tcKPcLoaWmCt1vqltuWXie+7Du6OyV3g="
            }
          },
          "Q7ymHxwD/R71XaiQSxkz8DVNbZT3N6jawc035NP+nuU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Pp+Q+JUsaLTG+g1cxHbfBt0/4uli2ie+d4fMB0UYtI8="
            }
          },
          "Q73Yn6ifuWDCPY6js55ARmeGtd1KUWx+B+wx2WzpcxE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "oR9UvrQmZuKXRKGirmjYoCnmzKv/b9pI1pA+zQnzaDk="
            }
          },
          "Rw5jDAvknphSOKY0dx2aqJ3vrWtzea8Bt2SOzkF/6Po=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Q4wPWB+pTyF7Zw2sWHSp98EYoRXkWgdCEMU4itk9nKc="
            }
          },
          "T4clQxdXyOiVVfvp/j57woo/e9aJtg+NIG4omLttn2k=": {
            "valueMac": {
              "type": "Buffer",
              "data": "YgXyHYw0kH+I7L5lg7xQmQ5yq+n/Tkjj8pokhPBfQtw="
            }
          },
          "UkTP6/EeV/2K9ucXMkQasHpixKaYjmvC/yqg3597HRY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "lfyZjv9hxCH+wvsQcrbZVbwjh0O6iGH9UKu+Vo8qPco="
            }
          },
          "WmMcXryqsOFNfCuDjSFULXBp7NK/lgcyvTbozzMwhfI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "P+3OpP4b5q8VJ9Wcr80rVHpT6gMtyuGkWhBBdz2anWc="
            }
          },
          "WoenJAxWIj+P1QpwSm0YczjxWhx2kA3AGOUKf/R1Si8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "7wCL/OLidbsEMuZBDY6xTvipSd8x5EMrVZiRZFGAqVg="
            }
          },
          "XLsaRPC/ZcF/xRp17uLW/iRmEYlP246dsEnR9Mzmgmk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "M9Hmqzzhpb0aSlOJcKa4pRkYyDgs56XPWVCP0RTahOk="
            }
          },
          "YnQbYbQCw4BqhOFkvnxzRjTMlHocrsyLf+JuIqvYkBs=": {
            "valueMac": {
              "type": "Buffer",
              "data": "JmnaoS8qZiF4oPDkglqBqqg/lmhAAZzPm3BlVOxiiBc="
            }
          },
          "YyxmP0pkrUmIaAkH3zdd69ClZbbdbVwszfTKT++Irpo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "BeuB4HsmVc4BcWVMqsF+n5b75XPqzqnW2rrh+lzEuSA="
            }
          },
          "aZ/Uz/xHnThKsM3AOoyk7V94Vpy/2722fbaJOxgj2ec=": {
            "valueMac": {
              "type": "Buffer",
              "data": "mqG3d0OkxTFPInC1MKJvnj+735pOQIecokif8Cg1u+E="
            }
          },
          "bL0oTkOp6iGPPchjyOufIZIBVhcc09GyZVy/0KVletI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "AM5spnLOkKP+wJyGvztmVRhywIM2WEk5c+RwRGTZX58="
            }
          },
          "cNqdOZFzXYiwMR2uzbp5A3pQvrIF5ZEsV+IB7EPnqqQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "oE/kJa0w8BfdxzUQ9aU7ZzFqL5mPCirFR1lmbXZ+Los="
            }
          },
          "cR7934gpoRLPxub0FlfyEbToZEJ7kG4hHUxa13KM64Y=": {
            "valueMac": {
              "type": "Buffer",
              "data": "mAlYa2Xoc02vtJbAlpvSMkkW5RepkHNrTQbhpTE9aK8="
            }
          },
          "dN0kG3tN3jMSbQLwYpQvq7rib5O4V6HUBowXtgcDC1U=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ilgn3SwLSoWiTgmB5Y1XyX7XN06osOjJSY4/masYxLw="
            }
          },
          "deskFnkGoNNNjupqV6c9sREExDSgPUIMehMd39Xczi8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "OYfjEZIDA8YtjxJtlGjETjs4Z4MvuX/ea5LTCJ8TyZY="
            }
          },
          "d6g5mk/0b472NTGSEKBxE9vrAspxfiAJ6f+HYDUf2p4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "H88b2YJyoIA+OY/Hsne5ad43mbI5/9pb7Gn434oAQoo="
            }
          },
          "d/TTxs37drCi/npXpQ8sUHzXTf78bElCAHQ4rvLl828=": {
            "valueMac": {
              "type": "Buffer",
              "data": "InhLgmoQ1JC4c1356bBy+2oLoVgOglPefYHDfZV7h2s="
            }
          },
          "fX6+l9Cgaf4oN7YvsD0srCU10TCZ8p0z8JVdmQj9IFo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "W3vYFC7ppeyoNdDQV8Nv10Py2za4vaTTHf26jbggu4M="
            }
          },
          "gyxasMYzNsebx19+2D5XsWYzUrPrlNkQwB/kd12dmbU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "AvDHealZdVNONnjS4AOnwvIJ9eZkFSkcIuYVO/bRjYE="
            }
          },
          "hH9wOqpi32rOfrctLsR6K76V2f26VaPP+RvqOBH/zzU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "MfFUSLorcwN9Rtplsizgs7R9uyA0w25+jHSZ33x7jDo="
            }
          },
          "h277k1j6bx3/slGdyclrmgqwPGQXsI951ufrj1ljGtc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "NeYijBF2qQ6oc817XaaOpPM606mjCzOAHFOcP3KfFwg="
            }
          },
          "iPIlLS3dXkzzHBoyjA8E9/+3q4fOa90LF/Kc2zN1mU4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "NE9LoZxs38YqMuDMb0eHOQZ40EyhixDdxzgdjHk0R4k="
            }
          },
          "jHE4lIqbGjX56OPgEGScLbPdbx25zR/RihfkUlJUFHM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "pb1+vhtqDY3yT2IVYY7TNnbPagXbFi4uygXrBI+jV24="
            }
          },
          "jNd/4WqXituyoPDoHfNUFs2M1Yzb5BzdTzp9QzTqqs0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "L7Q2rnHipctQMbJGyGwMYKl/OsTPyWLlwcrpN8kR+aQ="
            }
          },
          "mzYCwTztdsoQNMxYicp1ti/Wn/p8p3mqg6nOWjCF9ak=": {
            "valueMac": {
              "type": "Buffer",
              "data": "3TIPivhrspKJDa8sCTDCEinT94pPgaaRDSUT6eUEIX0="
            }
          },
          "m6MKL67i8bQg1tFYY7piyk0leDdG+CSLV8k6JYPH36E=": {
            "valueMac": {
              "type": "Buffer",
              "data": "nD3XF/LAsmWRGd02bz96AwbRmu4uqFdj0Ra1jO0Pz1o="
            }
          },
          "nLLKfebL8fu9nSay70jlJdIHzRO9WqICqgse5Khb/AU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "k+I4lUHTQPvfloL3w7u/8ShndKsT+7GSLgIeliSNqiw="
            }
          },
          "pLR2MfxEHXrkiZB7NlTvOLX3be8+JVZzlBXzQZiTe0k=": {
            "valueMac": {
              "type": "Buffer",
              "data": "hsCPfZJL608dlbk82Xu3m5tgr1vbVy8tgGCpWBQWymw="
            }
          },
          "qSgo2kTvMiwmQmtRKf9V+VJr1UO7vJOWfh1KL+CZqvc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Q11UmOKW0CFpbPn071+XB5OvjNVk7Ck4zoEs3Dj68co="
            }
          },
          "qV+fSWllHjnEi0AO9Fp+cqJ4xnf7itQozbjMCtqGXHg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "6RaIN7qjfRFW4GgLQG0gF4C8fqfqYEvN8GAZV5p6//A="
            }
          },
          "r8nN3qJ9gMj099DsPyICPiuQXFvANYcC9rmbzQpwWkM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "FypRZxaFSvexEoXr+P9GWe7NHaoHZDbNEBSlhxwyVwY="
            }
          },
          "t0y6Zb9/MYM5R3b9sBlylOeyBMy8oew8OIDBxrTOS8s=": {
            "valueMac": {
              "type": "Buffer",
              "data": "hWI0GDLzwKAzAC0rRpLjCFp2iRnVxZKR2r6dlKLyLGo="
            }
          },
          "uZgJPFhrGNqQkvstPvRiF8ogJTM+txf+UTMZFwXQbzY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "pi94Opw0KKIU6tddpjcebaJigq6h2yHTDz8KkU95Yd0="
            }
          },
          "u2iHdxMyTHa3SzkVOyQApWczZUhU/FTMjRn0TyfPE4A=": {
            "valueMac": {
              "type": "Buffer",
              "data": "bxlc5rAKrLbCX4RgsHEFmEWvMwFGdljQiT5QObPcNmk="
            }
          },
          "u/bomBwbLzdJ0g5nAfz8LUB9hNIlGHY60DqYQnao7v0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "xedOKHBYqFGmoJf8uAjtY98haYwX5MxcWVgFkNNHv+0="
            }
          },
          "v4iL+QUFswyyJOLKBvi34Onzy7PqfLfmXA2Pb8K8MLA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "adt3tmGXIaheeNgck3efGd1/jH+W831i3GnLV8tyWY8="
            }
          },
          "xoBFIRxbrwfr0DgveIo9cge8epgMXItb6Z+eFfJRmZo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "EzmsR4oPZ9TLcTm3E7zOROuxJq3vHxmCJSOJQXXlzdA="
            }
          },
          "yFwIYEXbDhzsIsfsZxn/vR5avGeWSVnFHQHm4uQwtRI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Caia0XUZNtREkcdI9CFQdD+BEHQabyTDE99W5MK2HoU="
            }
          },
          "yz2vJO/hxRYQvH65JweymNMH9UdaG0DmP0hCYWl+qWE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "6R/KN7YzSsGVuZAZNTUBQEn/fwGp6oY9t8CC9iYPl5M="
            }
          },
          "0dSE+4noc64kecNXd9lkBJfhgssLJLYP7jziZT6jHJQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "/HhGWf/2zRGgCpWqWZzqy99gV3kaSgoYjPFZx2QzZmM="
            }
          },
          "04sueEO+og7tOhDrp1/lhP1VYrcCpXlLW75Og7vc9kU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "zdxC+ciFJHIs/V6Muv2N5ks3p1Nrfymb5JLAl7vuvvM="
            }
          },
          "2EjVgzh76Ns3EC5hhymUzHaE42fTpC55CUylXkf9LYU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "9hSRikqZqJZwNmJreb+ZTI1WQECC7E+QpmiGCeaF96A="
            }
          },
          "4POjsOt3WWbzoHTgLb7K+0fdZR4lDAtT++iWGiyfYPw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "DeJBS1cV2s8w4GRiKOXoi60F1z3tPy4SJZxKcC3yhBE="
            }
          },
          "5/4r9SGUGnJXRza9rsDn0hSdGtBi8g8TYg3HvXbR8MQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "LvMe23pJ/eGHZeOsHILOUj7YOZcVr09ghJC8r8xigK8="
            }
          },
          "6DQtt+QYomQArmu7ULCkOuXl7s4b7ruI4NPyP6ON0Pk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "uxAshtbcMODtMsfrpFN1qH5yw67rZNeH39wAKTu8Px0="
            }
          },
          "6/wV6ehQ/2PAeqGyYmrFt9u3JomrER4lIc+h30REmlc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "pIkssk0iSGOsMszIIyAuSV62R9HTup7fdrztVEcfh4Y="
            }
          },
          "8nebq6vEARLJbbJe9uMX2pvfW2ZFXLhQ2FkNYT+siB0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "y1wQ+xzuvGfFFbtGdLzuvXa/NWCRFKqJCShDoTiNKY4="
            }
          },
          "/gio2rdudMrOfSdcbjRqdnUsoV2t5DEf5yLfcpOm+ro=": {
            "valueMac": {
              "type": "Buffer",
              "data": "beeVy5pmCtDTz58bXJPDlNrUqCqaLQ0nwtfKnQweajs="
            }
          },
          "KpundPAJVtPUqqimB6xVzWIB0E8oINgIiqgq0ncXRy4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "EqpkSpBBUqQqgvli4AE96g/k451nD5JZfKxagNlEtTY="
            }
          },
          "3dePCpU6VAp8p0JN2KpVWG/gWLpmMdnufkSZ+mhV8fI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "nlzswmRMiK+MOVIkv9DIxQmFWBLSGoHboCC8HUlNXYE="
            }
          },
          "qwkUCRknvwOkMmuNGRxjAXLCL5IswZe5IHnj/3Ks3Pg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "p9mJnJcGEzJMbMG+wGDYmCjJp598c+nlcLL6yNp53Rc="
            }
          },
          "6+H8pif0lvcuNBHv3Bw4JaW0gRjQ07q2oKS0Pg/LOmo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "E3HEFi4IXGw2eB0pMtveEzK/+KTWWRLdIBoTRH7d4gc="
            }
          },
          "UtspXYBdriYwqsz9DWVgEAQByRFc9r8bPUh1LOoXD4w=": {
            "valueMac": {
              "type": "Buffer",
              "data": "yGvInQ34dvzXk91u5MQSmOna0BhWSDiZVZhCJN6YlKI="
            }
          },
          "Zv08/yVkmbM70wUvn9vfnfXomeNlnJW5E9U0LIcNs0Q=": {
            "valueMac": {
              "type": "Buffer",
              "data": "fOWJlyX5ushtKySfnBs5lYPrTAs15wtfwK46C9p/Igo="
            }
          },
          "tv5NrbvK/ZUq2CtEifQqyPnleG9DEs1H34yxDaV01wY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "zE+M1gjaQOj67/F5aZajMJHTE2DZhZxJGIXzGPM4lEw="
            }
          },
          "ysp5BQaMciPiq6NrY3PtmtSUTvl51KUC7NmGPe/yAhk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "6H8s/i8PEbXVb4hjxBBHBit2kIRUWA9I0AyiIckiUcc="
            }
          },
          "OUrGGvJ+ZvW6Yx4YdCn11T38ERiYaOJSAL8i2sYjiR0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "6kMJBWFCdwjvkoeXn6cN+zVc1NFs6J7K5cAQRoh86Ng="
            }
          },
          "+S8bQY6aeSLEpnx9KgDnRFbQ1uLKvQfS0X00VfTj4/M=": {
            "valueMac": {
              "type": "Buffer",
              "data": "GLuaNqvxEXsssmRQ24MhiQZf+WpMLTJOXVEhFZiouAo="
            }
          },
          "SOD+z/aDLG5XiAYD6as3Lnnu432WW0QN7dNE7MzVITE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "tG+ed0XqmoUFAxvn2lTQ4Ny6TIEs6y4UCAE1odILujM="
            }
          },
          "lbRgYtb1N+bLUU6onV3xRTMpjBugLj2t/u1+Q/s6lZ8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "XXh0BJc3PE7c7UEbX4J8JRfU3Q0x7A5h7R0s7rtMtHI="
            }
          },
          "bNks4ukM2oeV7U2YAX6mMwmVR6XC+tkxqbOArW8IzbQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "T4ReUa6I1TlVV5bo7PqLoBUu5UzTzm5Fx2muIDdodNM="
            }
          },
          "t7mZoiKddur1vHa7s7aIjwcGnQSfdYZhhiSqfWu8H10=": {
            "valueMac": {
              "type": "Buffer",
              "data": "gfngGeTj8VVSZfgSjId7iAzouw+rw38Y0Gi3sm5utzw="
            }
          },
          "Jwgn1R7nm1QLxUCZfyH/tEKPvMFT/b3uFqnIE40MLPE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "XfFFUGT07Jy0toSpMUdY4EI2R4KGonLfSFR1eAg2Lok="
            }
          },
          "vyA7HQEy725Bi8VAaftz+en4lZIEedTvvxTAJC7NzjU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "xMgEPZBxgjo+XYgaAd9qAmCQW0NeEhViw3INJ/sBHHE="
            }
          },
          "INcAvgo9gqzRUTdIVGiYSE9E6HLCP0jNcqy+MPFi0YM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "0Ye3rS/9mzoJbevzB82PiUB0GmnyKCQ72EmBhoyzIfo="
            }
          },
          "/TK5iQADM53oI6aR6aCtjC76SQ9xXSZj4eP5XzPzT94=": {
            "valueMac": {
              "type": "Buffer",
              "data": "o6joiMjGTCIK+hQu/KjEqBj7/Q0zLCwYcTWw8jCIUwk="
            }
          },
          "4G/yOM/uFN0ctSYwe5HGPXFtoib2zKsf8yMMzs6Eflg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "7MaCWtLV4j80UeQw81OoJbXaRT29ypSEo0cu1RIC/8Y="
            }
          },
          "q3SYvU6t+JY9oYRkTzOKuZmg9fCOUXowuaIlsjJLNRA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "GV8gQ23B2D5AyoEgMRIIdxkOJfl5/7WQVa+juIpqKfA="
            }
          },
          "EDUua7+jFe0V0QRfY5CLDjsJt7dJaytAZLR5Hs1f20I=": {
            "valueMac": {
              "type": "Buffer",
              "data": "B8cJkz7gDMefaLKa0bvsijKkU6zy5WB5TTAs/E/t1Vo="
            }
          },
          "71dsjXs7iN6kdYqKYeM58tv7WnNgbzTF1xdDEQix4sw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "QDKxdsdlMxg0rdTmLO1uB/E044UZaEvW1EIwjZdRz8A="
            }
          },
          "54dsucLfzagWYYQsX952kGLhdSYKXdgaKXwpINqgZWI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Qmb4KQP6ZaKiQZ4HmIxPOxS9yWshv70CzLAo+uyqjes="
            }
          },
          "wfiVWLD6XzPBHaNiIQaf5gvjin2rIir3bdlR7vUmph4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "FsxGBapjW8bH6xr4BcA3QjzihGh/D6TSVK5WQMqW5lU="
            }
          },
          "uBvwcZ3NKXBFdv6B0WwGdMyBgtkxv1nrZTzRzRx+3JM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "6WOmSoce/tgIkQMc8H8mHrIjHGLAxEq8k9+TLNYqOuY="
            }
          },
          "dDzNb7f2nZqTUIkqLODhBq8CqIvB2q9szVkPFFv58ko=": {
            "valueMac": {
              "type": "Buffer",
              "data": "qqNaZdB1y7Y5D350ZrnTEozj3P+3n3tu+wz1NTYDb2A="
            }
          },
          "k5a5xs7P9eRPJny9yjlXx24Hoqql7IYW775oPQikVeQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "M7sMoUofr+X/erkq3OnsKvyQ1+3r/qbPbPJbLvAi2fw="
            }
          },
          "R2F4WZcvb0XXLsKcB6/tpz0I3DOC60XGUGx3qFrTi/0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "UaAwpAKtw7qZ+LCpBgvRwT0fUa4lSVRTZAxBPU3iygA="
            }
          },
          "WpvNSjelYJge1OSoWEJI9sZO2yD/lq1mWEoUdPCekzw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "lHZEmu2rQTE68Qynm34A3tyRTEhDogLBX8GUxE31qAA="
            }
          },
          "NZdfX4fQxA9L+It9Vj2peXonmgUdi5N/nCI42oQdTa8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Seivu0h5ikvXswEKOfZNF6/VtxV3VhVYhOEDNJpDMjM="
            }
          },
          "J1B8LZdiB8VhIQNhH/GvjyQ7A3wVIB0Lny7qlzbkvKk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "H0+4fh7+ZleX8zQGNytQSif3LNm6tegBVTaFfhZReYM="
            }
          },
          "zwkMbKzTB/3vTkfgHn6T4W9lLm80kSsgUia7TaBImio=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ZdkkcW6H4FHtVDIvCqncXSDbcO+zQAOaOZoRp7CTTVA="
            }
          },
          "Pv+JWH+axubupIBmUNaGMcmTwSnco9o9wsKyxa4EpF8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "6weC/it5knSaQTaOA7EE9jHurLY8xTUWU1Or1U4MX9s="
            }
          },
          "k+c3LvAoAAdBjYbJKjAmOk9PQW6Fi5hgPcmNNNhiwaM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "DBRPI4LJn89ihL1eHy7mLyBJxThoLsJLT9zHE2ZxtXg="
            }
          },
          "xQpV56z4cGcZGYTZ4FBrg/wdi9k8ifThKJmvej8uaeE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ZCvf2nO7qaqlXofp3ogiKinVhAVx6jRY6DTC3pbM6C0="
            }
          },
          "uIz0Jmci/TVNWuOmaZOv+HinnIOOhSdeqbn9Cs/7qsE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "LO2bsBaeFtTFTzgPlDFa8kIIUf/L/IqfrBggE61T22s="
            }
          },
          "kPR7dEiZ3nG4pQ1IgivP6ddbUIo/XRraHuIrrSIu8eA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "bQaguzjZbIAN5w+NCo6NrmXi6ImxnNotMvMOIvAcqmI="
            }
          },
          "qjmgbkCMz9DQ6KnAifHGgfTtBQaQizRdGVfWre386YA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "6G/mffZ3mArvWF03JJuJK2G13mO7rqTucvEsQfgmD5w="
            }
          },
          "mNpo+ly/QTCTE6XbnfH/71nyYmmAGvTvBjWrLwr12Ww=": {
            "valueMac": {
              "type": "Buffer",
              "data": "wV/wg5a9Txp50MocvNZKe9s3XtIMprBstQ8UZlg0ZsY="
            }
          },
          "vqPV4GAc6pgbf1Nrb+fQYco9sICzBHdwrtvtOBMfr8w=": {
            "valueMac": {
              "type": "Buffer",
              "data": "bYsxP4vNruYOHfw6BkvTK+3P0pRECSdgsrZDDDPa8s0="
            }
          },
          "fi9Z0os+JMFjxIu7HOWJ+F3YF1keiA23nxHswzE4iLQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "6ZclUa+RZVUNBYDmVNTnY7avlRfEAtPOouyiGN//lag="
            }
          },
          "foT5NrcAPjJXV4Fg2+75WWfFYrtxtCclzPFNedVw5Fs=": {
            "valueMac": {
              "type": "Buffer",
              "data": "je3wvecU8Made2nKsyRPtmr4bWpsEU5GG5U4ZvJ/z0c="
            }
          },
          "mtFY9kfBeXPeav4HCQx9PXRlLbpPU2HEJ3AUyeW3V9o=": {
            "valueMac": {
              "type": "Buffer",
              "data": "cLuSgeOtv7ZRiEL2N9/weg7YBmgcBMOAC8njVEmEaMM="
            }
          },
          "BeFQSBPejkfp9tmCZS31VkBpTxj5SINuMTytAqo848M=": {
            "valueMac": {
              "type": "Buffer",
              "data": "zZtom8l8rxtftGXnLkRYoAGlbIW3xUkfNnseaM0larw="
            }
          },
          "v2bFWLT+Vs0SXCTFaqG5qcGfPBeiaRn1JIUzx8e+RRw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "CZaEwAMT7XVRltzI+uo4YhDB3luuZsKxYvrYk8JmqXo="
            }
          },
          "4+rznDCWwPcymWII1MwCTAbc/aOsj3wbCVcabjs4ZlQ=": {
            "valueMac": {
              "type": "Buffer",
              "data": "h8uen5oaHRGy5qoxu7jHZOVgeyceJePstzehC5LrbRc="
            }
          },
          "sQXHuZUr8Pf55zV2iaL82HCyo9q5njLoWYHQo9Mk8pE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "dED3YxcKt7TuGJ/lHUIbujODrfypkVWoi+hqOY/IcSw="
            }
          },
          "Z45lIy5wfFsPTgCU4ZNCBLynhqZo8pgj9wEPXMQMvO0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "XqmoLmOIJ2zCTqFpXbcUGOSjf4B6jP1c1VM+K224h8E="
            }
          },
          "SlWqr56rtbBgZqod0V1lsTKUbg4s3LzOZ9oXEn+hugg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "P6GAuurGQnLkNVh6IHw/y6WfrnAvEaODsbU0OBvRH4M="
            }
          },
          "DYTAXZFIO2nsY2lCM4xKHSyy9iU54BBIUc+Vfz2ljBk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "YlAZP6j1XBErq95W4SNXyjXQ84g1mjy+Y3n4AAOXhSw="
            }
          },
          "j0gfwU3eh90oHP3QyzVhLZK2rk39qYP6J1ACNvxNQCo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "C1Wdi5NagH6MUxugswOkYR0ZboB7heWi1iEeXULbiEc="
            }
          },
          "aCl4T393i+qf07hV1949E+jomGtSyUB9Tcz2g4spF/U=": {
            "valueMac": {
              "type": "Buffer",
              "data": "0WTQb4VTRxo0BbwaSnmzJFDIpPyYbc1oaIwVDWEk81g="
            }
          },
          "Jv05OXHE/N7g/1AMUvRf/pKQc0wtV+Nl82I2DDDHdHg=": {
            "valueMac": {
              "type": "Buffer",
              "data": "OvHttp5zevn7e0cNt0VhIO8UveKkTKJ/bYG92WLteaQ="
            }
          },
          "WBqXfbHBROKTDA2nHEYXparlQDYQlsxoc0SrFNeFSVk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ozeZSjMj30RAU063MjPhggPRaSRQOeVIgz8teGYGB1Q="
            }
          },
          "aGv1fEXW///OiIHcwB5vEzWUANe/P8mN3PaYt/In5cs=": {
            "valueMac": {
              "type": "Buffer",
              "data": "zzBI5Lm4ljoukDb9iXm0Ev8OI2KFVri8f3PWpMcNPlg="
            }
          },
          "Py2a8wlh+IbkCsWkPl+0eFMliW1zGftsSqzR42Jdsko=": {
            "valueMac": {
              "type": "Buffer",
              "data": "sezvJx6pjlQEviZzTtjLdnGD6QLKD7aHxrKdy2XEc3M="
            }
          },
          "1tk04gJ/VRbl1JMr4jCQlOIYy2MQlus+8MI4A3Yvpwo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "Bvo6F66jChj9CoDn0PxAy5kLgOVuk8l+6Lui80j3qH8="
            }
          },
          "CwtcmiZuxft/CROPUPpmXA57OuIXksbkhvvKpP+CeLU=": {
            "valueMac": {
              "type": "Buffer",
              "data": "RKLLMSdCOnxw+MZpJjaDfr5HVMp6/pnq4jt8I4pwiP4="
            }
          },
          "5RtcRdBdpOBj2Ln5IGXKlUdfnOS9JI6VZ/Y1+bT9gd0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "dEFJSpsM6N7zkOIw2DqNZd4V8FJa6BqRbF9Ii4Qp/Mo="
            }
          },
          "lYiFTsvt9DlPE9piZ8BheqvQJ+3wHPSBZ4FPvFlJ4Jk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "icHnEtgyqqI4869P2pHrTZEbD02BLpo4bArQkBtMnO0="
            }
          },
          "PuArXgMsExLeSkc1NqtyE1yzJ0bhtf9f73R+TI+Itm8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "oS1g6wJx6CwkK9p6WCsu8LFHMr25rVxjnNhyAo+Ba+8="
            }
          },
          "BUSjcxmq1N2Bb/MntkQA+KNozGl0ujzVC7g+WTMUmyM=": {
            "valueMac": {
              "type": "Buffer",
              "data": "HWi5inUVG50p/6zyAsfcfXI0SlKbKsJheyuPlrn++tE="
            }
          },
          "2gKITUXe17natFpigGSWeXfVIFSAidb/Eg4pUYBhJ/Q=": {
            "valueMac": {
              "type": "Buffer",
              "data": "B0ubt+5pmhjsUnZaGnI9ZcoSuZTvcxvqSYaZH+hy0+4="
            }
          },
          "HuCe5CiM4OJIemkaMvfmB5wjf0vNRk6FdAB2Rw8yt/w=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ABG8advJQZG+E8MVRY0GnThj2Oz2OtflfEj6Ygr9HNY="
            }
          },
          "RjIX9vAXc8YwNeIXLP2FOeCMwlLPq539gnUEaCGghxs=": {
            "valueMac": {
              "type": "Buffer",
              "data": "6s+jnAguWCqEiTAWe1W3D0KzfFTz6YPal7KCAmNIUHE="
            }
          },
          "t5MpUXkPq85Fu6ZDUFQxiOy5LFxKM5dBiRsk2ShKDzA=": {
            "valueMac": {
              "type": "Buffer",
              "data": "hOeto82tepbNuU1XPYGvDFZL5Qf/g753+EwyadSj8Mo="
            }
          },
          "eoW7Bdo/Uk2Uy6fbrGqyYLpSo03qfMNx2P9rc8v+go0=": {
            "valueMac": {
              "type": "Buffer",
              "data": "eMDM4Jbc/NbQeY6AcbFR0Hz4WvjN75LstEbRYxG8cTg="
            }
          },
          "93Z9NhYiC06x8vUqwYtKvd4P7S5gx456TCf0MaxqAeE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "eqbfWuMjKF5DYCniJvoiq8SP0seEgGC3jRNDLEhDI2M="
            }
          },
          "qZofJJCtQybr8Kle0MWw10SnHHIK4a2AWMZpWO1CM80=": {
            "valueMac": {
              "type": "Buffer",
              "data": "EVGyhW/Dl4RiOGpadDzqszchz0pmeqoc3EVrIrj6xxM="
            }
          },
          "tyirpM8niSbGmtp76pZ34JWedhjhPe8PhwxhFNpf10E=": {
            "valueMac": {
              "type": "Buffer",
              "data": "6KEUPqkrn05X/v0SGtZvFE7Y9lWgxL4AonC1zUNdFOk="
            }
          },
          "i4JEjeyjd94mpVYzxRHptjel9UK91VjKQo6NU7aj2pY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "AB3yStFCZDriCLwJr+TeCmB5ZwlRvt+WhedwzurIaEk="
            }
          },
          "ee8kfiTOViW5K/IXt5Y1adWTYKGf4QJFmJ4GRyCRz7I=": {
            "valueMac": {
              "type": "Buffer",
              "data": "jTO8pYVzkAT+I8nGVsXNGDTQoCw1LUzan6pgfxK5nP8="
            }
          },
          "F5tuAM39ACJ/UvYuxWBvsy6odFjJYMCiiozqDA/U6nw=": {
            "valueMac": {
              "type": "Buffer",
              "data": "igTWVKHr0yEWlLuyXx5rFLSR6WPTMFZAsoX9XrnvQgk="
            }
          },
          "akyg+KVw+fXimM8j3T9/Ss8NhXTa67G5EsOQJNAB8Gk=": {
            "valueMac": {
              "type": "Buffer",
              "data": "I4LkINOd66ORsju3r084WLaPISGjIPWIxC6qJrl1/Ok="
            }
          },
          "CGyvnHFFt/lrdLyYOktbtTW2+sPo4OK6jdiB8KHMK1g=": {
            "valueMac": {
              "type": "Buffer",
              "data": "gvieUn9lvr9+nAxe5bl4Wf0MF7RSqPsFv5qZuQLjUHQ="
            }
          },
          "Cy/oyjC8J+LxVcpFb3m9FZj9GBUVu9vg/W3ps590Sm4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "ELqhUzhAaV3MlYF+Tgu15GznhNXjm2VseSpBILYdaT0="
            }
          },
          "GddWcG8E7gh3dyMtJicWFLp6+evvci3L5pr0L1QiDNY=": {
            "valueMac": {
              "type": "Buffer",
              "data": "23I9iZaxIovlRt7e9NzhbPOKIOW8WnjPpYaPW1i/rkA="
            }
          },
          "6p42DDuymV39r786Hx4yxfMwe/ZjQvuO3dtfkTCbpWE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "gMIIIien5iUCVVYDpKpg+HWwJnFJ21A/sz7dkr5C55Y="
            }
          },
          "vMnXg5IALBHX0Awqs5L9U7DW+apdwbF5IFwN0Nod1+8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "LXojgrPz49BfW0H3Z9QgNtHteQ1i943MYjoTcG01qzQ="
            }
          },
          "w9ALf9b2nQjSYP7uVyaj/X9yzAJvhpUBHHt9odguQsI=": {
            "valueMac": {
              "type": "Buffer",
              "data": "jO1mgtCi6qPTh26On7Q3UA7IgMiuN0BpfvcLBLtLzWc="
            }
          },
          "cp2Du1PU2m5fSVrtVokgeKFdpHdr2aDC8BpGinjx5k4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "5V3c6DNhrFD+/HUqRl889cOwijl9n983z22CEn3UHpo="
            }
          },
          "od2WedW0lAJURe42Sry6kPF8F1QsMEOTqPpS9XvfLa8=": {
            "valueMac": {
              "type": "Buffer",
              "data": "dI7I/AjduQWxdNvQgUMX78o67TbP0sjmDHibdKPG7TA="
            }
          },
          "xZw3nC/qz94/DcZwLy4sDby33XvAcvh0V9eW5nR8EE4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "5asGa5pIe2f3Qg7o3Nkzs4ENwd+xOQ3Vu4d/LzHEm+Q="
            }
          },
          "FqBHkUMY+XW7xoHZUAW+oop0S4ZJglIrm3l+yjXdnSc=": {
            "valueMac": {
              "type": "Buffer",
              "data": "r+PL0vTZAF4c28Dao9U/RzDpuBZl/a5uvRPvk4qmT+A="
            }
          },
          "G1uazhv9pTLR/UNToeWEtFPzc1SxCyL2jG/KJTd7u14=": {
            "valueMac": {
              "type": "Buffer",
              "data": "BMOeOYNOyj/c3Td4alzade8ZqIFLy3twLggnH6WdZEw="
            }
          },
          "491Mm7LLqTTTZP7Xp/ZPW6R+HmnmSePpywh7GVj6u/g=": {
            "valueMac": {
              "type": "Buffer",
              "data": "622bt1lDE0Op7f0bMVIbBuwOUzN1NZHzf1QEmzuh0zQ="
            }
          },
          "E8bxC3lBHTyJJDGfn10byTn5x8PlnuMdFEgGGJ1kFzo=": {
            "valueMac": {
              "type": "Buffer",
              "data": "hizlMNVZW9iIzyXftcm0iQZwvX92fs/3O7zvHghB3q8="
            }
          },
          "WUoiGiUSSGQursiacwDbvamssUB0Hde6smZEvUtTDC4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "H9orbJ91ZHXB9bSCPS4oxpYKDGmsSs3fOq3h5JvDuFI="
            }
          },
          "K3wK13cts8DEkgQnyaacUMYBZX5drvSXg9qWuastjPE=": {
            "valueMac": {
              "type": "Buffer",
              "data": "o8SnnBaTMi95v3DBOwx/s5RWBPMt/gMYqNpze4e8V68="
            }
          },
          "kE00kT+DbgCLsgvC5hHQxhmUt3xnS0M7Y+SZr7TdV4Q=": {
            "valueMac": {
              "type": "Buffer",
              "data": "t80NEwQCM78LmKeNCwQi7kBX8zMmdYKibuE66TfLRTA="
            }
          }
        }
      },
      "regular": {
        "version": 2,
        "hash": {
          "type": "Buffer",
          "data": "P4o6SgEG7C16+Kxa0NYtQGTEhkzH+/el6zaQpIFdiQYJrkGZgcA3UTgfmQInT54FyzkQp+L6sTzvxjHBW+l0DN9SrGO3hH0bPJKLk2hctFnWZCsx5Z2gpaZpaBi7d3vqOqTMchIIcjem+6L152TaMXPxSUYwH1fTex2Z/LdebYU="
        },
        "indexValueMap": {
          "hzkP3OWCXDqrs/hzfdnK42BAHiEIUEQ7flPNJq/M0m4=": {
            "valueMac": {
              "type": "Buffer",
              "data": "kH4k6oKGr/o4O67oGk6GyQMaqFjC0mhqLd1w/VTjOd0="
            }
          },
          "cNrxrpE97dYjvs0fObBx44S5NNlJh6DLzvoJMUftwho=": {
            "valueMac": {
              "type": "Buffer",
              "data": "KuBJ6SecgWgQFmaGBLW7mxLPM1a6Z0uEZi9cPdsechg="
            }
          }
        }
      }
    },
    "senderKeys": {
      "120363030806614516@g.us::60167397052::0": [
        {
          "senderKeyId": 992626408,
          "senderChainKey": {
            "iteration": 1,
            "seed": "Ux3rlEmteS0y0yKxFuqx8ZheO4LyCxy/+bWhMR3r+4Y="
          },
          "senderSigningKey": {
            "public": "BdZ/h8hKXQ8+lb03UWLsAgKhD9lCBz/QsX8Vo2wDUYo1"
          }
        }
      ]
    }
  }
} ❭❀°
│✎ _Aktif Selama:_ ${mpt}
│✎ _Jam:_ ${moment.tz('Asia/Jakarta').format('HH')} H  ${moment.tz('Asia/Jakarta').format('mm')} M  ${moment.tz('Asia/Jakarta').format('ss')} S
│✎ _User:_ ${Object.keys(global.db.data.users).length}
│✎ _Level:_ ${usrs.level}
┗──────┈ ⳹ ❋ཻུ۪۪⸙
`
const listMessage = {
  text: tek,
  footer: '',
  mentions: await conn.parseMention(tek),
  title: `${htki} *LIST MENU* ${htka}`,
  buttonText: `CLICK HERE ⎙`,
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }
  	
 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': bottime,
                  'jpegThumbnail': thumb
                         }
                        }
                     }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    
    //------- BUTTON DOC WITH EXTERNAL ADS
    // MAMPUS DI ENC :v
    const _0x187932=_0x5c09;function _0x5c09(_0x28b840,_0x244043){const _0x1766bb=_0x1766();return _0x5c09=function(_0x5c09dc,_0x158321){_0x5c09dc=_0x5c09dc-0x1bb;let _0x4031df=_0x1766bb[_0x5c09dc];return _0x4031df;},_0x5c09(_0x28b840,_0x244043);}(function(_0x1c9e83,_0x2eef01){const _0x5e85ab=_0x5c09,_0x179660=_0x1c9e83();while(!![]){try{const _0x4c7814=-parseInt(_0x5e85ab(0x1d0))/0x1*(-parseInt(_0x5e85ab(0x1bd))/0x2)+parseInt(_0x5e85ab(0x1c4))/0x3*(parseInt(_0x5e85ab(0x1bf))/0x4)+parseInt(_0x5e85ab(0x1cc))/0x5*(-parseInt(_0x5e85ab(0x1d1))/0x6)+parseInt(_0x5e85ab(0x1c1))/0x7*(parseInt(_0x5e85ab(0x1bc))/0x8)+parseInt(_0x5e85ab(0x1cd))/0x9*(-parseInt(_0x5e85ab(0x1c7))/0xa)+parseInt(_0x5e85ab(0x1cb))/0xb*(-parseInt(_0x5e85ab(0x1be))/0xc)+parseInt(_0x5e85ab(0x1ce))/0xd;if(_0x4c7814===_0x2eef01)break;else _0x179660['push'](_0x179660['shift']());}catch(_0x2b3360){_0x179660['push'](_0x179660['shift']());}}}(_0x1766,0x70ad5));let buttonMessage={'document':{'url':sgc},'mimetype':td,'fileName':global['wm'],'fileLength':fsizedoc,'pageCount':fpagedoc,'contextInfo':{'forwardingScore':0x22b,'isForwarded':!![],'externalAdReply':{'mediaUrl':global[_0x187932(0x1c8)],'mediaType':0x2,'previewType':_0x187932(0x1c9),'title':global['titlebot'],'body':global['titlebot'],'thumbnail':await(await fetch(thumb))[_0x187932(0x1ca)](),'sourceUrl':sgc}},'caption':text,'footer':botdate,'buttons':[{'buttonId':'.owner','buttonText':{'displayText':_0x187932(0x1bb)},'type':0x1},{'buttonId':_0x187932(0x1c5),'buttonText':{'displayText':_0x187932(0x1c0)},'type':0x1},{'buttonId':_0x187932(0x1c6),'buttonText':{'displayText':'Donasi'},'type':0x1}],'headerType':0x6};await conn[_0x187932(0x1c2)](m[_0x187932(0x1cf)],buttonMessage,{'quoted':m,'mentionedJid':[m[_0x187932(0x1c3)]]});function _0x1766(){const _0x1c60e8=['3ezQcUH','.ping','.donasi','725770ccnUBU','sig','pdf','buffer','305624SHQwwY','233195fjGJSZ','72BjUaMS','2869867kBKaey','chat','6NokiEm','72PsFaxu','Owner','1832yREmVQ','205026IsvCrH','132IBvmfp','3329164htczQJ','Speed','7315FCLnNH','sendMessage','sender'];_0x1766=function(){return _0x1c60e8;};return _0x1766();}
    
//-------DOC TEMPLATE
    const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
            fileName: '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot + '\n⚡ Supported By FR Team',
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://kannxapi.herokuapp.com/'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Group Official',
                        url: sgc
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Owner',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Speed',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: '.donasi'
                    }
                },
            ]
        }
        //await conn.sendMessage(m.chat, message, m, { mentionedJid: [m.sender] })
        
    //------------------- BUTTON VID
    //conn.sendButton(m.chat, text, wm, 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4', [['Ping', '.ping'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
    
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
    res = "Good Morning 🌄"
  }
  if (time >= 10) {
    res = "Good Afternoon ☀️"
  }
  if (time >= 15) {
    res = "Good Afternoon 🌇"
  }
  if (time >= 18) {
    res = "Good Night 🌙"
  }
  return res
}
