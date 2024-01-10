const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'
const channelImage = 'https://images.unsplash.com/photo-1570752321219-41822a21a761?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "DriverDoug";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const channel = chatClient.channel('messaging', 'DoorDashChannel',  { 
        name: 'DoorDashChannel',
        members: ['DriverDoug', "CustomerSteve"],
        image: channelImage
    }); 
     
    await channel.create();  
    return channel.id
}

test().then((r) => console.log(r));