const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'
const channelImage = "https://play-lh.googleusercontent.com/RamdLkcf8OZ7y2DEpajvoLntyHr0v8hTippsn134VnwZ0IaxEA_drA9dOzof3e9_od8"



// const artsyHands = "https://images.unsplash.com/photo-1558897796-185b06fc450a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q =60"
// const maleFashion = "https://images.unsplash.com/photo-1642980364256-12e2811c91ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxmYXNoaW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
const nd = "https://play-lh.googleusercontent.com/RamdLkcf8OZ7y2DEpajvoLntyHr0v8hTippsn134VnwZ0IaxEA_drA9dOzof3e9_od8"


const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "Adam";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const channel = chatClient.channel('messaging', 'CommunityChat',  { 
        name: 'Neighborhood Community Chat',
        members: ['Adam', "ND", "Gwen", "Leo"],
    }); 
     
    await channel.create();  
    return channel.id
}

test().then((r) => console.log(r));