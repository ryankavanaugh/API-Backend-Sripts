require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(appKEY);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicnlhbiJ9.ljkrJP-1rircRZb-xjY53EBgIOyo-53FgtEKotdSNFc'
    const userID = "ryan";
    // const token = chatClient.createToken(userID);
    // console.log(token)
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);
    // const filter = { cid: "messaging:indigo-people"};
    const filter = {}
    const sort = { last_message_at: -1 };
    const channel = await chatClient.queryChannels(filter, sort, {
        limit: 20, offset: 0,
        messages: { limit: 10 } 
    });
    return channel[3].state.messages;
}

test().then((r) => console.log(r));