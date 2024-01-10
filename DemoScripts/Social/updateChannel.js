Dkey = 'nvp9bux7jbb8'
Dsecret = '4srf6hpg2q8udqssevzekb6b8fq5a9ahtyxdm3b5bsktb4hpe479j6cfwjggx96m'
// Dkey = 'cc4duvapmebp'
// Dsecret = 'quvyjqrzzg6acvugj5h32mqrkbf252nqcgy3hfuvuxwbd2vfzk4tha3kqw327jj3'
const StreamChat = require("stream-chat").StreamChat;

const imageUpdate = "https://images.unsplash.com/photo-1542892650-7659c76be2e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIyfHxmYXNoaW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"


const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('messaging', 'Nextdoor', {});
    // await channel.addMembers(["Taylor"]);
    await channel.updatePartial({ set: { "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" } })
    return channel          
}

test().then((r) => console.log(r));