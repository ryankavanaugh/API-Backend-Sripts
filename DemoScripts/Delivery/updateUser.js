const StreamChat = require("stream-chat").StreamChat;
Key = 'nvp9bux7jbb8'
Secret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

const userImage = "https://images.unsplash.com/photo-1514501259756-f4b6fbeffa67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJlYXJkfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60"

const test = async () => {
    const chatClient = new StreamChat(Key, Secret);
    const userID = "DriverDoug";

        const update = {
            id: userID,
            set: {
                image: userImage,
            },
        };      
        const response = await chatClient.partialUpdateUser(update);
        return response
}

test().then((r) => console.log(r));





