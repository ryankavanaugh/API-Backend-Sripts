require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "ryan"

    const update = {
            id: userID,
            set: {
                role: "admin",
                name: "ryan",
                excited: 'yes,',
                favorite_color: 'orange',
                // teams: ["blue", "red"],
                team: "purple"
            },
        };

    const updateUpsert = {
        id: userID,
            role: "admin",
            name: "ryan",
            excited: 'yes,',
            favorite_color: 'orange',
            // teams: ["blue", "red"],
            // team: "purple"
    };
 
    const response = await chatClient.upsertUser(updateUpsert);

        // const response = await chatClient.partialUpdateUser(update);
        const userInfo = await chatClient.queryUsers({name: { $autocomplete : "ryan" }});
        return userInfo

    return response;
}

test().then((r) => console.log(r));