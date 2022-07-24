const fs = require('fs')
const chalk = require('chalk')

global.premium = ['6285791677204']
global.packname = 'CEMAS KAU DEK BEK BEK BEK'
global.author = '© IRFANFF9'
global.sessionName = 'session'
global.namabotnya = 'IRFANBOT - MD'
global.namaownernya = 'IRFANFF9'
global.dapkey = 'Kirbotz123'
global.lolkey = 'FαυȥყRêålz`𐁘'
global.kirkey = 'KirBotz'
global.wame = 'https://wa.me/6289510497533'
global.gckirbotz = 'https://chat.whatsapp.com/JZObD0euUnF2UknDp1UDn8'
global.ownerNumber = ["6289510497533@s.whatsapp.net"]
global.email = 'irfanbotwa@gmail.com'
global.yt = 'https://youtube.com/channel/UCB2FsP3zAMlcfRz7iVs2D6A'
global.webkir = 'irfanff9-ipan.vercel.app'
global.githubkir = 'https://github.com/irfanff9'
global.region = 'IPAN SUHU'
global.prefa = ['','!','.','#','-','•']
global.mess = {
    success: 'Success 💯',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Kak Silahkan Chat Owner',
    wait: '❗Waittt...',
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    wrongFormat: 'Format salah, coba liat lagi di menu',
}


global.limitawal = {
    premium: "Infinity",
    free: 5
}

global.thumb = fs.readFileSync('./Image/kirbotz.jpg')
global.thumbdm = fs.readFileSync('./Image/diamond.jpg')
global.thumbrpg = fs.readFileSync('./Image/kirbotzrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')
global.sticknya = fs.readFileSync('./Kir/JANGANDIUBAH/fuck.webp')

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
