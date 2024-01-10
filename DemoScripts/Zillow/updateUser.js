const StreamChat = require("stream-chat").StreamChat;
Dkey = 'spvrf3qh4zqu'
Dsecret = '4hkkmxwpv66nn79a4v5rfcq8s5pvcrt2464tw3nwbhw7dn79hk7qsu5s8gx52r7j'

// stacyImage = "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFufGVufDB8MXwwfHx8MA%3D%3D"
// wendyImage = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvbWFufGVufDB8MXwwfHx8MA%3D%3D"

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "CompanyAdmin";
    const token = chatClient.createToken(userID);
        const update = {
            id: userID,
            set: {
                name: "Zillow"
            },
        };
        
        const response = await chatClient.partialUpdateUser(update);

        return response
}

test().then((r) => console.log(r));





