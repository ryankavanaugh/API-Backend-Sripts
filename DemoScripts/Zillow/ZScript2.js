const { ChannelState } = require("stream-chat");

const StreamChat = require("stream-chat").StreamChat;
Dkey = 'spvrf3qh4zqu'
Dsecret = '4hkkmxwpv66nn79a4v5rfcq8s5pvcrt2464tw3nwbhw7dn79hk7qsu5s8gx52r7j'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('messaging', 'Hamilton', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    let userID1 = "Mark"
    let userID2 = "Stacy"

    // set all demo messages
    const M1 = {
        text: "Hey Stacy, Unit 227 is available at Hamilton.", 
        attachments: [
            {
                type: 'image',
                asset_url: 'https://i.ibb.co/r7XpKdn/Veridian-Residence.png',
                thumb_url: ''
            }
        ],
        user_id: userID1
    }
const M2 = {
        text: "Could you tour this unit this afternoon?",
        user_id: userID1,
}
    


    // save messages in array for map function
    const allMessages = [M1]
    // const allMessages = [M1, M2, M3, M4]

    const SM1 = await channel.sendMessage(M1)
    const SM2 = await channel.sendMessage(M2)
    // const SM3 = await channel.sendMessage(M3)
    // const SM4 = await channel.sendMessage(M4)
    // const SM5 = await channel.sendMessage(M5)

    // send all messages
    // const map1 = allMessages.map(function(x){channel.sendMessage(x)})

    return channel;              
}

test().then((r) => console.log(r));