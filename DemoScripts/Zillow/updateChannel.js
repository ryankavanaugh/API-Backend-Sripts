Dkey = 'spvrf3qh4zqu'
Dsecret = '4hkkmxwpv66nn79a4v5rfcq8s5pvcrt2464tw3nwbhw7dn79hk7qsu5s8gx52r7j'
const StreamChat = require("stream-chat").StreamChat;

const imageUpdate = "https://images.unsplash.com/photo-1542892650-7659c76be2e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIyfHxmYXNoaW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"

image1 = "https://i.ibb.co/r7XpKdn/Veridian-Residence.png"
image2 = "https://i.ibb.co/z4FsF01/The-Parker-Off-Peral.png"
image3 = "https://i.ibb.co/vDPPss6/Iron-Horse-Apartments.png"

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const channel = chatClient.channel('messaging', '7104Broadway',  {});
    await channel.addMembers(["Lana"]);
    // await channel.updatePartial({ set: { "image": image1 } })
    return channel          
}

test().then((r) => console.log(r));