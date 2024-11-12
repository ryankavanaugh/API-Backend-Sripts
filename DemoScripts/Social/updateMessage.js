require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    // const newMessage = { id: '63010db7-fe77-4050-8d4f-b5a834c7473e', text: 'Message Update!', user_id: 'ryan' };
    const newMessage = { id: '63010db7-fe77-4050-8d4f-b5a834c7473e', text: 'Message!', user_id: 'ryan' };
    const update = await chatClient.updateMessage(newMessage);
    return update;
}

test().then((r) => console.log(r));