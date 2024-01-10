const StreamChat = require("stream-chat").StreamChat;
// delivery app credentials
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'
channelName = 'DoorDashChannel'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('messaging', channelName, {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    // set all demo messages
    const DriverMessage1 = {
        text: "Hey Clara, I'm on the way with your order!", 
        user_id: "DriverDoug"
    }
    const CustomerMessage1 = {
            text: "Hi Doug, Awesome!",
            user_id: "CustomerSteve",
    }

    const SM1 = await channel.sendMessage(DriverMessage1)
    const SM2 = await channel.sendMessage(CustomerMessage1)


    return channel;              
}

test().then((r) => console.log(r));