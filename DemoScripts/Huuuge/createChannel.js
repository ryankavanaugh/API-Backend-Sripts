const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "Adam";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const channel = chatClient.channel('messaging', 'ScottChan',  { 
        name: 'Adam', 
        members: ['Adam', "Scott"],
        image: 'https://images.unsplash.com/photo-1625241189662-2980453ebffc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGZyaWVuZGx5JTIwbWlkZGxlJTIwZWFzdGVybiUyMG1hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60'
    }); 
     
    await channel.create();  

    return channel.id
}

test().then((r) => console.log(r));