const StreamChat = require("stream-chat").StreamChat;
Key = 'n65swem2ejrc'
Secret = '39sm7raw4wfref5gmredt9ydmbq75u7mv2zjkh5p8kcf6d8cngshjvhevnd8rb3s'

const test = async () => {
    const chatClient = new StreamChat(Key, Secret);
    const userID = "Lexi";
    const token = chatClient.createToken(userID);
    const set = await chatClient.connectUser({id: userID}, token);

    const channel = chatClient.channel('messaging', 'CS3',  { 
        name: 'Lexi',
        members: ['Lexi', "CSAgent"],
    }); 
     
    await channel.create();  
    return channel.id
}

test().then((r) => console.log(r));