require("dotenv").config({ path: __dirname + "/.env" });



const fetchActivity = async () => {
  const stream = require("getstream");
  // prod v2
  const key = '7q7ejzbbmrhg'
  const secret = '4rxgpuvhafy8yms56xncx2yzgq5b5w8n7rwepthpzr79cv9rfe6vn2rcvs6u3zy3'
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidW5kZWZpbmVkIn0.Pw_RkXrzD7zXqsYixYYkQ7LqCefmvyyWRGm_3gsuSQ4'

  const client = stream.connect(key, secret)

  feedName = 'd3fd81520d0d779caa8dbe26699fe001282513cd31ca4d9d832c4451b62758c8'
  activityID = "71214530-71e5-11ef-8080-800147bd7b19"

const reactions = await client.reactions.filter({
  'activity_id': activityID
});

return reactions

  feedID = "d3fd81520d0d779caa8dbe26699fe001282513cd31ca4d9d832c4451b62758c8"

  const feed = client.feed('Company_News', feedID);



  jsonData = feed.get({ limit:100, offset:0, reactions: {own: true, counts: true, recent: true}, })
  .then(console.log("yes"))
  .catch(error => console.error('Error:', error));;

  // const jsonData2 = JSON.parse(jsonData);
return jsonData


;

};
fetchActivity().then((r) => console.log(r));