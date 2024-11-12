

const key = "xfyrhz6nwwxz";
const secret = "dmpt85ud2kfejnb9ymrwmfeya7ev43y29wcg2fa3vqca8mgs7xu66nsbmszmrkqk";
const userID = "Steve";

const StreamChat = require("stream-chat").StreamChat;


const test = async () => {
    const userID = "Steve";
    const client = new StreamClient(key, secret);
    const token = client.createToken(userID);
    return token
}

test().then((r) => console.log(r));