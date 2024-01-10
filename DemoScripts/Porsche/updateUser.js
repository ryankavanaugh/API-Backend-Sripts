const StreamChat = require("stream-chat").StreamChat;
Dkey = 'xpvy5589bysz'
Dsecret = 'g3jn5h6ejhh4djeez3f9f3trtmfsuqrab39zg66cz3mmmw4edfmr5a89wckzjexq'

const user1Image = 'https://ibb.co/h84v0kc'
const user2Image = 'https://ibb.co/9VN0BNp'
const user3Image = 'https://ibb.co/kcC60sm'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "oliverlazoroski";
    const token = chatClient.createToken(userID);
        const update = {
            id: userID,
            set: {
                image: user1Image
            },
        };
        
        const response = await chatClient.partialUpdateUser(update);

        return response
}

test().then((r) => console.log(r));





