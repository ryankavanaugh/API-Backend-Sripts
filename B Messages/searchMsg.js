require("dotenv").config({ path: __dirname + "/.env" });
// const appKEY = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;
const appKEY = 'qaq9tzbfa59s'
const secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'

const test = async () => {
  const chatClient = new StreamChat(appKEY, secret);

  const filters = { members: { $in: ["tyler"] } };
  const messageFilters = { updated_at: { $lte: new Date().toISOString() } };
  const search = await chatClient.search(filters, 
    { "text": { "$ne": " " } },
    // messageFilters,
    // {type: 'regular'},
    // {user: {id: {"$eq":[ “tyler” ]}}},
    // {sort: [{ created_at: -1 }],}
    {sort: [{ reaction_counts: -1 }],}
    );
    
    // for(let i=0; i<=search.results.length; i++) {
    //   console.log(search.results[i].message.created_at)  // 1 2 3 4 5 6
    // }
    
    return search.results

};

test().then((r) => console.log(r));