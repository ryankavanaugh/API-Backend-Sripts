const { ChannelState } = require("stream-chat");

const StreamChat = require("stream-chat").StreamChat;
key = 'sbpa4hs6h67q'
secret = 'td96qy4ngfqj82zcbb6hmr2rx7yszjnypbsd9pnszgdhdkwnsq6yxnne64ngr3uu'

const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "Dave";
    const token = chatClient.createToken(userID);
    const createUser = await chatClient.connectUser(
        {
            id: userID,
            name: userID,
            image: "https://d3jycsk0m72ya7.cloudfront.net/images/2022/8/12/Jensen_Jake.JPG?width=146"

        }, 
        token);
        return token
}

test().then((r) => console.log(r));



