const StreamChat = require("stream-chat").StreamChat;
Key = 'b223hbsbgrpg'
Secret =  'f8nf26vtas57f2fy55w8m254cmw7wbq5r724rq8x8egfqz83mkwcsvdusnsu7nhf'

const test = async () => {
    const chatClient = new StreamChat(Key, Secret);
    const userID = "Mike";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const channel = chatClient.channel('messaging', 'Nextdoor',  { 
        // name: 'Nextdoor', 
        members: ['Alex', "Mike"],
    }); 
     
    await channel.create();  

    // channel.truncate()

    const M1 = {
        text: "Alex! You did great!",
        // attachments: [
        //     {
        //         type: 'video',
        //         asset_url: 'https://www.youtube.com/watch?v=k0BWlvnBmIE',
        //         thumb_url: 'https://www.youtube.com/watch?v=k0BWlvnBmIE'
        //     }]
        // attachment: "https://www.youtube.com/watch?v=k0BWlvnBmIE"
        // user_id: "Tre",
}

    // save messages in array for map function
    const allMessages = [M1]

    const SM1 = await channel.sendMessage(M1)

    return channel.id
}

test().then((r) => console.log(r));