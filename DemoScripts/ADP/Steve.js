const { ChannelState } = require("stream-chat");
const StreamChat = require("stream-chat").StreamChat;
key = 'vnvvse5q39wj'
secret = 'dj42jmffsyajgs267qkv7nahrd52yvag6egs4hgtxmfnxn685k68kt6jxy4u5jrf'

const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const channel = chatClient.channel('messaging', 'Steve', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    let userID1 = "Steve"
    let userID2 = "Jen"

    // set all demo messages
    const M1 = {
        text: "Jen! Can you review this team building activity and provide me with your thoughts?", 
        user_id: userID1
    }
    const M2 = {
            text: "If this works, send the deposit and we'll secure your requested time.",
            user_id: userID1,
    }
//     const M3 =      {
//         text: "I can watch your pup!", 
//         user_id: userID3
//     }
//     const M4 =      {
//         text: "Nice :) Also, don't forget our neighborhoood picnic next week!!", 
//         user_id: userID1
//     }
//     const M5 = {
//         text: "Thanks! Appreciate it. I'll definitely come next week 😊  ",
//         user_id: userID1,
// }

    // save messages in array for map function
    const allMessages = [M1]
    // const allMessages = [M1, M2, M3, M4]

    const SM1 = await channel.sendMessage(M1)
    // const SM2 = await channel.sendMessage(M2)
    // const SM3 = await channel.sendMessage(M3)
    // const SM4 = await channel.sendMessage(M4)
    // const SM5 = await channel.sendMessage(M5)
    // const SM6 = await channel.sendMessage(M6)

    return channel;              
}

test().then((r) => console.log(r));