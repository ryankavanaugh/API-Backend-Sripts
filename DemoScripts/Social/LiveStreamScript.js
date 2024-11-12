const { ChannelState } = require("stream-chat");

const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('livestream', 'global-ve2', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    let userID1 = "Leo"
    let userID2 = "Gwen"
    let userID3 = "Adam"

    // set all demo messages
    const M1 = {
        text: "Hey! Great Livestream. I wonder who will move onto the next round 🤔 Maybe Shelby", 
        user_id: userID1
    }
    const M2 = {
            text: "Hi Leo, looks like it!",
            user_id: userID3,
    }
    const M3 =      {
        text: "This show is great!!", 
        user_id: userID2
    }
    const M4 =      {
        text: "Nice :) Also, don't forget our community Channel!!", 
        user_id: userID1
    }
    const M5 = {
        text: "Thanks! Appreciate it. I'll definitely join 😊  ",
        user_id: userID2,
}

const M6 = {
    text: "Sounds like a plan! You better :) ",
    user_id: userID3,
}

const M7 = {
    text: "This livestream chat is so fast! (The average API resopnse time is ~ 9ms)",
    user_id: userID1,
}

const M8 = {
    text: "This is my favorite host!! She is so funny",
    user_id: userID2,
}

const M9 = {
    text: "For sure  😂 ",
    user_id: userID3,
}

const M10 = {
    text: "Let's gooo 😂 ",
    user_id: userID1,
}

const M11 = {
    text: "Great performance!",
    user_id: userID2,
}

    // save messages in array for map function
    const allMessages = [M1, M2, M3, M4, M5, M6]

    const SM1 = await channel.sendMessage(M1)
    const SM2 = await channel.sendMessage(M2)
    const SM3 = await channel.sendMessage(M3)
    const SM4 = await channel.sendMessage(M4)
    const SM5 = await channel.sendMessage(M5)
    // const SM6 = await channel.sendMessage(M6)
    const SM7 = await channel.sendMessage(M7)
    const S8M8 = await channel.sendMessage(M8)
    const SM9 = await channel.sendMessage(M9)
    const SM10 = await channel.sendMessage(M10)
    const SM11 = await channel.sendMessage(M11)

    return channel;              
}

test().then((r) => console.log(r));