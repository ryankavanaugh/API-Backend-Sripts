const { ChannelState } = require("stream-chat");

const StreamChat = require("stream-chat").StreamChat;
Dkey = 'cc4duvapmebp'
Dsecret = 'quvyjqrzzg6acvugj5h32mqrkbf252nqcgy3hfuvuxwbd2vfzk4tha3kqw327jj3'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('team', 'RossChannel', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    let userID1 = "cd0ba2a541bcf053201574ef44eb370f"
    let userID2 = "Taylor"

    // set all demo messages
    const M1 = {
        text: "Hey, still down for hockey later?", 
        user_id: userID1
    }
    const M2 = {
            text: "Yea, sounds good! Let's go out after also",
            user_id: userID2,
    }
    const M3 =      {
        text: "Cool, wanna go to Rainey Street?", 
        user_id: userID1
    }
    const M4 =      {
        text: "Yes! And West 6th", 
        user_id: userID2
    }

    // save messages in array for map function
    const allMessages = [M1, M2, M3, M4]

    const SM1 = await channel.sendMessage(M1)
    const SM2 = await channel.sendMessage(M2)
    const SM3 = await channel.sendMessage(M3)

    return channel;              
}

test().then((r) => console.log(r));