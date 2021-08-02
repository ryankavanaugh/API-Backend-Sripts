require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "ryan";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.setUser({id: userID}, token);
    // console.log(chatClient.tokenManager);
    const channelName = process.argv[2];
    const channel = chatClient.channel('messaging', channelName, {});
    await channel.create();
    await channel.truncate();
    return channel;              
}

test().then((r) => console.log(r));

// 
// const trunc = await conversation.truncate();
                    