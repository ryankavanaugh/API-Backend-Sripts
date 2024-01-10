require("dotenv").config({ path: __dirname + "/.env" });
// const key = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const key = 'x595terv4p22';
const secret = 'knmjmhh6uxxe6khxtzaaxjp9vawmqskyxwhyrm86jd4vkjcjgkbk69uvc3c37tpr';

const channels = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "246fe052-d9f2-4904-97a8-8bcc570f757f";
    const token = chatClient.createToken(userID);
    const set = await chatClient.connectUser({id: userID}, token);
    const filter = { type: 'messaging', members: { $in: ['246fe052-d9f2-4904-97a8-8bcc570f757f'] } }; 
    const sort = [{ last_message_at: -1 }]; 
    const channels = await chatClient.queryChannels(filter, sort, {    
        watch: true,
        state: true, 
    }); 

    // return messages from a sender
    return channels
}

channels().then((r) => console.log(r));