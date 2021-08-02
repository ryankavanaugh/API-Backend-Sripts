require("dotenv").config({ path: __dirname + "/.env" });
// const appKEY = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;
const key = 'xfyrhz6nwwxz';
const secret = 'dmpt85ud2kfejnb9ymrwmfeya7ev43y29wcg2fa3vqca8mgs7xu66nsbmszmrkqk';

const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "Ryan";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const channel = chatClient.channel('messaging', 'nashville', {});
    await channel.create();
    const message = await channel.sendMessage(
        {
            text:  'Algae for sale',
        },)

    // const sort = { last_message_at: -1 };
    // Get all channels with user as a member
    const filter = { members: { $in: [userID] } };
    const channels = await chatClient.queryChannels(filter, {
    });
    const allMessages = channels[0].state.messages;
    const mostrecentID = allMessages[allMessages.length-1].id;

    const flag = await chatClient.flagMessage(mostrecentID);
    return flag;

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