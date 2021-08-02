require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;
// const StreamChat = require("stream-chat").StreamChat;

// const test = async () => {
//     const chatClient = new StreamChat(appKEY, secret);
//     const userID = "ryan";
//     // const token = chatClient.createToken(userID);
//     // // servers side code
//     // const set = await chatClient.connectUser({id: userID}, token);
//     const client = new StreamChat('qnudtemn5mzc', 'qwwxmctyeubnqanh6ve6ew5ab8n63a4v2ksax585rjsy3z8c2ynjmj5jymc9hh6p');
//     const token = client.createToken('ryan');
//     return token
// }

// CHAT VS FEEDS TOKENS
// Chat Token

// customer data
// const key = '2ken74hah2xb';
// const secrett = '7prc9kpqh42tygjf7cjyb8pcdtzhktvhrqrawxn8kdmqmnbcjpztsbqv5twshu55';


const key = 'qaq9tzbfa59s'
const secrett = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
   

const test = async () => {
    // const userID = "STA_58";
    const userID = "tyler";
    // const userID = userID;
    // const client = new StreamChat(appKEY, secret);
    const client = new StreamChat(key, secrett);
    const token = client.createToken(userID);
    return token
}

// // Feed Token
// const test = async () => {    
//     const key = 'qaq9tzbfa59s'
//     const Secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
//     // const appID = '100501'
//     let stream = require('getstream');
//     let client = stream.connect(key, Secret);
//     let token = client.createUserToken('ryan');
//     return token
// }

test().then((r) => console.log(r));