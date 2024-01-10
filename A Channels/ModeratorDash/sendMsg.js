require("dotenv").config({ path: __dirname + "/.env" });
const key = process.env["key"];
const secret = process.env["secret"];
const StreamChat = require("stream-chat").StreamChat;


const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "Diego4";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);
    // console.log(chatClient.tokenManager);
    const channel = chatClient.channel('messaging', 'TexasHoldEm', {});
    // await channel.create();
    channel.addMembers
    const message = await channel.sendMessage(
        {
            text:  'Example complaint/profanity flagged message',
        },
    )

    const flag = await chatClient.flagMessage(message.message.id);

    return message   

}

test().then((r) => console.log(r));