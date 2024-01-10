const { ChannelState } = require("stream-chat");

const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('messaging', 'CoachChan', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    let userID1 = "Coach"
    let userID2 = "Kyle"

    // set all demo messages
    const M1 = {
        text: "Remember: Team Meeting 30 minutes before the game", 
        user_id: userID1
    }
    const M2 = {
            text: "Born ready! Got some new kicks. Ready to try em out",
            user_id: userID2,
    }
    const M3 =      {
        text: "Oh nice! We are gonna crush it today", 
        user_id: userID1
    }
    const M4 =      {
        text: "For sure!!", 
        user_id: userID2
    }
    const M5 = {
        text: "Are we still going to Outback Steak House after?!",
        user_id: userID1,
}

    // save messages in array for map function
    const allMessages = [M1, M2, M3, M4]

    const SM1 = await channel.sendMessage(M1)
    // const SM2 = await channel.sendMessage(M2)
    // const SM3 = await channel.sendMessage(M3)
    // const SM4 = await channel.sendMessage(M4)
    // const SM5 = await channel.sendMessage(M5)

    // send all messages
    // const map1 = allMessages.map(function(x){channel.sendMessage(x)})

    return channel;              
}

test().then((r) => console.log(r));