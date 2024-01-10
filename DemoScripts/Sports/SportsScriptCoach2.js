const { ChannelState } = require("stream-chat");

const StreamChat = require("stream-chat").StreamChat;
Dkey = 'mxbvq7uep5pn'
Dsecret = 'srwn8j9hcyeexbhk9xyu6f27j5vwrw6fdzf5z9acuwx94rmq87etfrbfzuavj73e'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('messaging', 'Coach', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    let userID1 = "Coach"
    let userID2 = "AJ"

    // set all demo messages
    const M1 = {
        text: "Hey AJ, great video! Are you able to try out for the team and discuss a scholarship this week?", 
        user_id: userID1
    }
    const M2 = {
            text: "You bet! Which days work for you?",
            user_id: userID2,
    }
    const M3 =      {
        text: "Amazing! How is Thurs or Friday at 3?", 
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

    // const SM1 = await channel.sendMessage(M1)
    // const SM2 = await channel.sendMessage(M2)
    const SM3 = await channel.sendMessage(M3)
    // const SM4 = await channel.sendMessage(M4)
    // const SM5 = await channel.sendMessage(M5)

    // send all messages
    // const map1 = allMessages.map(function(x){channel.sendMessage(x)})

    return channel;              
}

test().then((r) => console.log(r));