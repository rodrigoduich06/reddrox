import fetch from 'node-fetch';
import axios from 'axios';
import yts from 'yt-search';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import ytdl from 'ytdl-core';
import {bestFormat, getUrlDl} from '../lib/y2dl.js';
import YTDL from "../lib/ytdll.js";
import fs from "fs";
let limit1 = 100;
let limit2 = 400;
let limit_a1 = 50;
let limit_a2 = 400;
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
  if (!text) throw [❗] 𝐅𝐚𝐥𝐥𝐨, 𝐏𝐫𝐢𝐦𝐞𝐫𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐥𝐚 𝐦𝐮𝐬𝐢𝐜𝐚 \n\n—◉ 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:\n${usedPrefix + command} 𝐍𝐞𝐤𝐨𝐳𝐢𝐥𝐥𝐚;
  try {
    const yt_play = await search(args.join(' '));
    let additionalText = '';
    if (command === 'play') {
      additionalText = '𝐀𝐮𝐝𝐢𝐨 🔊';
    } else if (command === 'play2') {
      additionalText = '𝐕𝐢𝐝𝐞𝐨 🎥';
    }
    const texto1 = `🐺𝗟𝗼𝗯𝗼-𝗕𝗼𝘁-𝗠𝗗🐺
☆ 📑 𝐓𝐢𝐭𝐮𝐥𝐨: ${yt_play[0].title}
☆ 🎼 𝐃𝐮𝐫𝐚𝐜𝐢𝐨𝐧: ${secondString(yt_play[0].duration.seconds)}
☆ 🗓 𝐕𝐢𝐬𝐭𝐚𝐬: ${${MilesNumber(yt_play[0].views)}}
☆ 🖋 𝐀𝐮𝐭𝐨𝐫: ${yt_play[0].author.name}
☆ 🎞 𝐂𝐚𝐧𝐚𝐥: ${yt_play[0].author.url}
☆ 📄 𝐋𝐢𝐧𝐤: ${yt_play[0].url}\n
☆ _𝙴𝙽𝚅𝙸𝙰𝙽𝙳𝙾 ${additionalText}, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽𝙾𝚂 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂．．．_\n𝕷𝖔𝖇𝖔-𝕭𝖔𝖙-𝕸𝕯`.trim();
    conn.sendMessage(m.chat, {image: {url: yt_play[0].thumbnail}, caption: texto1}, {quoted: m});
    if (command == 'play') {
    try {    
    const q = '128kbps';
    const v = yt_play[0].url;
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.audio[q].download();
    const ttl = await yt.title;
    const size_Api = await yt?.size;
    const sizeApi = size_Api?.replace('MB', '')?.replace('GB', '')?.replace('KB', '')   
    const sex = await getBuffer(dl_url)
    const fileSizeInBytes = sex.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const size = fileSizeInMB.toFixed(2);    
    if (size >= limit_a2) {  
    await conn.sendMessage(m.chat, {text: *[ ✔ ] Descargue su audio en ${dl_url}*}, {quoted: m});
    return;    
    }     
    if (size >= limit_a1 && size <= limit_a2) {  
    await conn.sendMessage(m.chat, {document: sex, mimetype: 'audio/mpeg', fileName: ttl + .mp3}, {quoted: m});   
    return;
    } else {
    await conn.sendMessage(m.chat, {audio: sex, mimetype: 'audio/mpeg', fileName: ttl + .mp3}, {quoted: m});   
    return    
    }} catch {
    try {      
    let info = await ytdl.getInfo(yt_play[0].videoId);
    let format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
    let buff = ytdl.downloadFromInfo(info, { format: format });
    let bufs = []
        buff.on('data', chunk => { bufs.push(chunk) })
        buff.on('end', async () => {
    let buff = Buffer.concat(bufs)
    conn.sendMessage(m.chat, {audio: buff, fileName: yt_play[0].title + '.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
    })} catch {
    await YTDL.mp3(yt_play[0].url).then(async (s) => {
    await conn.sendMessage(m.chat, {audio: fs.readFileSync(s.path), mimetype: "audio/mpeg", fileName: ${s.meta.title || "-"}.mp3,}, {quoted: m});
    await fs.unlinkSync(s.path)});
    }
  }
}
    if (command == 'play2') {
    try {  
    const qu = '360';
    const q = qu + 'p';
    const v = yt_play[0].url;
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.video[q].download();
    const ttl = await yt.title;
    const size_Api = await yt?.size;
    const sizeApi = size_Api?.replace('MB', '')?.replace('GB', '')?.replace('KB', '')   
    const sex = await getBuffer(dl_url)
    const fileSizeInBytes = sex.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const size = fileSizeInMB.toFixed(2);    
    if (size >= limit2) {  
    await conn.sendMessage(m.chat, {text: *[ ✔ ] Descargue su video en ${dl_url}*}, {quoted: m});
    return;    
    }     
    if (size >= limit1 && size <= limit2) {  
    await conn.sendMessage(m.chat, {document: sex, mimetype: 'video/mp4', fileName: ttl + .mp4}, {quoted: m});   
    return;
    } else {
    await conn.sendMessage(m.chat, {video: sex, mimetype: 'video/mp4', fileName: ttl + .mp4}, {quoted: m});   
    return;    
    }} catch {
    const formats = await bestFormat(yt_play[0].url, 'video');
    const buff = await getBuffer(formats.url);
    const ttl_1 = ${yt_play[0].title ? yt_play[0].title : 'Tu_video_descargado'};
    const fileSizeInBytes = buff.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const roundedFileSizeInMB = fileSizeInMB.toFixed(2);
    await conn.sendMessage(m.chat, {video: buff, fileName: ttl_1 + '.mp4', mimetype: 'video/mp4'}, {quoted: m});
    }      
  }
} catch (error) {
    console.log(error)
    throw '[❗] 𝐅𝐚𝐥𝐥𝐨,𝐈𝐧𝐭𝐞𝐧𝐭𝐚 𝐦𝐚𝐬 𝐭𝐚𝐫𝐝𝐞.';
  }
};
handler.help = ['play', 'play2'].map((v) => v + ' < busqueda >');
handler.tags = ['downloader'];
handler.command = /^(play|play2)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(${bytes} ${sizes[i]});
    resolve(${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]});
  });
}

