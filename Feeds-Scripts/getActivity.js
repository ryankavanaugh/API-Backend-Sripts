require("dotenv").config({ path: __dirname + "/.env" });


const addClientSide = async () => {
  const stream = require("getstream");
  // prod v2
  const key = 'b5s6vh973ku3'
  const secret = 'ckpmdnndqdxevzzrpra8amh283ff98ph4vbp6vsdnz8v4s94wshg9yttxv8bbxn5'
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidW5kZWZpbmVkIn0.Pw_RkXrzD7zXqsYixYYkQ7LqCefmvyyWRGm_3gsuSQ4'
  const appID = '100501'
  const client = stream.connect(key, secret)

  feedName = 'department:ECTP'

  const response = client.getActivities(  {  ids: [ 
    feedName,
]});

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