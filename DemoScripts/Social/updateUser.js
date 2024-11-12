const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'

const userImage = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60'
const artsyHands = "https://images.unsplash.com/photo-1558897796-185b06fc450a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q =60"
const imageUpdate = "https://images.unsplash.com/photo-1542892650-7659c76be2e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIyfHxmYXNoaW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
const coachImage = "https://d3jycsk0m72ya7.cloudfront.net/images/2022/1/10/usc_trojans_head_coach_lincoln_riley_headshot.jpg?width=300"
// const coachImage = ""
const gwenImage = 'https://images.unsplash.com/photo-1570752321219-41822a21a761?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60'
const adamImage = 'https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D'
const leoImage = "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"

const tripImage = "https://w7.pngwing.com/pngs/264/340/png-transparent-tripadvisor-thumbnail-review-platforms-logos.png"

const image = tripImage

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "AI";
    const token = chatClient.createToken(userID);
    console.log(token)
        const update = {
            id: userID,
            set: {
                image: image
            },
        };
        
        const response = await chatClient.partialUpdateUser(update);

        return response
}

test().then((r) => console.log(r));





