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
    // const post = feed.addActivity(activity);
    // return post
    let posts = feed.get({ limit: 5, offset: 0 });
    return posts
    activityId = '34f27248-ca1b-11eb-bf28-1254437355c5';
    const like = client.reactions.add("like", activityId); 
    // const likeID = like;
    // return likeID
    reactionId = '9e89a656-71cf-44f1-a93f-d77d40420382';

    const response = await client.reactions.filter({ 
        'activity_id': activityId, 
        'kind': 'like', 
        // 'user_id': 'adam' 
      });

      return response
}

test().then((r) => console.log(r));