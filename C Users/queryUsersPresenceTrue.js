require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;


const test = async () => {
    const client = new StreamChat(appKEY, secret);

    client.queryUsers({},{},{presence: true});
}

test().then((r) => console.log(r));