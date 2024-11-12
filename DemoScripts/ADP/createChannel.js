const StreamChat = require("stream-chat").StreamChat;
key = 'vnvvse5q39wj'
secret = 'dj42jmffsyajgs267qkv7nahrd52yvag6egs4hgtxmfnxn685k68kt6jxy4u5jrf'

// const artsyHands = "https://images.unsplash.com/photo-1558897796-185b06fc450a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q =60"
// const maleFashion = "https://images.unsplash.com/photo-1642980364256-12e2811c91ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxmYXNoaW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
// const nd = "https://play-lh.googleusercontent.com/RamdLkcf8OZ7y2DEpajvoLntyHr0v8hTippsn134VnwZ0IaxEA_drA9dOzof3e9_od8"

JenToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiSmVuIn0.fzKruBN6XPffHFFTotaIZ97GLOtBlvkdn2YSXkQruAA"

const createChannel = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "USERID";

    const channel = chatClient.channel('messaging', 'AVA',  { 
        name: 'A.V.A.',
        members: ['USERID', "AVA"],
    }); 
     
    await channel.create();  
    return channel
    
}

createChannel().then((r) => console.log(r));