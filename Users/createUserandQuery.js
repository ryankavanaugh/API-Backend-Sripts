require("dotenv").config({ path: __dirname + "/.env" });
// const appKEY = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const appKEY = 'wpnc4r59rct7'
const secret = 'nmggpn8tkjb52nfzqdzqme7gh3m4mgqthvwnbejkv264394zft6qw9qsb393jnn6'
 
const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    await chatClient.updateAppSettings({auto_translation_enabled: true});
    // const chatClient = new StreamChat(key, secrett);
    const userID = "Luke";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser(
        {
            id: userID,
            name: "Luke"
        }, 
        token);
        return set

        const response = await chatClient.queryUsers({ username: { $autocomplete: '' } });

        return response

}

test().then((r) => console.log(r));