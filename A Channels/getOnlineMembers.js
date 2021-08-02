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

    const filter = { id: "easy-chat"};
    const sort = { last_message_at: -1 };
    const channel = await chatClient.queryChannels(filter, sort, {
        watch: true,
        state: true,
    });

    // Use water_count!!

// Script to get channel by id
// const channel = clientInformation.queryChannels({
//     id:
// })

    return channel;
}

test().then((r) => console.log(r));

