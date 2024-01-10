require("dotenv").config({ path: __dirname + "/.env" });
const StreamChat = require("stream-chat").StreamChat;

const key = "ugach8ncqzkq";
const secret = "kgtvg5fzrqefug6f7ejxxbtnptajgxzvmg9vz96t4e4ts385q4cy36jn2zfu9byw";
const userID = "ryan";

const test = async () => {
    const client = new StreamChat(key, secret);
    const token = client.createToken(userID);
    return token
}

test().then((r) => console.log(r));