require("dotenv").config({ path: __dirname + "/.env" });
const appID = process.env["APP_ID"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;
const test = async () => {
  const client = new StreamChat(appID, secret);
  const users = [
    "scott",
    "mark",
    "bob",
    "bill",
    "sean",
    "seamus",
    "callum",
    "calum",
    "rodge",
    "tim",
    "george",
    "david",
    "evan",
    "josuha",
    "nick",
    "sam",
    "craig",
    "shaun",
    "tess",
    "ellie",
    "newuser032948789",
  ];
  const userArrayForUpsert = [];
  users.forEach((user) => userArrayForUpsert.push({ id: user }));
  const updateResponse = await client.upsertUsers(userArrayForUpsert);
  return updateResponse;
  const channel = client.channel("messageing", "new-channel-098765467890", {
    members: ["steve", "newuser032948789"],
    created_by: { id: "steve" },
  });
  await channel.create();
};
test().then((r) => console.log(r));