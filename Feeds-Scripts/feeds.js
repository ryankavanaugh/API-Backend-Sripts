require("dotenv").config({ path: __dirname + "/.env" });


const addClientSide = async () => {
  const stream = require("getstream");
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidW5kZWZpbmVkIn0.Pw_RkXrzD7zXqsYixYYkQ7LqCefmvyyWRGm_3gsuSQ4'
  const key = 'qaq9tzbfa59s'
  const appID = '100501'
  const client = stream.connect(key, token, appID)
  console.log(client)
  const feed = client.feed('user', 'ryan', token)
  // console.log(feed)
  const activityfeed = {
    'actor': client.currentUser,
    'verb': 'post',
    'object': 'Testing Feed',
    'attachments': 'https://image.shutterstock.com/image-photo/portrait-tiger-black-background-600w-1543677188.jpg',
    'time': '2020-11-21T20:30:45.123'
    };
    // console.log(activityfeed)
  const addactivity = await feed.addActivity(activityfeed);


  // await client.setUser({
  //   name: "ryan"
  // })

  // await feed1.addActivity(activity);
  // activity.time = Date.now();
  // return await client.updateActivities([activity]);
  // return await feed1.unsubscribe;

};
addClientSide().then((r) => console.log(r));



// stephen code vid
// const feed1 = await client.feed("timeline", userID);