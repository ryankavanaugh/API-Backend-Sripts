const StreamChat = require("stream-chat").StreamChat;
Dkey = 'cc4duvapmebp'
Dsecret = 'quvyjqrzzg6acvugj5h32mqrkbf252nqcgy3hfuvuxwbd2vfzk4tha3kqw327jj3'

const gwenImage = 'https://images.unsplash.com/photo-1570752321219-41822a21a761?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60'

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "Gwen";
    const token = chatClient.createToken(userID);
        const update = {
            id: userID,
            set: {
                image: gwenImage
            },
        };
        
        const response = await chatClient.partialUpdateUser(update);

        return response
}

test().then((r) => console.log(r));









const userImage = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60'
const artsyHands = "https://images.unsplash.com/photo-1558897796-185b06fc450a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q =60"
const imageUpdate = "https://images.unsplash.com/photo-1542892650-7659c76be2e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIyfHxmYXNoaW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
const coachImage = "https://d3jycsk0m72ya7.cloudfront.net/images/2022/1/10/usc_trojans_head_coach_lincoln_riley_headshot.jpg?width=300"
// const coachImage = ""