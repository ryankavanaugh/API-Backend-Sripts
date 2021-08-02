require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "ryan";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.setUser({id: userID}, token);

    const filter = {
        type: "messaging",
        $and: [
          {
            last_message_at: {
              $gt: "2020-08-10T16:01:49.27673Z",
            },
          },
          {
            last_message_at: {
              $lt: "2021-10-10T14:34:43.896532Z",
            },
          },
        ],
      };


    const sort = { last_message_at: -1 };
    const channels = await chatClient.queryChannels(filter, sort, {
        watch: true,
        state: true,
    });
    return channels;
}

test().then((r) => console.log(r));