require("dotenv").config({ path: __dirname + "/.env" });
const key = process.env["key"];
const secret = process.env["secret"];
const StreamChat = require("stream-chat").StreamChat;

const channels = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "Ryan";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const filter = { members: { $in: ['Ryan'] }, };
    const sort = { last_message_at: -1 };
    const channels = await chatClient.queryChannels(filter, sort, {});

    return channels


    // // return messages from a sender
    // let i = 0;
    // for (i; i<channels.length; i++){
    //     let v = 0;
    //     for (v; v<channels[i].state.messages.length; v ++){
    //         if (channels[i].state.messages[v].user.id == 'userID'){
    //         console.log(channels[i].state.messages[v].text)
    //         }
    //     }
    // }


    // return channels[0].state.messages[0];
    return channels.length
}

channels().then((r) => console.log(r));