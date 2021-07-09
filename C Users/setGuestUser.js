require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const set = await chatClient.setGuestUser({id: 'michael'});
    return set;
}

test().then((r) => console.log(r));