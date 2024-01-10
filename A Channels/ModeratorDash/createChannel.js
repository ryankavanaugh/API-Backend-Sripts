require("dotenv").config({ path: __dirname + "/.env" });
const key = process.env["key"];
const secret = process.env["secret"];
const StreamChat = require("stream-chat").StreamChat;

// const key = 'xfyrhz6nwwxz'
// const secret = 'dmpt85ud2kfejnb9ymrwmfeya7ev43y29wcg2fa3vqca8mgs7xu66nsbmszmrkqk'

const test = async () => {
    const client = new StreamChat(key, secret);
    // const userID = "Ryan";
    // const token = chatClient.createToken(userID);
    // server to client side code
    // const set = await chatClient.connectUser({id: userID}, token);
    const channel = client.channel('messaging', 'CasinoLounge', { 
        created_by_id: 'Casino',
        name: 'Casino Lounge', 
        members: [ 'Ryan', 'Paula', 'Diego4', 'Steve', 'Michael', 'Cody' ],
    }); 
    await channel.create();
    // await channel.addMembers(['Hobbs'])        
    return channel
}

test().then((r) => console.log(r));