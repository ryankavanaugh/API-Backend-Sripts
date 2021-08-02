require("dotenv").config({ path: __dirname + "/.env" });
// const appKEY = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
    const key = 'fynbk2ccw3sj';
    const secret = 'j9zhsb6jghtubthn3mvwyywj5p5sftpdbjpd5tq3vycvtm8dp2ysed6yed2cunuq';
    const chatClient = new StreamChat(key, secret);
    const userID = "d-4363-u-10630";
    const token = chatClient.createToken(userID);
    // server to client side code
    const user = await chatClient.connectUser({id: userID}, token);

    // const filter = { members: { $in: ['tyler'] }, };
    const filter = { members: { $in: ["d-4363-u-10630"] }, };
    // const sort = { has_unread: 1 };
    // const sort = [{ last_message_at: -1 }, { has_unread: -1 }]
    const sort = [{ has_unread: -1 }, { last_message_at: -1 }];
    // const sort = [{ last_message_at: -1 }]
    const channels = await chatClient.queryChannels(filter, {}, {
        watch: true,
        state: true,
        offset: 0,
        limit: 20
    });
    // list = Map()
    // return channels[2]._client.user.total_unread_count;
    // return channels[0].state.unreadCount;
    channels.forEach((channel) => {
        if(channel.state.unreadCount > 0){
            console.log(channel)
        }
        else {
            console.log('big ol ')
        }
    })
    // return channels[0]
    // return user
    // return channels.length;
}

test().then((r) => console.log(r));