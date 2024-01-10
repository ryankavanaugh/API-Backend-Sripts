require("dotenv").config({ path: __dirname + "/.env" });
const StreamChat = require("stream-chat").StreamChat;

const appKEY = 'wpnc4r59rct7'
const secret = 'nmggpn8tkjb52nfzqdzqme7gh3m4mgqthvwnbejkv264394zft6qw9qsb393jnn6'
 
const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    await chatClient.updateAppSettings({auto_translation_enabled: true});
    const userID = "Luke";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);
    // return set

    const channel = chatClient.channel('messaging','JediTalk', { 
        name: 'Jedi Talk', 
        members: ['HanSolo', 'Luke']
    }); 
    
    // const destroy = await channel.delete();

    await channel.create();  

    const sentMessage = await channel.sendMessage(
        {
            text:  'Time to learn new skills',
        },
        )
    return sentMessage
}

test().then((r) => console.log(r));