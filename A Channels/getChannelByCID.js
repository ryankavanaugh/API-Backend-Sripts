require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const appKEY2 = '2tujv8sc97bn'
const secret2 = 'nvdryvse66q83uzbmxuymhcf6k4fhmay4fds4q777c5cq82rxkpcge9chcpyh8db'


const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "ryan";

    const userID2 = 'b3cdf62c56d99c8c34235a31b6062f24';
    const filter2 = {cid: "messaging:forum_3_610af82b08cda"};
    const filter3 = { members: { $in: [userID2] } };
    
    return channel[0]

}

test().then((r) => console.log(r));

