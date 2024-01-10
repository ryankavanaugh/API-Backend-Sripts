const StreamChat = require("stream-chat").StreamChat;
Key = 'nvp9bux7jbb8'
Secret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

// const customerServiceWomanImage = 'https://plus.unsplash.com/premium_photo-1661490120502-c71a69241a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGN1c3RvbWVyJTIwc2VydmljZSUyMHdvbWFuJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
// const user1Image = 'https://images.unsplash.com/photo-1620911166482-1df903d9445e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmlkZW50JTIwbWFufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'
// const user2Image = ''
// const user3Image = 'x'

const test = async () => {
    const chatClient = new StreamChat(Key, Secret);
    const userID = "Adam";
    const token = chatClient.createToken(userID);
        const update = {
            id: userID,
            set: {
                anonymousName: "Go",
                location: "Austin"
            },
        };
        
        const response = await chatClient.partialUpdateUser(update);

        return response
}

test().then((r) => console.log(r));





