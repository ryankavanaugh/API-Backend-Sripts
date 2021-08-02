require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const chatClient = new StreamChat(appKEY, secret);
    const userID = "tyler";
    const token = chatClient.createToken(userID);
    const set = await chatClient.connectUser({id: userID}, token);
    // const filter = { members: { $in: ['tyler', 'Ryan'] }};
    // const filter = { members: { $in: ['tyler'] }};

    userID1 = 'tyler';
    userID2 = 'ryan';
     
    const custom_data_filter = {  type: "messaging" , color: 'purple'}; 
  
    const sort = { last_message_at: -1 };
    const channels = await chatClient.queryChannels(custom_data_filter, sort, {
        // watch: true,
        // state: true,
    });
    return channels[0].state.messages;
}


test().then((r) => console.log(r));


// Flutter Filter
// var filter = {
//     r'$and': [
//       {
//         'members': {
//           r'$in': ['userId1'],
//         },
//       },
//       {
//         'members': {
//           r'$in': ['userId2],
//         },
//       },
//      'flavor': 'dm',
//     ],
// }

    // const test_array = [
    //     {
    //         members: {
    //         $gt: "2020-08-10T16:01:49.27673Z",
    //       },
    //     },
    //     {
    //       last_message_at: {
    //         $lt: "2021-10-10T14:34:43.896532Z",
    //       },
    //     },
    //   ],
    // };