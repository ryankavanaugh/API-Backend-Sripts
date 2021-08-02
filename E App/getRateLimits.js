require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicnlhbiJ9.ljkrJP-1rircRZb-xjY53EBgIOyo-53FgtEKotdSNFc';
    const chatClient = new StreamChat.getInstance(appKEY, secret);
    const limits = await chatClient.getRateLimits(); 
    return limits;
    // const userID = "ryan";
    // const token = chatClient.createToken(userID);
    // console.log(token)
    // server to client side code
    // const set = await chatClient.connectUser({id: userID}, token);

    // chatClient.connectUser()

}

test().then((r) => console.log(r));