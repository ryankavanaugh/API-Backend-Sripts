const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

// Change Images
// const userImage = 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60'

const userImage = "https://images.unsplash.com/photo-1514501259756-f4b6fbeffa67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJlYXJkfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60"

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "DriverDoug";
    const token = chatClient.createToken(userID);


        const update = {
            id: userID,
            set: {
                // image: userImage
                name: "Driver Doug"
            },
        };
        
        const response = await chatClient.partialUpdateUser(update);
        return response


}

test().then((r) => console.log(r));





