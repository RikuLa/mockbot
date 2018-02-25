import Telegraf from 'telegraf'
import dotenv from 'dotenv'
import memefy from './util/memefy'

dotenv.config()

const { BOT_ACCESS_TOKEN, imgFlip_username, imgFlip_password } = process.env

const bot = new Telegraf(BOT_ACCESS_TOKEN)

bot.on('message', async context =>{
  let memed = ''
  const message = context.message.text.trim()
  if(message) {
    memed = await memefy(message, imgFlip_username, imgFlip_password)
  } else {
    context.reply('Please provide a text')
  }
  try {
    await context.replyWithPhoto(memed)
  }catch(e) {
    console.error(e) /* eslint-disable-line no-console*/
  }
})

bot.startPolling()
