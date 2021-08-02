require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "tyler";
    const token = chatClient.createToken(userID);
    await chatClient.deleteMessage('4e1b43ee-738b-4bea-b57f-daeaa408ef0f', true);


    // // server to client side code
    // const set = await chatClient.connectUser({id: userID}, token);
    // // console.log(chatClient.tokenManager);
    // const channel = chatClient.channel('messaging', 'pineapple-people', {
    //     // name: 'New Chat',
    //     // image: 'http://bit.ly/2O35mws',
    //     // members: ['ryan', 'tyler'],
    // });
    // await channel.create();
    // await chatClient.deleteMessage('4e1b43ee-738b-4bea-b57f-daeaa408ef0f', true);
    // return channel;              
}

test().then((r) => console.log(r));