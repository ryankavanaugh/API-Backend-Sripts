require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "ryan";
    const token = chatClient.createToken(userID);
    const set = await chatClient.connectUser({id: userID}, token);
    const channel = chatClient.channel("messaging", "F");
    await channel.create();
    const date = "2021-05-06T20:30:01.174Z";
    const filter = {
      created_at:{$gt:date}
      // last_message_at:{$gt:date}
    };
    const sort = {last_message_at:-1};
    // testChannel = channel.query(filter, sort, {})
    channelWithMessages = channel.query({
      messages: { animal: 'sea lion' },
    });
    return channelWithMessages
  } 

test().then((r) => console.log(r));



    // //CHANNEL
    // const channel = chatClient.channel("messaging", "F");
    // await channel.create
    // channel.search({created_at:{$gt:date}})


    // return channel.search({last_message_at:date})
    // // const sort = { last_message_at: {$lt:1620573710000}};
    // // // const sort = { last_message_at: -1 };