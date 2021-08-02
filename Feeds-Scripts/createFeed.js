require("dotenv").config({ path: __dirname + "/.env" });
const appKEY = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const stream = require('getstream');

const test = async () => {    
    const key = 'qaq9tzbfa59s'
    const Secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
    const appID = '100501'
    const user = 'jack'
    let stream = require('getstream');
    let client = stream.connect(key, Secret);
    let token = client.createUserToken(user);
    const feed = client.feed('notification', user, token);
    
    return feed
}

test().then((r) => console.log(r));