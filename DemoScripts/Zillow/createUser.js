const StreamChat = require("stream-chat").StreamChat;
Dkey = 'spvrf3qh4zqu'
Dsecret = '4hkkmxwpv66nn79a4v5rfcq8s5pvcrt2464tw3nwbhw7dn79hk7qsu5s8gx52r7j'

stacyImage = "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFufGVufDB8MXwwfHx8MA%3D%3D"
wendyImage = "https://images.unsplash.com/photo-1592214534258-0067435006d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHdvbWFufGVufDB8MXwwfHx8MA%3D%3D"
markImage = "https://images.unsplash.com/photo-1591084728795-1149f32d9866?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
lanaImage = "https://plus.unsplash.com/premium_photo-1675713554219-222b21eb19f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
zillowImage = "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1500275099/j2jcc1e5txlw573hwrd2.png"

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "CompanyAdmin";
    const token = chatClient.createToken(userID);
    const createUser = await chatClient.connectUser(
        {
            id: userID,
            name: userID,
            image: zillowImage,
        }, 
        token);
        return token
}

test().then((r) => console.log(r));