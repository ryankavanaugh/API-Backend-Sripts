require("dotenv").config({ path: __dirname + "/.env" });


const addClientSide = async () => {
  const stream = require("getstream");
  const userToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYnJlbmRhbnRlc3QifQ.VvJDBVNaSQrxypJqFN0bHA1U6IUOvSMYoODj-mZZeCQ'
  const client = stream.connect('tzzd78q9k5mf', userToken, '109570')
  console.log(client)
  const trainerFeed = await client.feed('trainer', '5822BFB2B86828570DD90899')
  console.log(trainerFeed)
};
addClientSide().then((r) => console.log(r));



// stephen code vid
// const feed1 = await client.feed("timeline", userID);