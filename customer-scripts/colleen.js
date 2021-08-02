require("dotenv").config({ path: __dirname + "/.env" });
// const appKEY = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;
const appKEY = "dxqern5aqgne";
const secret = "fma68m5vdd6a3kj64be5ryefnmg54hjdymfseccvsmt95unr2f3ktanzzfzv6vzr";
// User ID is 6K39a3PQPqrr
// Channel IDs are KiYez4tpET, 5006s000001IQeKAAW
// checking if they are users of the channel
const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "brett";
    const token = chatClient.createToken(userID);
    // server to client side code
    // const set = await chatClient.setUser({id: userID}, token);

    const filter = { id: "group-chat-room-SkQ2r3NKr"};
    const sort = { last_message_at: -1 };
    const channel = await chatClient.queryChannels(filter, sort, {
        // watch: true,
        // state: true,
    });

    return channel[0];
}

test().then((r) => console.log(r));

