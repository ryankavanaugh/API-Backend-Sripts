require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = 'adam'

    const update = {
            id: userID,
            set: {
                role: "user",
                favorite_color: 'blue',
                teams: ["red", "blue"]
            },
        };

        const response = await chatClient.partialUpdateUser(update);
        return response;
}

test().then((r) => console.log(r));