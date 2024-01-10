require("dotenv").config({ path: __dirname + "/.env" });
// const appKEY = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const appKEY = 'qaq9tzbfa59s'
const secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
 
const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    await chatClient.updateAppSettings({auto_translation_enabled: true});
    const userID = "ryan";
    const token = chatClient.createToken(userID);
    const set = await chatClient.connectUser({id: userID}, token);

    const channel = chatClient.channel('messaging',  { 
        name: 'ZZ', 
        members: ['ryan', 'george']
    }); 
     
    await channel.create();  
    // const channel = chatClient.channel('messaging', 'ZZ', {});
    // // await channel.create();
    const sentMessage = await channel.sendMessage(
        {
            text:  'cake',
            animal: "sea turtle",
            trell: [
                {"url":"xx"}
            ]
        },
        )
    return channel.id
}

test().then((r) => console.log(r));