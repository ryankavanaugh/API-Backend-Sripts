require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

// const key = 'qaq9tzbfa59s'
// const secrett = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
 
const test = async () => {
    // const chatClient = new StreamChat(appKEY, secret);
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "tyler";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.setUser({id: userID}, token);
    // console.log(chatClient.tokenManager);

    const channel = chatClient.channel('messaging', 'C', {
        name: 'C',
    });

    await channel.removeMembers(['ryan']);
    // const destroy = await channel.delete();
    // await channel.create();
    // return channel; 
    // return chatClient.configs  
    console.log(chatClient.configs)           
}

test().then((r) => console.log(r));


