require("dotenv").config({ path: __dirname + "/.env" });
// const appKEY = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

appKEY = "sxkpbtu4jt98"
secret = "2ubzysk3arusbfr99bkrbk9yy8dvmu7jumh2xywgmgmwy6zws8atp6eeyd4v5pdm"

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "STORE_2";
    const userIDTwo = "STORE_18";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.setUser({id: userID}, token);

    const filter = { members : {$in : [userID]}};
    const type_filter = {type : 'your-chat-type'};
    const sort = { last_message_at: -1 };
    const channel = await chatClient.queryChannels(type_filter, sort, {
        watch: true,
        state: true,
    });
    return channel.countUnread();
}

test().then((r) => console.log(r));

