require("dotenv").config({ path: __dirname + "/.env" });
// const key = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;


const key = 'qaq9tzbfa59s'
const secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
 
// const key = '2xnd2gzg947b'
// const secret = '8w79ffwwxw5b6dayz9mrrwwuh534k952qz77nssejmtx7fmfqyv3m5gwkmzrd2s5'


const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "ryan";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const filter = { type: 'messaging', members: { $in: ['ryan'] } }; 
    const sort = [{ last_message_at: -1 }];
    const channels = await chatClient.queryChannels(filter, sort, { 
        message_limit: 800
    }); 

    // const filter = { id: "E"};
    // const sort = { last_message_at: -1 };
    // const channel = await chatClient.queryChannels(filter, sort, {
    //     // watch: true,
    //     // state: true,
    // });

// Script to get channel by id
// const channel = clientInformation.queryChannels({
//     id:
// })

    return channels
}

test().then((r) => console.log(r));

