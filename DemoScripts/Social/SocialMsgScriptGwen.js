const { ChannelState } = require("stream-chat");

const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('messaging', 'GwenChan', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    let userID1 = "Gwen"
    let userID2 = "Adam"

    // set all demo messages
    const M1 = {
        text: "Hey Adam, here is the bike for sale! It's $50", 
        attachments: [
            {
                type: 'image',
                asset_url: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
                thumb_url: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'
            }
        ],
        user_id: userID1
    }
    const M2 = {
            text: "Hi, welcome to your AI Assitant powered by Chat GPT. How can I help you?",
            user_id: userID1,
    }
    const M3 =      {
        text: "Hey! ",
        user_id: userID1
    }
    const M4 =      {
        text: "How's your day going so far :)", 
        user_id: userID1
    }
//     const M5 = {
//         text: "Okay :) Any recent favorite fashion bloggers?",
//         user_id: userID1,
// }

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
    // const allMessages = [M1]
    // const allMessages = [M1, M2, M3, M4]

    // const SM1 = await channel.sendMessage(M1)
    // const SM2 = await channel.sendMessage(M2)
    const SM3 = await channel.sendMessage(M3)
    const SM4 = await channel.sendMessage(M4)
    // const SM5 = await channel.sendMessage(M5)

    // send all messages
    // const map1 = allMessages.map(function(x){channel.sendMessage(x)})

    return channel;              
}

test().then((r) => console.log(r));