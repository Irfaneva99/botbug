exports.tampilan = (ya, pushname, sender, isPrem, role, elit, namaownernya, namabotnya, runtime, tanggal, wib, wit, wita) => {
return `──────〇『 ${ya}Info User${ya} 』
➥ ${ya}Nama User${ya} : ${pushname}
➥ ${ya}Nomor User${ya} : ${sender.split("@")[0]}
➥ ${ya}User Premium${ya} : ${isPrem ? 'I͎y͎a͎' : 'T͎i͎d͎a͎k͎'}
➥ ${ya}Rank${ya} : ${role}
➥ ${ya}Status${ya} : ${elit}
─〇
──────〇『 ${ya}Info Bot${ya} 』
➥ ${ya}Nama Owner${ya} : ${namaownernya}
➥ ${ya}Nama Bot${ya} : ${namabotnya}
➥ ${ya}User Bot${ya} : ${Object.keys(global.db.data.users).length} User
➥ ${ya}Runtime Bot${ya} : ${runtime(process.uptime())}
➥ ${ya}Library${ya} : Baileys Multi Device
➥ ${ya}Tanggal${ya} : ${tanggal}
➥ ${ya}Wib${ya} : ${wib}
➥ ${ya}Wit${ya} : ${wit}
➥ ${ya}Wita${ya} : ${wita}
─〇`}