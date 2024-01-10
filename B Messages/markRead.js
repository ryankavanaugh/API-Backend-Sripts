require("dotenv").config({ path: __dirname + "/.env" });
// const appKEY = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];

const StreamChat = require("stream-chat").StreamChat;
const appKey = 'qaq9tzbfa59s'
const secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'

const test = async () => {
    const chatClient = new StreamChat(appKey, secret);
    const channel = chatClient.channel('messaging', 'G', {});
    const userID = "ryan";
    await channel.markRead({ user_id: "ryan" });
    // const token = chatClient.createToken(userID);
    // // server to client side code
    // const set = await chatClient.connectUser({id: userID}, token);
    // return res

}

test().then((r) => console.log(r));






   // const token = chatClient.createToken(userID);
    // server to client side code
    // const set = await chatClient.connectUser({id: userID}, token);
    // console.log(chatClient.tokenManager);