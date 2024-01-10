const { ChannelState } = require("stream-chat");

const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('messaging', 'Nextdoor', {});

    // clear any SE inputed messages for next demo run
    await channel.truncate();

    let userID1 = "CompanyAdmin"
    let userID2 = "Adam"

    // set all demo messages
    const M1 = {
                // text: 'Hey Adam, this Friday Cosmic Coffee will offer 10% off all drinks! Use the QR Code below to get more info',
                attachments: [
                    {
                        type: 'image',
                        asset_url: 'https://i.ibb.co/kHzCk1t/image-19.png',
                        thumb_url: 'https://i.ibb.co/kHzCk1t/image-19.png'
                    },
                ],
        user_id: userID1
    }

    const M2 = {
        text: 'Hey Adam, this Friday Cosmic Coffee will offer all drinks 10% off! Use the QR Code below to get more info',
        attachments: [
            {
                type: 'image',
                asset_url: 'https://i.ibb.co/gVS4hwN/image-20.png',
                 thumb_url: 'https://i.ibb.co/gVS4hwN/image-20.png'
            }
        ],
        user_id: userID1
    }

    const M3 = {
        // text: 'Hey Adam, this Friday Cosmic Coffee will offer all drinks 10% off! Use the QR Code below to get more info',
        attachments: [
            {
                type: 'image',
                asset_url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
                 thumb_url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            }
        ],
        user_id: userID1
    }


    const M4 = {
        text: 'New Announcement!',
        user_id: userID1
    }



    // save messages in array for map function
    const allMessages = [M1, M2]

    const SM1 = await channel.sendMessage(M2)
    const SM2 = await channel.sendMessage(M3)
    const SM3 = await channel.sendMessage(M1)
    const SM4 = await channel.sendMessage(M4)

    return channel;              
}

test().then((r) => console.log(r));