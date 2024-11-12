const chatClient = new StreamChat(Dkey, Dsecret);
const channel = chatClient.channel('team', 'RossChannel', {});
// clear any SE inputed messages for next demo run
await channel.truncate();
let userID1 = "cd0ba2a541bcf053201574ef44eb370f"
let userID2 = "Taylor"
// set all demo messages
const M1 = {
    text: "Hey 😏",
    user_id: userID2
}
const M2 = {
        text: "What's up?! 😀",
        user_id: userID1,
}
const M3 =      {
    text: "Check out this chat tutorial: https://www.youtube.com/watch?v=vgqBc7jni8c ",
    user_id: userID2
}
const M4 =      {
    text: "Are you free later today?!",
    user_id: userID2
}
// save messages in array for map function
const allMessages = [M1, M2, M3, M4]
const SM1 = await channel.sendMessage(M1)
const SM2 = await channel.sendMessage(M2)
const SM3 = await channel.sendMessage(M3)
const SM4 = await channel.sendMessage(M4)
return channel;