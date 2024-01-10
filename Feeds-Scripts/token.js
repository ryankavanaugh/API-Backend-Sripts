require("dotenv").config({ path: __dirname + "/.env" });
// const appKEY = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const stream = require('getstream');


const test = async () => {    
    const key = "937t32jnj6wx"
    const secret = "tkf7wcceqgx33br4tnz4xzvdg8u8e6zuudagxk2t3hhc8qhz3xxufuwsy7bvdxfu"
    // const appID = '100501'
    let stream = require('getstream');
    let client = stream.connect(key, secret,{'location': 'us-east'});
    let token = client.createUserToken('ryan');

    let mainClient = stream.connect(key, token);

    // const client = stream.connect('937t32jnj6wx', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicXVpZXQtc3VyZi01In0.pjRXQV2adnRHft5bMeqdTL1aOYc0T37Vd2jITInq0pI', '1160735'); 

    await mainClient.setUser({ 
        id: "ryan",
        name: 'ryan',  
        occupation: 'Software Engineer', 
        gender: 'male' 
    });

    return token

    

}

test().then((r) => console.log(r));