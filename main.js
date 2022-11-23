const express = require("express");
const main = express();
const PORT = 3000;
const router = require("./Routes/routes")

main.use(express.static("public"));
main.use(express.json());
main.use("/api/v1", router)

main.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});