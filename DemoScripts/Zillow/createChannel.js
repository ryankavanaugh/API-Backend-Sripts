const StreamChat = require("stream-chat").StreamChat;
Key = 'spvrf3qh4zqu'
Secret = '4hkkmxwpv66nn79a4v5rfcq8s5pvcrt2464tw3nwbhw7dn79hk7qsu5s8gx52r7j'


const test = async () => {
    const chatClient = new StreamChat(Key, Secret);
    const userID = "Stacy";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const channel = chatClient.channel('messaging', 'ZB',  { 
        name: 'Zillow',
        members: ['CompanyAdmin', "Stacy"],
    }); 
     
    await channel.create();  
    return channel.id
}

test().then((r) => console.log(r));