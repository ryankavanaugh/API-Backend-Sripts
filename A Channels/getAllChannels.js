require("dotenv").config({ path: __dirname + "/.env" });
// const key = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;


const key = 'qaq9tzbfa59s'
const secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
 
// const key = '2xnd2gzg947b'
// const secret = '8w79ffwwxw5b6dayz9mrrwwuh534k952qz77nssejmtx7fmfqyv3m5gwkmzrd2s5'


const test = async () => {
    const filter = { type: 'messaging'};
const sort = [];
const channels = await client.queryChannels(filter, sort, {
  watch: false,
  state: true,
});  
return res.json(channels)
}



test().then((r) => console.log(r));

