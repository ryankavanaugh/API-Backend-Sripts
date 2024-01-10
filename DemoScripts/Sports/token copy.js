require("dotenv").config({ path: __dirname + "/.env" });
const StreamChat = require("stream-chat").StreamChat;


Dkey = 'mxbvq7uep5pn'
Dsecret = 'srwn8j9hcyeexbhk9xyu6f27j5vwrw6fdzf5z9acuwx94rmq87etfrbfzuavj73e'

const userID = "AJ";

const test = async () => {
    const client = new StreamChat(Dkey, Dsecret);
    const token = client.createToken(userID);
    return token
}

test().then((r) => console.log(r));