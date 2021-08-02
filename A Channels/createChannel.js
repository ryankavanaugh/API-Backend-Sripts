require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

// const appKEY = 'qaq9tzbfa59s'
// const secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
 
const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    // const chatClient = new StreamChat(key, secrett);
    const userID = "ryan";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);
    // console.log(chatClient.tokenManager);
    // const channel = chatClient.channel('messaging', 'WTest', {
    //     name: 'WatchTest',
    //     members: ['tyler'],
    // });

    const channel = chatClient.channel('messaging', 'Oranges', { 
        name: 'Oranges', 
        members: ['ryan', 'tyler', 'mike'],
        names: 'purple' 
    }); 
     
    await channel.create();  
    return channel
}

test().then((r) => console.log(r));