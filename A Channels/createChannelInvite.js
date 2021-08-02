require("dotenv").config({ path: __dirname + "/.env" });
// const appKEY = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const appKEY = 'qaq9tzbfa59s'
const secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
 
const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    // const chatClient = new StreamChat(key, secrett);
    const userID = "tyler";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);
    // console.log(chatClient.tokenManager);
    const invite = chatClient.channel('messaging', 'Invite', {
        name: 'Invite',
        members: ['tyler'],
        invites: ['ryan'], 
    }); 
     
    await invite.create();
    return invite        
}

test().then((r) => console.log(r));