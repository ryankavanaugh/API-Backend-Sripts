const StreamChat = require("stream-chat").StreamChat;

const app_key = "qpn9d97jqw3u"
const secret = "nu4vm3nzv4crpqjwwnu4yjqh46yn24qsz8g4bbgveu4zjg44cch7tagshkzkenbv";
const user_id = "1649752";
const serverClient = new StreamChat(app_key, secret, {
  timeout: 3000,
});

const chatClient = StreamChat.getInstance(app_key);

const doThings = async () => {
  let sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)  

  
  const filters = {
    type: 'messaging',
    $and: [
      { new_match: { $eq: true } },
      { archived: { $exists: false } },
      { created_at: { $lt: sevenDaysAgo.toISOString()} },
      { member_count: { $eq: 2 } },
    ]
  }
  

  return await serverClient.queryChannels(filters, {}, {limit: 30})
}

doThings().then(res => console.log(res.length))