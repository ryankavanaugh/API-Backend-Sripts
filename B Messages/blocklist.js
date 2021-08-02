require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const client = new StreamChat(appKEY, secret);
// add a new block list for this app 
    // await client.createBlockList({ 
    // name: 'mo-cakes', 
    // words: ['blocklist!', 'fudge!', 'sugar', 'blockedword!'], 
    // }); 

    await client.updateBlockList('no-cakes', { 
        words: ['fudge', 'cream', 'sugar', 'blockedword!'], 
    });

    await client.updateBlockList('mo-cakes', { 
        words: ['fudge', 'cream', 'sugar', 'blockedword!'], 
    });
    
    // use the block list for all channels of type messaging 
    await client.updateChannelType('messaging', { 
        blocklist: 'mo-cakes',
        blocklist_behavior: 'block', 
    });

    return client.listBlockLists();
}

test().then((r) => console.log(r));