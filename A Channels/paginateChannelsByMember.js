require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const channels = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "tyler";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const filter = { members: { $in: ['ryan'] }, };
    const sort = { last_message_at: -1 };
    const channels = await chatClient.queryChannels(filter, sort, {
        limit: 1,
        offset: 0
    });

    // return channels[0].state.messages[0];
    return channels
}

channels().then((r) => console.log(r));