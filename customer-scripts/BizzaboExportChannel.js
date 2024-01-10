const JSONInfo = require('./biz.json')
require("dotenv").config({ path: __dirname + "/.env" });
const StreamChat = require("stream-chat").StreamChat;


allChannels = [
    "d61955cf-2f6e-49b9-b893-baa2ae181e09",
    "631f5559-ca6d-45ca-b18e-36ef26cea655",
    "80335b38-5dba-4704-b524-4e173af2dec2",
    "55ff2c4f-7552-449a-a398-1e4b60f0b564",
    "d5c5cfaf-a245-40fc-a67a-38720caece40",
    "a613f82e-8e46-43f8-951b-43fe0950155d",
    "9c53f366-d75e-4ca1-8727-e33b3e22ff9b",
    "2524d5f6-8084-4491-af9d-2a1be3fe4d72",
    "f5f47aab-ecf2-40ea-988b-d872e60c8d20",
    "a3bf809a-6916-4291-9429-53abcf175f88",
    "07bae7da-2e77-4fbe-9d85-6a780f1c5952",
    "46aae0f6-f2be-45af-9729-663ef7359b9b",
    "aef802ba-31fc-4e04-9f69-92f3803f9a0a",
    "8a9c2f9d-ff12-46df-8804-5b148e653010",
    "5d4fae18-4f38-46f6-ac69-4e35190fc66f",
    "efcdfd9a-5bd5-4175-aa92-989865906d16",
    "1160ec17-1aad-49ff-9263-c9b8ab5c594d",
    "83bba98d-3dbc-4f5c-a910-5ee394f917cf",
    "9a7b3a92-71c8-47ee-8bc5-40fd0e06e01e",
    "f65e4f3f-ece6-4ef1-abdb-6aa99826fbdb",
    "073e4f4d-a480-4404-8903-1b88b0285a2d",
    "9fe9cc4b-5498-4faa-9616-637db084c567",
    "1ff1081b-1c76-46fd-94df-f0d141574d0f",
    "0e52faba-a3e4-49d2-9839-057a2b1e52f5"
    ]


const key = "pf25u7jv6uat"
const secret = "k9dwhmmzfarfat483b4tvwyf29sn5488h9y56km8v76takxrrwvwqstbres5g2e2"

// const client = new StreamChat(key, secret);

const channelID = "efcdfd9a-5bd5-4175-aa92-989865906d16";

const test = async () => {
    const client = new StreamChat(key, secret);
    const userID = "ryan";

    const realChannelsArray = [];

    for(const element of allChannels){
        // console.log(element)
        const filter = {cid: ("messaging:" + element)};
        const sort = [{ last_message_at: -1 }];
        const channel = await client.queryChannels(filter, sort, { 
        })
        if (channel.length != 0){
            realChannelsArray.push({ type : "messaging", id: element})
        }
        
    }
    console.log(realChannelsArray)

    // EXPORT
    const response = await client.exportChannels(
        realChannelsArray,
              );
      const taskId = response.task_id;
      setTimeout(() => {
        client.getExportChannelStatus(taskId).then((r) => console.log(r));
      }, 5000);
      console.log(taskId)

return ""
}
test().then((r) => console.log(r));