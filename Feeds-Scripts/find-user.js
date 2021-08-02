require("dotenv").config({ path: __dirname + "/.env" });

key = '9wt4pt5wqbnm'
secret = 'grnhr682w3qfgvafs9ppchsna6hwvvzxt6kcbw43nmtp39rhv2equawqhty4vjqj'
appID = '107431'

const test = async () => {    
    let stream = require('getstream');
    let client = stream.connect(key, secret);
    let user = client.user('68082').get();
    console.log('hi');
    console.log(user);
    return user;
}

test().then((r) => console.log(r));