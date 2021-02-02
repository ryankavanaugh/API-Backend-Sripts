require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;


const test = async () => {    
    // Variables
    const key = 'qaq9tzbfa59s'
    const Secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
    const appID = '100501'
    const userID = 'ryan'
    let stream = require('getstream');

    // Instantiate a new Client (server side)
    let client = stream.connect(key, Secret, appID);

    // Create Token (server side)
    const token = client.createUserToken(userID);

    console.log(client.currentUser)
    // Add activity
    activity = { actor: client.user(userID), verb: 'post', text: "new text!!", object: 12};

    feed = client.feed('user', userID, token);
    // activity = { actor: 'steve', verb: 'pin', object: 'Place:42' };
    feed.addActivity(activity)

    // let posts = feed.get({ limit: 5, offset: 0 });
    // return posts

    return feed.get({ limit: 5, offset: 0 });

    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicnlhbiJ9.Va9Thg7gl4GtW3z1Q18FsHxYL7P0rAbXJtzpQTAr4KQ'
    // let token = client.createUserToken('ryan');
    // let client = stream.connect(key, Secret);

    // client = stream.connect(
    //     key,
    //     token,
    //     appID,
    //   );

    // const feed = client.feed('user', 'ryan', token);
    // const activity = { actor: 'ryan', verb: 'pin', object: 'Place:42' };
    // feed.addActivity(activity)

    // feed.addActivity({
    //     actor: 'ryan', 
    //     tweet: 'Hello world', 
    //     verb: 'tweet', 
    //     })
    
    //post activity

    // return feed

}

test().then((r) => console.log(r));