const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});

const txt = "Hello Everybody";
console.log(txt.indexOf("e"));

// class User {
//   constructor({ name, email } = {}) {
//     this.name = name;
//     this.email = email;
//   }
// }

// class Max extends User {
//   constructor({ name, email, age }) {
//     super(name, email);
//     this.age = age;
//     this.name = name;
//     this.email = email;
//   }
// }
// const max = new Max({ name: "Max", email: "max@gm.com", age: 37 });

// console.log("max :>> ", max);

// const idInterval = setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// clearInterval(idInterval);
