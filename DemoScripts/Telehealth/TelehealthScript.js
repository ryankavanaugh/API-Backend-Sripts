const { ChannelState } = require("stream-chat");

const StreamChat = require("stream-chat").StreamChat;
Dkey = 'qjwqduaeta4f'
Dsecret = 'mgc6ajeppeyq3tua9c4ptcyuust7vhmbeaj9yvx8kb98qxgzragkukbes87p9b37'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('messaging', 'DrStephen', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    let userID1 = "DrStephenz"
    let userID2 = "svenja"

    // set all demo messages
    const M1 = {
        text: "Hi, how are you today?", 
        user_id: userID1
    }
    const M2 = {
            text: "Good,thank you for checking in",
            user_id: userID2,
    }
    const M3 =      {
        text: "Yes, do you need to book a follow-up appointment next week?", 
        user_id: userID1
    }

    // save messages in array for map function
    // const allMessages = [M1, M2, M3, M4]

    const SM1 = await channel.sendMessage(M1)
    // const SM2 = await channel.sendMessage(M2)
    // const SM3 = await channel.sendMessage(M3)
    // send all messages
    // const map1 = allMessages.map(function(x){channel.sendMessage(x)})

    return channel;              
}

test().then((r) => console.log(r));