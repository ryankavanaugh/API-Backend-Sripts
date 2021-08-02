require("dotenv").config({ path: __dirname + "/.env" });
const appID = process.env["APP_ID"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;
const userID = "steve";
const channelType = "livestream";
const channelID = "testing-exports-02";
const client = new StreamChat(appID, secret);
const createChannel = async () => {
  const token = client.createToken(userID);
  const set = await client.setUser(
    {
      id: userID,
    },
    token
  );
  const channel = client.channel(channelType, channelID);
  await channel.create();
  for (let i = 0; i < 1; i++) {
    await channel.sendMessage({ text: "Livestream message!" });
  }
};
const channelExport = async () => {
  const response = await client.exportChannel({
    type: channelType,
    id: channelID,
  });
  const taskId = response.task_id;
  setTimeout(() => {
    client.getExportChannelStatus(taskId).then((r) => console.log(r));
  }, 5000);
};
// createChannel();
channelExport().then((r) => console.log(r));