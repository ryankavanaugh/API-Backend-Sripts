require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "ryan";
    const token = chatClient.createToken(userID);
    // server to client side code

    const set = await chatClient.connectUser({id: userID}, token);
    // console.log(chatClient.tokenManager);
    const channel = chatClient.channel('messaging', 'indigo-people', {
        name: 'New Chat',
        image: 'http://bit.ly/2O35mws',
        members: ['ryan', 'tyler'],
    });
    
    // await channel.watch();
    const message = await channel.sendMessage(
        {
            text: "808",
            mentioned_users: [userID],
        },
    )
    return channel.state.messages;              
}

test().then((r) => console.log(r));

// nodemon setUser.js
// shift option f = format code