const StreamChat = require("stream-chat").StreamChat;
// Dkey = 'nvp9bux7jbb8'
// Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

Key = 'b223hbsbgrpg'
Secret =  'f8nf26vtas57f2fy55w8m254cmw7wbq5r724rq8x8egfqz83mkwcsvdusnsu7nhf'

const test = async () => {
    const chatClient = new StreamChat(Key, Secret);
    const userID = "Mike";
    const token = chatClient.createToken(userID);
    const createUser = await chatClient.connectUser(
        {
            id: userID,
            name: "Mike",
            // image: "ht",
        }, 
        token);
        return token
}

test().then((r) => console.log(r));



