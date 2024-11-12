const { ChannelState } = require("stream-chat");

const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('messaging', 'AI', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    let userID1 = "AI"

    // set all demo messages

    const M1 = {
            text: "Hello Adam, welcome to your Travel Advisor AI Assitant. How can we assist you with your travels? :)",
            user_id: userID1,
    }
   
    const SM1 = await channel.sendMessage(M1)

    return channel;              
}

test().then((r) => console.log(r));