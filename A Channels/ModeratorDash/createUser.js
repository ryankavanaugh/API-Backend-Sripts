require("dotenv").config({ path: __dirname + "/.env" });
const key = process.env["key"];
const secret = process.env["secret"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userName = "Ryan";
    const userID = userName;
    // const token = chatClient.createToken(userID);
    const token = chatClient.createToken(userID);
    console.log(token)
    // server to client side code
    const user = await chatClient.connectUser({id: userID, name: userName}, token);      
    return [user, token]
}

test().then((r) => console.log(r));