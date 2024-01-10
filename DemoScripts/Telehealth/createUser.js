const StreamChat = require("stream-chat").StreamChat;
Dkey = 'qjwqduaeta4f'
Dsecret = 'mgc6ajeppeyq3tua9c4ptcyuust7vhmbeaj9yvx8kb98qxgzragkukbes87p9b37'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "DrStephenz";
    const token = chatClient.createToken(userID);
    const createUser = await chatClient.connectUser(
        {
            id: userID,
            name: "Dr Stephen",
            image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        }, 
        token);
        return token
}

test().then((r) => console.log(r));



