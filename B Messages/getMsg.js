require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "tyler";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.setUser({id: userID}, token);

    // const sort = { last_message_at: -1 };

    // Get all channels with user as a member
    const filter = { members: { $in: [userID] } };
    const channels = await chatClient.queryChannels(filter, {
    });
    // Go through each channel
    for (i = 0; i < channels.length; i++) {
      // Go through each message on the channel
      for (x = 0; x < channels[i].state.messages.length; x++){
      // If the user isn't the one who sent the message 
      if (channels[i].state.messages[x].user.id != userID) {
      // Do whatever actions you want here. This returns message text 
      console.log(channels[i].state.messages[x].text);
      }
      }
    }
}

test().then((r) => console.log(r));