require("dotenv").config({ path: __dirname + "/.env" });
const StreamChat = require("stream-chat").StreamChat;

const key = "9bvhagcshbzg"
const secret = "n6a957krxzdqj77tre3dcfc3xfnb9fy8s97qngj3gpxruyd4mvvsrvqamzventgg"

const channelType = "project";
const channelID = "project_1e7077a6-0ee8-4fb2-a9e8-e16d1e549ebf";

const client = new StreamChat(key, secret);

const channelExport = async () => {
const id = '2f949120-f9b7-4f60-bc34-79aad2b85a7a'
const res = await client.getExportChannelStatus(id);


const converter = require('json-2-csv');
const fs = require('fs');
return res.results
// const JSONfile = res.results
// const allJSONMessages = JSONfile[0].messages

// // convert JSON array to CSV string
// converter.json2csv(allJSONMessages, (err, csv) => {
//     if (err) {
//         throw err;
//     }

//     // print CSV string
//     console.log(csv);

//     // write CSV to a file
//     fs.writeFileSync('LandrMessages.csv', csv);

// });

};
// createChannel();
channelExport().then((r) => console.log(r));