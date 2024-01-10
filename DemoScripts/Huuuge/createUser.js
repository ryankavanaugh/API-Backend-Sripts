const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

imageID = ''

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "Mark";
    const token = chatClient.createToken(userID);
    const createUser = await chatClient.connectUser(
        {
            id: userID,
            name: userID,
            image: imageID,
        }, 
        token);
        return token
}

test().then((r) => console.log(r));



