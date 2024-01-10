const StreamChat = require("stream-chat").StreamChat;
Dkey = 'mxbvq7uep5pn'
Dsecret = 'srwn8j9hcyeexbhk9xyu6f27j5vwrw6fdzf5z9acuwx94rmq87etfrbfzuavj73e'

const userImage = 'https://d3jycsk0m72ya7.cloudfront.net/images/2022/8/12/Jensen_Jake.JPG?width=146'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "Dave";
    const token = chatClient.createToken(userID);
        const update = {
            id: userID,
            set: {
                image: userImage
            },
        };
        
        const response = await chatClient.partialUpdateUser(update);

        return response
}

test().then((r) => console.log(r));





