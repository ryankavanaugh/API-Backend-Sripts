require("dotenv").config({ path: __dirname + "/.env" });
const StreamChat = require("stream-chat").StreamChat;
const appKEY = 'qaq9tzbfa59s'
const secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'

const test = async () => {
  const chatClient = new StreamChat(appKEY, secret);

  const filters = { members: { $in: ["tyler"] } };
  const messageFilters = { updated_at: { $lte: new Date().toISOString() } };
  const search = await chatClient.search(filters, 
    { "text": { "$ne": " " } },

    {sort: [{ reaction_counts: -1 }],}
    );

    const result = await chatClient?.search(
      {
        cid: { $in: ['F'] },
      },
      { 'attachments.type': { $in: ['image'] } },
      {
        limit: 10,
        offset: offset.current,
      },
    );


    return result.results


};

test().then((r) => console.log(r));