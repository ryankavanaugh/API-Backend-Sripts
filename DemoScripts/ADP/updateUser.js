const StreamChat = require("stream-chat").StreamChat;
key = 'vnvvse5q39wj'
secret = 'dj42jmffsyajgs267qkv7nahrd52yvag6egs4hgtxmfnxn685k68kt6jxy4u5jrf'

const adp = "https://i.postimg.cc/wMcwSHMK/ADP-Logo-Circle.png"
const jen = "https://i.postimg.cc/BvJ4y5gt/worker-Nataly.png"
const taylorGirl = "https://i.postimg.cc/bwW19JH6/worker-Jen.png"
const ai  = "https://www.creativefabrica.com/wp-content/uploads/2021/09/27/AI-logo-design-vector-Graphics-17916034-1.jpg"

const aviante = "https://www.avionte.com/wp-content/uploads/2019/07/avionte_icon_blue-1.png"

const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "ADP";
    const token = chatClient.createToken(userID);
        const update = {
            id: userID,
            set: {
                image: aviante
            },
        };
        
        const response = await chatClient.partialUpdateUser(update);

        return response
}

test().then((r) => console.log(r));





