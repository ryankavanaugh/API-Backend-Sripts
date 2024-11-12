require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

// const test = async () => {
//     const chatClient = new StreamChat(appKEY, secret);
//     const newMessage = { id: 'b2525d2b-6a14-43de-8206-7698f8733cf4', text: 'Update the message of the msg', user_id: 'ryan' };
//     const update = await chatClient.updateMessage(newMessage);
//     return update;
// }

// test().then((r) => console.log(r));


const test = async () => {

    const appKEY = 'wgut7u2abfdw'
    const secret = 'yahkfcjf28v5knkhnjemz9ta7tf5wz5p9d8msas27akzdt32g3dkkybcf29u5gna'
     
    const chatClient = new StreamChat(key, secret);

    const userID = "ryan";

    // const updatez = {
    //     id: userID,
    //     set: {
    //         role: "admin",
    //         excited: 'yes,',
    //         favorite_color: 'orange',
    //         // role: "member"
    //     },
    // };
    // const response = await chatClient.partialUpdateUser(updatez);

    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);
    console.log(set)
    // console.log(chatClient.tokenManager);

    const channel = chatClient.channel('messaging', 'Anders', {
        name: 'Founder Chat',
        image: 'http://bit.ly/2O35mws',
        members: ['tyler', 'jo'],
    });
    await channel.create();
    await channel.addMembers(["ryan"]);

    const update = await channel.update(
        {
        name: 'Example› Chat',
        members: ['ryan', 'd'],
        team: 'blue'
    },
);

    // return channel.data;    
    return partialUpdate          
}

test().then((r) => console.log(r));


// const update = await channel.update(
//     {
//         name: 'myspecialchannel',
//         color: 'green',
//     },
//     { text: 'Thierry changed the channel color to green', user_id: "Thierry" },
// );