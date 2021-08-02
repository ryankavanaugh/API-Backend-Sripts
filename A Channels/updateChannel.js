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

    const key = 'qaq9tzbfa59s'
    const secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
    const chatClient = new StreamChat(key, secret);

    const userID = "tyler";

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
        members: ['tyler', 'ryan', 'mike', 'stacy']
    },
);
    // return channel.data;    
    return null          
}

test().then((r) => console.log(r));


// const update = await channel.update(
//     {
//         name: 'myspecialchannel',
//         color: 'green',
//     },
//     { text: 'Thierry changed the channel color to green', user_id: "Thierry" },
// );