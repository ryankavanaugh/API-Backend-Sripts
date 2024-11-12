require("dotenv").config({ path: __dirname + "/.env" });
const key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;


const test = async () => {
    const userID = "UserExampleID";
    const client = new StreamClient(key, secret);
    const token = client.createToken(userID);
    return token
}

test().then((r) => console.log(r));

// const key = "nvp9bux7jbb8";
// const secrett = "4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m";


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





