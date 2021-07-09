require("dotenv").config({ path: __dirname + "/.env" });
const key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    // const chatClient = new StreamChat(appKEY, secret);
    const chatClient = new StreamChat(key, secret);
    userID = 'patrick-env_5641'
    // const response = await chatClient.queryUsers({id: {$in: ['ryan']}});
    const response = await chatClient.queryUsers({name: { $autocomplete : 'tyler' }});

    return response
}

test().then((r) => console.log(r));