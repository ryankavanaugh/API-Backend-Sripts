require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {

    const chatClient = new StreamChat(appKEY, secret);
    const userID = "ryan";
    const token = chatClient.createToken(userID);
    // servers side code
    const set = await chatClient.connectUser({id: userID}, token);

    function create_token(userEZ) {
     const token = chatClient.createToken(userEZ)

    //  const timestamp = Number(moment().add('1h').format('X'));
    //  const token1 = client.createtoken('john', timestamp);

    //  const token_with_expiration = chatClient.createToken(userEZ);
    const token_exp = chatClient.createToken(userID, Math.floor(Date.now() / 1000) + (60 * 15));
    
    //   const toke = chatClient.createToken(userEZ, new Date(currentDate.getTime() + minutesToAdd*60000));
     return token_exp
    }
   return create_token('jo')
}

test().then((r) => console.log(r));