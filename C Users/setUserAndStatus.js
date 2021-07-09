require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;


const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userName = "mike";
    const userID = userName;
    const token = chatClient.createToken(userID);
    // server to client side code
    const user = await chatClient.setUser({id: userID, name: userName, status: 'eating a hot dog!'}, token);      
    return user
}

test().then((r) => console.log(r));