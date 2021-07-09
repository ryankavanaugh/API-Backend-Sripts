require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;



const test = async () => {

    const key = 'sj7bxfm32894'
    const secret =  'js9wvfdcrj4rsjwv77ckp97tn95puenta6dfevgw8ufgs8abcr9afwxbdag65btk'


    // const chatClient = new StreamChat(appKEY, secret);
    const chatClient = new StreamChat(key, secret);
    userID = 'patrick-env_5641'
    // const response = await chatClient.queryUsers({id: {$in: ['ryan']}});
    const response = await chatClient.queryUsers({id: {$in: [userID]}});

    // Return all info
    // return response

    // Return teams
    return response.users[0];
}

test().then((r) => console.log(r));