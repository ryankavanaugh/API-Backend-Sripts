require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
        const messageFilters = { attachments: { $exists: true } }; 
        const response = await channel.search(messageFilters); 
        return response; 
}

test().then((r) => console.log(r));