const getBuffer = async (url, options) => {
    options ? options : {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1,}, ...options, responseType: 'arraybuffer'});
    return res.data;
};

/*import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
i𝙻{bestFormat, getUrlDl} from '../lib/y2dl.js';
import YTDL from "../lib/ytdll.js";
import fs from "fs";
let limit1 = 100;
let limit2 = 400;
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
  if (!text) throw [❗]𝐅𝐚𝐥𝐥𝐨, 𝐩𝐫𝐢𝐦𝐞𝐫𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐥𝐚 𝐦𝐮𝐬𝐢𝐜𝐚\n\n—◉ 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:\n*${usedPrefix + command} 𝐅𝐞𝐫𝐧𝐚𝐧𝐟𝐥𝐨𝐰 - 𝐫𝐚𝐩;
  try {
    const yt_play = await search(args.join(' '));
    let additionalText = '';
    if (command === 'play') {
      additionalText = '𝐀𝐮𝐝𝐢𝐨 🔊';
    } else if (command === 'play2') {
      additionalText = '𝐕𝐢𝐝𝐞𝐨 🎥';
    }
    const texto1 = ``reddrox
☆ 📑 𝐓𝐢𝐭𝐮𝐥𝐨: ${yt_play[0].title}
☆ 🎼 𝐃𝐮𝐫𝐚𝐜𝐢𝐨𝐧: ${secondString(yt_play[0].duration.seconds)}
☆ 🗓 𝐕𝐢𝐬𝐭𝐚𝐬: ${${MilesNumber(yt_play[0].views)}}
☆ 🖋 𝐀𝐮𝐭𝐨𝐫: ${yt_play[0].author.name}
☆ 🎞 𝐂𝐚𝐧𝐚𝐥: ${yt_play[0].author.url}
☆ 📄 𝐋𝐢𝐧𝐤: ${yt_play[0].url}\n
☆ _𝙴𝙽𝚅𝙸𝙰𝙽𝙳𝙾 ${additionalText}, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽𝙾𝚂 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂．．．_\n𝕷𝖔𝖇𝖔-𝕭𝖔𝖙-𝕸𝕯`.trim();
    conn.sendMessage(m.chat, {image: {url: yt_play[0].thumbnail}, caption: texto1}, {quoted: m});
    if (command == 'play') {
      try {      
          await YTDL.mp3(yt_play[0].url).then(async (s) => {
          await conn.sendMessage(m.chat, {audio: fs.readFileSync(s.path), mimetype: "audio/mpeg", fileName: ${s.meta.title || "-"}.mp3,}, {quoted: m});
          await fs.unlinkSync(s.path)});
      } catch {
      try {
        let info = await ytdl.getInfo(yt_play[0].videoId);
        let format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
        let buff = ytdl.downloadFromInfo(info, { format: format });
        let bufs = []
        buff.on('data', chunk => {
          bufs.push(chunk)
        })
        buff.on('end', async () => {
          let buff = Buffer.concat(bufs)
          conn.sendMessage(m.chat, {audio: buff, fileName: yt_play[0].title + '.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
        })
      } catch {
      try {
        const formats = await bestFormat(yt_play[0].url, 'audio');
        const dl_url = await getUrlDl(formats.url);
        const buff = await getBuffer(dl_url.download);
        conn.sendMessage(m.chat, {audio: buff, fileName: yt_play[0].title + '.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
      } catch (errors) {
        console.log(errors);
        try {
          const q = '128kbps';
          const v = yt_play[0].url;
          const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
          const dl_url = await yt.audio[q].download();
          const ttl = await yt.title;
          const size = await yt.audio[q].fileSizeH;
          await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, {mimetype: 'audio/mpeg'});
        } catch {
          try {
            const dataRE = await fetch(https://api.akuari.my.id/downloader/youtube?link=${yt_play[0].url});
            const dataRET = await dataRE.json();
            conn.sendMessage(m.chat, {audio: {url: dataRET.mp3[1].url}, fileName: yt_play[0].title + '.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
          } catch {
            try {
              const humanLol = await fetch(https://api.lolhuman.xyz/api/ytplay?apikey=${lolkeysapi}&query=${yt_play[0].title});
              const humanRET = await humanLol.json();
              conn.sendMessage(m.chat, {audio: {url: humanRET.result.audio.link}, fileName: yt_play[0].title + '.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
            } catch {
              try {
                const lolhuman = await fetch(https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url});
                const lolh = await lolhuman.json();
                const n = lolh.result.title || 'error';
                await conn.sendMessage(m.chat, {audio: {url: lolh.result.link}, fileName: ${n}.mp3, mimetype: 'audio/mpeg'}, {quoted: m});
              } catch {
                try {
                  const searchh = await yts(yt_play[0].url);
                  const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
                  const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
                  const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
                  conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
                } catch {
                  await conn.reply(m.chat, '[❗]𝐅𝐚𝐥𝐥𝐨,𝐧𝐨 𝐬𝐞 𝐩𝐮𝐞𝐝𝐨 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐝𝐢𝐜𝐡𝐨 𝐚𝐮𝐝𝐢𝐨.', m);
                }
              }
            }
          }
        }
      }
    }
  }
}
    if (command == 'play2') {
  try {  
    const qu = '360';
    const q = qu + 'p';
    const v = yt_play[0].url;
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.video[q].download();
    const ttl = await yt.title;
    const size_Api = await yt?.size;
    const sizeApi = size_Api?.replace('MB', '')?.replace('GB', '')?.replace('KB', '')   
    const sex = await getBuffer(dl_url)
    const fileSizeInBytes = sex.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const size = fileSizeInMB.toFixed(2);    
    if (size >= limit2) {  
    await conn.sendMessage(m.chat, {text: [ ☑ ] 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐮𝐞 𝐞𝐥 𝐯𝐢𝐝𝐞𝐨 𝐞𝐧 ${dl_url}*}, {quoted: m});
    return    
    }     
    const cap = *◉—⌈📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥⌋—◉*\n\n❏ 𝐓𝐢𝐭𝐮𝐥𝐨: ${ttl}\n❏ 𝐏𝐞𝐬𝐨: ${size} MB.trim();
    if (size >= limit1 && size <= limit2) {  
    await conn.sendMessage(m.chat, {document: sex, caption: cap, mimetype: 'video/mp4', fileName: ttl + .mp4}, {quoted: m});   
    return
    } else {
    await conn.sendMessage(m.chat, {video: sex, caption: cap, mimetype: 'video/mp4', fileName: ttl + .mp4}, {quoted: m});   
    return    
    }      
   } catch (error) {
     console.log(error)
     throw '[❗]𝐅𝐚𝐥𝐥𝐨, 𝐧𝐨 𝐥𝐨𝐠𝐫𝐞 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐬𝐮 𝐯𝐢𝐝𝐞𝐨\nAndroid Download 👉: https://fontboard.page.link/share

iOS Download 👉: https://apps.apple.com/app/id1636254820.*';
  }
  try {
    const formats = await bestFormat(yt_play[0].url, 'video');
    const buff = await getBuffer(formats.url);
    const yt_1 = await youtubedl(yt_play[0].url).catch(async (_) => await youtubedlv2(yt_play[0].url));
    const ttl_1 = ${yt_1?.title ? yt_1.title : 'Tu_video_descargado'};
    const fileSizeInBytes = buff.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const roundedFileSizeInMB = fileSizeInMB.toFixed(2);
    await conn.sendMessage(m.chat, {video: buff, caption: *▢ Titulo:* ${ttl_1}\n*▢ Peso Del Video:* ${roundedFileSizeInMB} MB, fileName: ttl_1 + '.mp4', mimetype: 'video/mp4'}, {quoted: m});
 } catch {
  try {
    const qu = '360';
    const q = qu + 'p';
    const v = yt_play[0].url;
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = yt.video[q].download();
    const ttl = yt.title;
    const size = yt.video[q].fileSizeH;
    await conn.sendMessage(m.chat, {video: {url: dl_url}, fileName: ${ttl}.mp4, mimetype: 'video/mp4', caption: *▢ Titulo:* ${ttl}\n*▢ Peso Del Video:* ${size}, thumbnail: await fetch(yt.thumbnail)}, {quoted: m});
  } catch {
    try {
      const mediaa = await ytMp4(yt_play[0].url);
      await conn.sendMessage(m.chat, {video: {url: mediaa.result}, fileName: error.mp4, caption: _𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭_, thumbnail: mediaa.thumb, mimetype: 'video/mp4'}, {quoted: m});
    } catch {
      try {
        const lolhuman = await fetch(https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url});
        const lolh = await lolhuman.json();
        const n = lolh.result.title || 'error';
        const n2 = lolh.result.link;
        const n3 = lolh.result.size;
        const n4 = lolh.result.thumbnail;
        await conn.sendMessage(m.chat, {video: {url: n2}, fileName: ${n}.mp4, mimetype: 'video/mp4', caption: *▢ Titulo:* ${n}\n*▢ Peso Del Video:* ${n3}, thumbnail: await fetch(n4)}, {quoted: m});
        enviando = false
      } catch {
        throw '*[❗] Error, no fue posible descargar el video.*';
        }
      }}
    }}
  } catch {
    throw '*[❗] Error, por favor vuelva a intentarlo.*';
  }
};
handler.help = ['play', 'play2'].map((v) => v + ' < busqueda >');
handler.tags = ['downloader'];
handler.command = /^(play|play2)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(${bytes} ${sizes[i]});
    resolve(${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]});
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
      const tiny = await axios.get(https://tinyurl.com/api-create.php?url=${resultFix[0].audio});
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
      const tiny = await axios.get(https://tinyurl.com/api-create.php?url=${resultFix[0].video});
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}

const getBuffer = async (url, options) => {
    options ? options : {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1,}, ...options, responseType: 'arraybuffer'});
    return res.data;
};*/
