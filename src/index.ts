
import express from "express";

export const app = express();
const port = 8080;


app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({hello: " World !!! "});
});

export const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});




// import http from "http";
//
// export const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(
//     JSON.stringify({
//       hello: " World !!! ",
//     })
//   );
// });
//
// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000/");
// });
