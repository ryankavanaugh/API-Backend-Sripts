require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;


const test = async () => {
    const chatClient = new StreamChat(appKEY);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibWlrZSIsImV4cCI6MTYyMDIyNzU5OH0.WvatnQUG14h0Fe4FU0DUjvniGMOAEhIV1549OBEQqM4';
    const userID = "mike";
    const userName = 'A real one'
    // const token = chatClient.createToken(userID);
    // const token = chatClient.createToken(userID, Math.floor(Date.now() / 1000) + (60 * 15));
    // server to client side code
    const user = await chatClient.connectUser({id: userID}, token);      
    return [user]
    return user.name
}

test().then((r) => console.log(r));