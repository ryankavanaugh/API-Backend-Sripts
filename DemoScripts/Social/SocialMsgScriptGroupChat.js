const { ChannelState } = require("stream-chat");

const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('messaging', 'CommunityChat', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    let userID1 = "Gwen"
    let userID2 = "Adam"
    let userID3 = "Leo"
    let userID4 = "Taylor"

    // set all demo messages
    const M1 = {
        text: "Hey!! Can anyone watch my dog this weekend?", 
        user_id: userID1
    }
    const M2 = {
            text: "Hi Gwen, let me check my schedule",
            user_id: userID3,
    }
    const M3 =      {
        text: "I can watch your pup!", 
        user_id: userID3
    }
    const M4 =      {
        text: "Nice :) Also, don't forget our neighborhoood picnic next week!!", 
        user_id: userID1
    }
    const M5 = {
        text: "Thanks! Appreciate it. I'll definitely come next week 😊  ",
        user_id: userID1,
}

const M6 = {
    text: "Sounds like a plan! :) ",
    user_id: userID2,
}


// const M1 = {
//     text: "Hey Adam, how are you? :)", 
//     user_id: userID1
// }
// const M2 = {
//         text: "Hi Gwen, good. Just working on some projects",
//         user_id: userID2,
// }
// const M3 =      {
//     text: "Oh nice! What are these mysterious projects? ;)", 
//     user_id: userID1
// }
// const M4 =      {
//     text: "You'll have to wait and see :)", 
//     user_id: userID2
// }
// const M5 = {
//     text: "Okay :) Any recent favorite fashion bloggers?",
//     user_id: userID1,
// }


    // save messages in array for map function
    const allMessages = [M1]
    // const allMessages = [M1, M2, M3, M4]

    const SM1 = await channel.sendMessage(M1)
    const SM2 = await channel.sendMessage(M2)
    const SM3 = await channel.sendMessage(M3)
    const SM4 = await channel.sendMessage(M4)
    const SM5 = await channel.sendMessage(M5)
    // const SM6 = await channel.sendMessage(M6)

    // send all messages
    // const map1 = allMessages.map(function(x){channel.sendMessage(x)})

    return channel;              
}

test().then((r) => console.log(r));