require("dotenv").config({ path: __dirname + "/.env" });
const key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "Ryan";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);
    const filter = {cid: "messaging:CALI"};
    const sort = [{ last_message_at: -1 }];
    const channels = await chatClient.queryChannels(filter, sort, {}); 
      
    // const result = await channel.query({}); 
    const destroy = await channels[0].delete(); 
    return destroy;
     
}
test().then((r) => console.log(r));


