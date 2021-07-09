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

    const filter = { id: "indigo-people"};
    // const filter = { id: "channel-id"};
    // const filter = { cid: 'messaging:orange-people' };
    // const filter = { cid: channelCID };
    const sort = { last_message_at: -1 };
    const channel = await chatClient.queryChannels(filter, sort, {});
    // return channel[0].state._channel;
    return channel[0].data.member_count;

    // return channel;


}

test().then((r) => console.log(r));