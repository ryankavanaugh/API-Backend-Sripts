const { ChannelState } = require("stream-chat");
const StreamChat = require("stream-chat").StreamChat;
Key = 'n65swem2ejrc'
Secret = '39sm7raw4wfref5gmredt9ydmbq75u7mv2zjkh5p8kcf6d8cngshjvhevnd8rb3s'

const test = async () => {
    const chatClient = new StreamChat(Key, Secret);
    const channel = chatClient.channel('messaging', 'CS1', {});

    // clear any SE inputed messages for next demo run
    // await channel.truncate();

    let userID1 = "Tre"
    let userID2 = "CSAgent"


    const M6 =      {
        text: "Is there anything esle we can help with?", 
        user_id: userID2
    }

    const SM6 = await channel.sendMessage(M6)

    return channel;              
}

test().then((r) => console.log(r));