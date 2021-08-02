require("dotenv").config({ path: __dirname + "/.env" });
// const key = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const key = 'qaq9tzbfa59s'
const secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'

const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "ryan";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    // const filter = { cid: "messaging:F"};
    // const filter = {type: 'messaging', {}, shop_id: '43'};
    // const filter = { $or:[{ shop_id: '22', type: 'messaging'}, { members: { $in: ['ryan'] }, type:'messaging'} ] }
    const filter = { shopid: 'y'}
    const sort = { last_message_at: -1 };
    const channel = await chatClient.queryChannels(filter, sort, {
        // watch: true,
        // state: true,
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

    return channel;
}

test().then((r) => console.log(r));

