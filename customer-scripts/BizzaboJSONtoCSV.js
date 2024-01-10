
require("dotenv").config({ path: __dirname + "/.env" });
const bizJSON = require('./bizJSON.json');

const JSONtoCSV = async () => {
    const converter = require('json-2-csv');
    const fs = require('fs');
    const JSONfile = bizJSON

    allChannelMessagesArray = []
    for(const channel of JSONfile){
        allChannelMessagesArray.push(channel.messages)
    }

    // convert JSON array to CSV string
    for(const element of allChannelMessagesArray){
    converter.json2csv(element, (err, csv) => {
        if (err) {
            throw err;
        }
        // print CSV string
        console.log(csv);
        // write CSV to a file
        fs.writeFileSync((element[0].cid + '.csv'), csv);
    });
}
    return "write to csv complete"
}
JSONtoCSV().then((r) => console.log(r));