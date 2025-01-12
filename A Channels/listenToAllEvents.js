require("dotenv").config({ path: __dirname + "/.env" });
// const appKEY = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const appKEY = 'qaq9tzbfa59s'
const secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
 
const test = async () => {
    // chat client
    const chatClient = new StreamChat(appKEY, secret);
    // userID
    const userID = "ryan";
    // token
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);
    // console.log(chatClient.tokenManager);
    const channel = chatClient.channel('messaging', 'G', {
    });

    await channel.watch();

    channel.on(event => {
        console.log('event', event);
        console.log('channel.state', channel.state);
    });
    // return channel.state.read.ryan.last_read
}

test().then((r) => console.log(r));