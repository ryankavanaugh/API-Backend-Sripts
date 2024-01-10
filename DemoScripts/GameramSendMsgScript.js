const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('messaging', 'GameramChat', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    // set all demo messages
    const M1 = {
        text: "Hey Martin, any new games you're stoked on?", 
        user_id: "Tre"
    }
    const M2 = {
            text: "Hi Tre, found a Japanese RPG through Steam I liked a lot. Hbu?",
            user_id: "Martin",
    }
    const M3 =      {
        text: "Oh nice! Send it over! Not atm, so this is perfect", 
        user_id: "Tre"
    }
    const M4 =      {
        text: "Cool, you bet :)", 
        user_id: "Martin"
    }
    const M5 = {
        text: "Btw do you like mobile or console games better?",
        user_id: "Tre",
}

    // save messages in array for map function
    const allMessages = [M1, M2, M3, M4]

    const SM1 = await channel.sendMessage(M1)
    const SM2 = await channel.sendMessage(M2)
    const SM3 = await channel.sendMessage(M3)
    const SM4 = await channel.sendMessage(M4)
    const SM5 = await channel.sendMessage(M5)

    // send all messages
    // const map1 = allMessages.map(function(x){channel.sendMessage(x)})

    return channel;              
}

test().then((r) => console.log(r));