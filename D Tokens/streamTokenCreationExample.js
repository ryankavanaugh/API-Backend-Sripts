const StreamChat = require("stream-chat").StreamChat;

const key = "KEY";
const secret = "SECRET";
const userID = "USERNAME";

const test = async () => {
    const client = new StreamChat(key, secret);
    const token = client.createToken(userID);
    return token
}

test().then((r) => console.log(r));