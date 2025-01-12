require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

// const appKEY = 'qaq9tzbfa59s'
// const secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "ryan";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);
    const channel = chatClient.channel('messaging', 'F', {});
    // await channel.create();
    const update = await channel.update( 
        { frozen: false },  
        { text: 'Thierry has frozen the channel', user_id: "tyler" } 
    )
    return message;              
}

test().then((r) => console.log(r));