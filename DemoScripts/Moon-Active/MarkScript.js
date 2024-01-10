const { ChannelState } = require("stream-chat");
const StreamChat = require("stream-chat").StreamChat;
Key = 'n65swem2ejrc'
Secret = '39sm7raw4wfref5gmredt9ydmbq75u7mv2zjkh5p8kcf6d8cngshjvhevnd8rb3s'

const test = async () => {
    const chatClient = new StreamChat(Key, Secret);
    const channel = chatClient.channel('messaging', 'CS2', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    let userID1 = "Mark"
    let userID2 = "CSAgent"

    // set all demo messages
    const M1 = {
        text: "Hi, I'd like to update my email? Can you assist with this?", 
        user_id: userID1
    }
    const M2 = {
            text: "Hi Tre 👋 Thank you for being a loyal customer. Of course! I see that there was a verification delay. I can resolve that for you now.",
            user_id: userID2,
    }
    const M3 =      {
        text: "Thank you! Appreciate the fast response times", 
        user_id: userID1
    }
    const M4 =      {
        text: "This has been updated", 
        user_id: userID2
    }
    const M5 =      {
        text: "We apologize for the inconvenience. We've gifted you in-game tokens.", 
        user_id: userID2
    }

    // const M6 =      {
    //     text: "Is there anything esle we can help with?", 
    //     user_id: userID2
    // }

    const SM1 = await channel.sendMessage(M1)
    // const SM2 = await channel.sendMessage(M2)
    // const SM3 = await channel.sendMessage(M3)
    // const SM4 = await channel.sendMessage(M4)
    // const SM5 = await channel.sendMessage(M5)
    // const SM6 = await channel.sendMessage(M6)

    return channel;              
}

test().then((r) => console.log(r));