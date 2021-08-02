require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
// const StreamChat = require("stream-chat").StreamChat;


const test = async () => {    
    // Variables
    const key = 'qaq9tzbfa59s'
    const Secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
    const appID = '100501'
    const userID = 'ryan'
    const stream = require('getstream');

    // Instantiate a new Client (server side)
    let cli = stream.connect(key, Secret, appID);

    // Create Token (server side)
    const token = cli.createUserToken(userID);
    const client = stream.connect( key, token, appID);
    console.log("'" + client.userId + "'")
    console.log("'" + userID + "'")
    
    feed = client.feed('timeline', client.userId, token);

    // DELETE
    activityId = '46e52410-bca8-11eb-95e4-0a0d7a10423a';
    foriegnID = 'picture:1';
    // await feed.removeActivity({foreignId: 'picture:1'});  
    
    let posts = feed.get({ limit: 1, offset: 0 });
    return posts;
};

test().then((r) => console.log(r));