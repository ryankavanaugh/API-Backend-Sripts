require("dotenv").config({ path: __dirname + "/.env" });
const StreamChat = require("stream-chat").StreamChat;


const appKEY = 'wgut7u2abfdw'
const secret = 'yahkfcjf28v5knkhnjemz9ta7tf5wz5p9d8msas27akzdt32g3dkkybcf29u5gna'
 
const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    await chatClient.updateAppSettings({auto_translation_enabled: true});
    const userID = "ryan";
    const token = chatClient.createToken(userID);
    const set = await chatClient.connectUser({id: userID}, token);

    const createUser = await chatClient.connectUser(
        {
            id: userID,
            name: userID,
        }, 
        token);



    const channel = chatClient.channel('messaging', 'test2',  { 
        name: 'ChangeTeam', 
        members: ['ryan', 'd'],
        team: 'red'
    }); 
     
    await channel.create();  

    const update = await channel.update(
        {
        name: 'test2',
        members: ['ryan', 'd'],
        team: 'blue'
    },
);

}

test().then((r) => console.log(r));