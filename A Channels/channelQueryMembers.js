require("dotenv").config({ path: __dirname + "/.env" });
// const appKEY = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const appKEY = 'qaq9tzbfa59s'
const secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "ryan";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);
    const filter = { cid: "messaging:F"};
    const sort = { last_message_at: -1 };
    // create a new channel of type “livestream” with name “watch-this-channel” 
    const channel = await chatClient.channel("messaging", "G").queryMembers({});   
    // now query the newly created channel for watchers, retrieving the first 5 
    // const result = await channel.queryMembers({}); 
    // const result = await channel.query({ 
    //    watchers: { limit: 5, offset: 0 }, 
    //  }); 
     return channel;
}
test().then((r) => console.log(r));