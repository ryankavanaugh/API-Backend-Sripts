const StreamChat = require("stream-chat").StreamChat;
key = 'z79jhauee77m'
secret = 'xbckp53asdumj94xt7crkw5p749rb4d2x4e83xmdf6j33agg5fc8zc2b2ngzphps'

const girlImage = "https://images.unsplash.com/photo-1534945773093-1119ae5684ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGdpcmx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
const landScapeImage = "https://images.unsplash.com/photo-1458245201577-fc8a130b8829?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBpbmd8ZW58MHwwfDB8fHww"
const handyManImage = "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZHltYW58ZW58MHwwfDB8fHww"
const thumbtackImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAYFBMVEX///8An9nw+fyW1+8hq913y+pKuuT0+v0Up9zZ8foEodoLpNt8zuy25PUtsODs+P1ixOjk9ftVv+aJ0+48tuLb8vqr4POj3fK65vWa2fBryOknrt9bwufF6vfP7fiN1e9uRIhWAAAFZElEQVR4nO2d17biMAxFqWmEAEno7f//cmgZIASb6Eh27lra73ecM7ZsNZteT1EURVEURVEURVEURVEURVGUv0o8LeZ5UGajKJlEo6wM8t1ws/D9Va0IN2m+T/qNTLLD8OT7A3/iWJSTZg1Pony79P2dZqYHq4iKURr7/tpvnHbRryruZOeZ72/+JDxn7VTcSIKp7w9/Z1C0nIyXaVn5/vgns5Qs4yZl7VvAnTD92cC/se/CrKxGqIwrge8tbBlwyLiQpKFHGWH65fymMPK3gcWUHdfA3NOkrGEjr5P5sJRwzi3jwsT9Tsy9rCpcL68N+7KqKJ36XyvG3apO5jD4GsrJuDByFnilojoucdfRjY6dsI7L5rVxoUN6Pm5KHMyJrH1UROJH48qJjovFC+9dG8F9951sIKkjFjsHPykFdYRCfkkzYzkhEn6iAbEAZe1WRz8SMniXBnJHxkzcGsidVEKIixO9TiLgPy6dnSCvCCwurrxPS7bcOly5JnUi5oAxZMknUpjzChn70tHvs9r7zHCEBAOchUFIwCnEtPVyDBQ6mpKBqf4hLiRnGOBBYRpHXEifLVoMjQUpeSFsG9fZOIy8kITLCzZ7i/JCuHzHk3kUB0L2DEP0rAk5B0L6PGkuS+3ZhZAdwxi9qWUQF0IijqrJoQNC+hyFeFuk7kTIAR/jaBvDiZARPobRPXEmhMFNKW1DZEMcs+9wZQj/XzlPZjUDu8Ab3woeRKgQH9msRtDwKvctoALtidj7FlCBesBe8otNgNYe83xFUo7P680JaX3MMCE2j/EnFfnq4fMhWb4JJsR6rttlzJ/d41C6Eot34WLb/jUmgoRg3RDo7pu/BRKQEGz/BYsJtUQOJAQrMFhdRiP1LRMScoaEQOdhVg9QISHYiQgN/VHx5/3XWgF17/MKwRKnkIfCKwQL26GwqktCOrS0sCRdh4wd27Wgtg1eIQUkBDoQeYVgeRTIReEVgrkokNPIKwRL/0LNyrxCsBoJ1OXLKwRrSoHyc6xCwAydqbfCrRC0cwvxUViFoMV25ERkFYKdh/bCmzMhaBMwsm2xCkG7HyzdAs6E4D0DgCPPKQSvtANOCqcQvD697YYQvNl02QkhYC4eHJ1RCMddEnoVkVEIR4MmvdbDJ4RjZQFeCp8Q1D+5Y29LEBfC09Q4o6Yb2YRwNWNTMxAfpzHVS+B6d4BaEf2oKBOnlqV/7gbR3Osrwt7M1AyPqV8h3oKpR6fEuJlvQqhTUm97I4YEnFffiFcpa/eGaf7nhPVyEq2WWCuN07J9vFd2aVZSK8SSMuLct8VIZ0lt/yXtvtz392LKV7xnB62Nt03w36gkefNviWeKiQjccSXdRHxzUigOCkt3fw2Ko/K6tij58Ejk4QdKy9OU7c8ZoVxof9rqgrBbSL36QHli4P+ZSDB1uXc4CJ5K9TGECZF68uEKYZ0/dmDChEi+Ehi29zLuU0I4T/mikCZm7Q3+Fqe293AkTpBXFq3PxWtc1P4MYrxp/IX27dRjQhRQOngc8Nh2E06WrTNjsk85VbR+2jBo+weZoycOj1A7mp3SyXxciUXf5MgdPp65EHxHSHrffWeAtWgbEHn3yITMSymRh9eLpwImX3r5EYkF+/ISfHXODOeT2H6WVcWJb1KSnbPTo5Etk6WU3n+UZMbx5mHE/h4YhRP6GNpk3JWf7zgh7cFR2hUZV+I5tT5Y+PwpgiYWKaGGEqy7JuPGsd1v22RFd38MKlwdfvTws7H3/dZGPMwtE7Pfrbpk3yZO6zTPGgLcqJwX0+4uqG8sNuvtOR3PD4fduDhvV8e/Mg+KoiiKoiiKoiiKoiiKoiiKojTxD+VBV3XY0L46AAAAAElFTkSuQmCC"

const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "Thumbtack";
    const token = chatClient.createToken(userID);
    const createUser = await chatClient.connectUser(
        {
            id: userID,
            name: userID,
            image: thumbtackImage,
        }, 
        token);
        return token
}

test().then((r) => console.log(r));