const StreamChat = require("stream-chat").StreamChat;
key = 'z79jhauee77m'
secret = 'xbckp53asdumj94xt7crkw5p749rb4d2x4e83xmdf6j33agg5fc8zc2b2ngzphps'

// const artsyHands = "https://images.unsplash.com/photo-1558897796-185b06fc450a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q =60"
// const maleFashion = "https://images.unsplash.com/photo-1642980364256-12e2811c91ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxmYXNoaW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
// const nd = "https://play-lh.googleusercontent.com/RamdLkcf8OZ7y2DEpajvoLntyHr0v8hTippsn134VnwZ0IaxEA_drA9dOzof3e9_od8"


const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "Sam";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const channel = chatClient.channel('messaging', 'Thumbtack',  { 
        name: 'Thumbtack Announcements',
        members: ['Sam', "Thumbtack"],
    }); 
     
    await channel.create();  
    return channel
    
}

test().then((r) => console.log(r));