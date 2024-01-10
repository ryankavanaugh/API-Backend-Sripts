// require("dotenv").config({ path: __dirname + "/.env" });
const StreamChat = require("stream-chat").StreamChat;
const api_key = 'qaq9tzbfa59s'
const api_secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'

const test = async () => {
    const chatClient = new StreamChat.getInstance(api_key, api_secret);
    const userID = "ryan";
    const token = chatClient.createToken(userID);

    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);
    const channel = chatClient.channel('messaging', 'ZZ', {});
    // await channel.create();
    const sentMessage = await channel.sendMessage(
        {
            text:  'test message text',
        },
        )
        console.log(sentMessage)
}

test().then((r) => console.log(r));