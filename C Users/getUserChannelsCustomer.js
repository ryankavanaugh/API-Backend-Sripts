require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const appSecret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;


const test = async () => {
    key = 'juz5j72pjuuu';
    secret = 'h8pr2au88yqt8h8ccqc2kp4eng42bdf6gzfjnm4fehsy8aj57yqvkc4kyemgct7d';
   
   
    const chatClient = new StreamChat(key, secret);
    const userID = "us-west-2_eAyV6uUmN_309a1ba7-9391-4915-b523-1439834842ae";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const filter = { members: { $in: [userID] } };
    const sort = { last_message_at: -1 };
    const channels = await chatClient.queryChannels(filter, sort, {
        // watch: true,
        // state: true,
    });
    // for (const c of channels) {
    //     console.log(c.custom.name, c.cid);
    // }
    return channels.length;
    // return channels.length;
}

test().then((r) => console.log(r));

