const StreamChat = require("stream-chat").StreamChat;
Dkey = 'cc4duvapmebp'
Dsecret = 'quvyjqrzzg6acvugj5h32mqrkbf252nqcgy3hfuvuxwbd2vfzk4tha3kqw327jj3'

// const artsyHands = "https://images.unsplash.com/photo-1558897796-185b06fc450a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q =60"
// const maleFashion = "https://images.unsplash.com/photo-1642980364256-12e2811c91ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxmYXNoaW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
const gwenImage = 'https://images.unsplash.com/photo-1570752321219-41822a21a761?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60'


const streamFunction = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "Adam";
    const token = chatClient.createToken(userID);
    const set = await chatClient.connectUser({id: userID}, token);

    const channel = chatClient.channel('messaging', 'ExampleChannel',  { 
        name: 'Example Channel',
        members: ['Gwen', "Adam"],
    }); 
     
    await channel.create();  
    return channel.id
}

streamFunction().then((r) => console.log(r));