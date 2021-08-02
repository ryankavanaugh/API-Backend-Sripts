require("dotenv").config({ path: __dirname + "/.env" });
const key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const channels = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "1";
    const token = chatClient.createToken(userID);
    const set = await chatClient.connectUser({id: userID}, token);
    const filter = { type: 'messaging', members: { $in: ['1'] } }; 
    const sort = [{ last_message_at: -1 }]; 
    const channels = await chatClient.queryChannels(filter, sort, {    
        watch: true, // this is the default 
        state: true, 
    }); 

    // return messages from a sender
    return channels
}

channels().then((r) => console.log(r));