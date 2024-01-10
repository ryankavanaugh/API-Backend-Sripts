require("dotenv").config({ path: __dirname + "/.env" });
// const key = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;


const key = '7tubw72zz6v3'
const secret = 'wfth972jjvdu58ba58yc8t7uwfpwzjeqjcyhwj86tncw7rq6pz94gq6fcuh8s39m'
 
// const key = '2xnd2gzg947b'
// const secret = '8w79ffwwxw5b6dayz9mrrwwuh534k952qz77nssejmtx7fmfqyv3m5gwkmzrd2s5'


const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "611b771e78538a5eba8879fc";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const filter = {cid: "messaging:611b771e78538a5eba8879fc"};
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

