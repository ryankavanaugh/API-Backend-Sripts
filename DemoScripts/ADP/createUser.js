const StreamChat = require("stream-chat").StreamChat;
key = 'vnvvse5q39wj'
secret = 'dj42jmffsyajgs267qkv7nahrd52yvag6egs4hgtxmfnxn685k68kt6jxy4u5jrf'

const adp = "https://i.postimg.cc/wMcwSHMK/ADP-Logo-Circle.png"
const jen = "https://ibb.co/HhxQtPv"
const taylor = "https://i.postimg.cc/Bbf0TxXq/worker1.png"
const steve = "https://i.postimg.cc/Wz17fyDS/worker4.png"
const ava = "https://i.postimg.cc/RFh0q12q/Screenshot-2024-05-28-at-2-27-53-PM.png"

const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "Jen";
    const token = chatClient.createToken(userID);
    const createUser = await chatClient.connectUser(
        {
            id: userID,
            name: "Jen",
            // image: ava,
        }, 
        token);
        return token
}

test().then((r) => console.log(r));