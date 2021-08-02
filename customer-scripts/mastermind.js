require("dotenv").config({ path: __dirname + "/.env" });
// const appKEY = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

appKEY = "ak53cyxp8mh4"
secret = "qvavrmej3frrvz26s8mure425mrr6rng2vrc7xtpab4j7s6jaw3hkvv335e66twd"

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    // const userID = "tyler";
    // const token = chatClient.createToken(userID);
    // // server to client side code
    // const set = await chatClient.setUser({id: userID}, token);

    const filter = { id: "mastermind-custom-messaging"};
    const sort = { last_message_at: -1 };
    const channel = await chatClient.queryChannels({}, sort, {
        // watch: true,
        // state: true,
    });
    const read = channel.markRead();

    return read;
}

test().then((r) => console.log(r));