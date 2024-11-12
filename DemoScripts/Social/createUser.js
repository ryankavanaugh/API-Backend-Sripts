const StreamChat = require("stream-chat").StreamChat;
Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'
const userImage = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60'
// Dkey = 'cc4duvapmebp'
// Dsecret = 'quvyjqrzzg6acvugj5h32mqrkbf252nqcgy3hfuvuxwbd2vfzk4tha3kqw327jj3'

const girlImage1 = "https://images.unsplash.com/photo-1534945773093-1119ae5684ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGdpcmx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
const manArtist = "https://images.unsplash.com/photo-1586038693164-cb7ee3fb8e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
const artsyHands = "https://images.unsplash.com/photo-1558897796-185b06fc450a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q =60"
const backImage = "https://images.unsplash.com/photo-1599319974542-8421bd46ae67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
const maleFashion = "https://images.unsplash.com/photo-1642980364256-12e2811c91ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxmYXNoaW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"

const nd = "https://play-lh.googleusercontent.com/RamdLkcf8OZ7y2DEpajvoLntyHr0v8hTippsn134VnwZ0IaxEA_drA9dOzof3e9_od8"

const cup = "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"

const tripAdvisor = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftechnext24.com%2F2022%2F07%2F06%2Ftrip-advisor-app-travel-guide-and-sum%2F&psig=AOvVaw17qW7ivhShEY6wW_8YWIW8&ust=1721404708400000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjdxsr6sIcDFQAAAAAdAAAAABAE"

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "AI";
    const token = chatClient.createToken(userID);
    const createUser = await chatClient.connectUser(
        {
            id: userID,
            name: userID,
            image: tripAdvisor,
        }, 
        token);
        return token
}

test().then((r) => console.log(r));