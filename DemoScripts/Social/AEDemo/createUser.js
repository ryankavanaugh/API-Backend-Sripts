const StreamChat = require("stream-chat").StreamChat;
// Dkey = 'cc4duvapmebp'
// Dsecret = 'quvyjqrzzg6acvugj5h32mqrkbf252nqcgy3hfuvuxwbd2vfzk4tha3kqw327jj3'

const StreamChat = require("stream-chat").StreamChat;
key = ''
secret = ''

const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "Alice";
    const token = chatClient.createToken(userID);
    const createUser = await chatClient.connectUser(
        {
            id: userID,
            name: userID,
        }, 
        token);
        return token
}

test().then((r) => console.log(r));