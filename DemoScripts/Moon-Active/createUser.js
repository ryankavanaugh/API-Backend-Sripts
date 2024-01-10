const StreamChat = require("stream-chat").StreamChat;
Key = 'nvp9bux7jbb8'
Secret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

const customerServiceWomanImage = 'https://plus.unsplash.com/premium_photo-1661490120502-c71a69241a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGN1c3RvbWVyJTIwc2VydmljZSUyMHdvbWFuJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
const user1Image = 'https://images.unsplash.com/photo-1636487658586-2e83d26f5e8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWVyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
const user2Image = 'https://plus.unsplash.com/premium_photo-1661573079086-55f7357f24b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uZmlkZW50JTIwbWFufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
const user3Image = 'https://images.unsplash.com/photo-1604364721460-0cbc5866219d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZmlkZW50JTIwd29tYW58ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60'


const test = async () => {
    const chatClient = new StreamChat(Key, Secret);
    const userID = "070744545";
    const token = chatClient.createToken(userID);
    const createUser = await chatClient.connectUser(
        {
            id: userID,
            fakenames: {
                channel1: "007575757",
                channel2: "7565657"
            }
        }, 
        token);
        return token
}

test().then((r) => console.log(r));