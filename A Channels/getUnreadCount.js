require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "tyler";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.setUser({id: userID}, token);

    const filter = { members: { $in: ['tyler'] }, };
    // const sort = { has_unread: -1 };
    // const sort = [{ last_message_at: -1 }, { has_unread: -1 }]
    const sort = [{ has_unread: -1 }, { last_message_at: -1 }];
    // const sort = [{ last_message_at: -1 }]
    const channels = await chatClient.queryChannels(filter, sort, {
        watch: true,
        state: true,
    });
    return channels;
}

test().then((r) => console.log(r));