require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
// const StreamChat = require("stream-chat").StreamChat;


const test = async () => {    
    // Variables
    const key = 'qaq9tzbfa59s'
    const Secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
    const appID = '100501'
    const userID = 'jack'
    const stream = require('getstream');

    // Instantiate a new Client (server side)
    let cli = stream.connect(key, Secret, appID);

    // Create Token (server side)
    const token = cli.createUserToken(userID);
    const client = stream.connect( key, token, appID);
    // console.log(client.currentUser)
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiamFjayJ9.vG9zkuZvcQpRftbYFpNdxBKNxvCNV-gG3SJtJmP_bUg';
    console.log("'" + client.userId + "'")
    console.log("'" + userID + "'")
    
    const ci  = client.userId
    const i = userID

    let user = client.user('jack').get();
    console.log('hi');
    console.log(user);
    return user;

}

test().then((r) => console.log(r));