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
    // console.log(client.currentUser)
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiamFjayJ9.vG9zkuZvcQpRftbYFpNdxBKNxvCNV-gG3SJtJmP_bUg';
    console.log("'" + client.userId + "'")
    console.log("'" + userID + "'")
    
    const ci  = client.userId
    const i = userID

    if(ci === i){
        console.log("equal!")
    }
    // Add activity
    // activity = { actor: client.user(userID), verb: 'post', text: "new text!!", object: 13};
    feed = client.feed('timeline', client.userId, token);
    // activity = { actor: "SU:"+userID, verb: 'go!', object: 'go!' };
    activity = {
        actor: "SU:"+client.userId,
        verb: "add",
        object: "picture:10",
        foreign_id: "picture:10",
        message: "Beautiful bird!",
      }
    feed.addActivity(activity)
    
    let posts = feed.get({ limit: 5, offset: 0 });

    return posts
    
    // activityId = 'e3ea7b55-7c38-11eb-a753-12d73b08236b';
    
    // const like = client.reactions.add("like", activityId); 

    // reactionId = '9e89a656-71cf-44f1-a93f-d77d40420382';

    // DELETE & REPLACE (not working to update)
    // client.reactions.delete(reactionId);    
    // activityId = 'a8384a40-7a91-11eb-8080-800126de130b';
    // const comment = await client.reactions.add("comment", activityId, {"text": "awesome post!"}); 

    // UPDATE
    // const update = client.reactions.update(reactionId, {"text": "love it!"});
    // return update

    // return client;

}

test().then((r) => console.log(r));