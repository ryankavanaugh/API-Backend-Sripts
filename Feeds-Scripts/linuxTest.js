const express = require("express");
const app = express();
const stream = require("getstream");

app.get("/", (req, res, next) => {
  return res.status(200).json({
    status: "test",
  });
});

const key = 'qaq9tzbfa59s'
const Secret = '87hpnuzt45t9bac2t73u2thk2h8dzdt9w6tcyp7bzth9h5t7qnm6damrg97tfnnj'
const appID = '100501'
// let stream = require('getstream');
let client = stream.connect(key, Secret);
let token = client.createUserToken('ryan');

app.get("/create-post", (req, res, next) => {
  // instantiate a new client (client side)
  const client = stream.connect(
    key,
    token,
    appID
  );

  console.log(client.currentUser);
  console.log('ryan');

  const usup = client.feed("user", 'ryan');

  usup
    .addActivity({
      actor: client.userId,
      verb: "add",
      object: "picture:10",
      foreign_id: "picture:10",
      message: "Beautiful bird!",
    })
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });

  return res.status(200).json({
    status: "testing",
  });
});

app.get("/generate-token", (req, res) => {
  // instantiate a new client (server side)
  const clientServer = stream.connect(process.env.API_KEY, process.env.SECRET);
  const userToken = clientServer.createUserToken("usup");
  return res.status(200).json({
    token: userToken,
  });
});

const port = 3000;
app.listen(port, () => {
  require("dotenv").config();
  console.log("Running in port: " + port);
  console.log(process.env.API_KEY);
  console.log(process.env.APP_ID);
  // const client = stream.connect("hqfuwk78kb3n", null, process.env.APP_ID);
  // const usupFeed = client.feed(
  //   "user",
  //   "usup",
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXN1cCJ9.LvakeqqnheYVjSkVm7HwOu2o3MlDW13ph56vn-j3rMA"
  // );
  // console.log(usupFeed.userId);
  console.log("=============================================================");
});
