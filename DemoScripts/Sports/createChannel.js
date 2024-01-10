const StreamChat = require("stream-chat").StreamChat;
Dkey = 'mxbvq7uep5pn'
Dsecret = 'srwn8j9hcyeexbhk9xyu6f27j5vwrw6fdzf5z9acuwx94rmq87etfrbfzuavj73e'

image = "https://d3jycsk0m72ya7.cloudfront.net/images/2022/8/12/Jensen_Jake.JPG?width=146"

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "AJ";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const channel = chatClient.channel('messaging', 'HunterChan1',  { 
        name: 'Dave',
        members: ['Dave', 'AJ'],
        image: image,
    }); 
     
    await channel.create();  
    return channel.id
}

test().then((r) => console.log(r));