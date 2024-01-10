const { ChannelState } = require("stream-chat");
const StreamChat = require("stream-chat").StreamChat;
Dkey = 'spvrf3qh4zqu'
Dsecret = '4hkkmxwpv66nn79a4v5rfcq8s5pvcrt2464tw3nwbhw7dn79hk7qsu5s8gx52r7j'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('messaging', 'ZB', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    let userID1 = "CompanyAdmin"

    // set all demo messages
    const M1 = {
        text: 'Hey Stacy, new listings in your area! ',
        // attachments: [
        //     {
        //         type: 'image',
        //         asset_url: 'https://i.ibb.co/gVS4hwN/image-20.png',
        //          thumb_url: 'https://i.ibb.co/gVS4hwN/image-20.png'
        //     }
        // ],
        user_id: userID1
    }

    const M2 = {
        text: 'Iron Horse - 7805 South Jacinto Blvd',
        attachments: [
            {
                type: 'image',
                asset_url: 'https://i.ibb.co/vDPPss6/Iron-Horse-Apartments.png',
                thumb_url: 'https://i.ibb.co/vDPPss6/Iron-Horse-Apartments.png'
            },
        ],
        user_id: userID1
    }

    const M3 = {
        text: 'Parker Ave - 1212 East Parker Avenue',
        attachments: [
            {
                type: 'image',
                asset_url: 'https://i.ibb.co/z4FsF01/The-Parker-Off-Peral.png',
                thumb_url: 'https://i.ibb.co/z4FsF01/The-Parker-Off-Peral.png'
            },
        ],
        user_id: userID1
    }

    const M4 = {
        text: 'New Announcement!',
        user_id: userID1
    }



    // save messages in array for map function
    const allMessages = [M1, M2]

    const SM1 = await channel.sendMessage(M1)
    const SM2 = await channel.sendMessage(M2)
    const SM3 = await channel.sendMessage(M3)
    // const SM4 = await channel.sendMessage(M4)

    return channel;              
}

test().then((r) => console.log(r));