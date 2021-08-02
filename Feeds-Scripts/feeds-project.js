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
    
    activityId = '9e031ad4-c4a1-11eb-a82c-0a1200300037';
    
    const like = client.reactions.add("like", activityId); 
    reactionId = like.id
    const specificReaction = client.reactions.get(reactionId);  
    return specificReaction  

    console.log('here!')
    // DELETE & REPLACE (not working to update)

    activityId = 'a8384a40-7a91-11eb-8080-800126de130b';
    const comment = await client.reactions.add("comment", activityId, {"text": "awesome post!"}); 

    // UPDATE
    // const update = client.reactions.update(reactionId, {"text": "love it!"});
    // return update

    // return client;

}

test().then((r) => console.log(r));