require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const client = new StreamChat(appKEY, secret);
    const filters = { members: { $in: ['ryan'] } }; 
 
    const search = await client.search( 
    filters, 
    'test', 
    { limit: 2, offset: 0 }, 
    );
    return search;    
    
}

test().then((r) => console.log(r));

