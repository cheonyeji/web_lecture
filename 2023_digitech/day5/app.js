import express from "express";
import path from "path";
import fs from "fs";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//https://expressjs.com/en/starter/static-files.html 참고
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

app.use(
  "/node_modules",
  express.static(path.join(__dirname + "/node_modules"))
);

app.listen(3000, function () {
  console.log("server is running🎀");
});

app.get("/", function (req, res) {
  res.send("<h1>Data from express server</h1>");
});

app.get("/test", function (req, res) {
  res.sendFile(__dirname + "/public/ajax.html");
});

app.get("/db", function (req, res) {
  res.sendFile(__dirname + "/public/db.html");
});

app.post("/test", function (req, res) {
  const email = req.body.email;
  const responseData = {};

  responseData.email = email;
  res.json(responseData);
});

app.get("/database", function (req, res) {
  // fs.readFileSync를 이용해서 local에 있는 json파일을 동기적으로 읽어온 뒤
  // JSON.parse()를 통해 객체로 생성하여 data 변수에 넣어주기
  const data = JSON.parse(
    fs.readFileSync("./public/data/MOCK_DATA.json", "utf8")
  );
  res.json(data);
});
