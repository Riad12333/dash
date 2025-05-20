//const bcrypt = require("bcrypt"); // require bcrypt
import prisma from "../lib/prisma.js";
const saltRounds = 10; //  Data processing speed
var password = "admin"; // Original Password
var password2 = "admin";
// bcrypt.hash(password, saltRounds).then(function (hash) {
//   console.log("hash : ", hash);
// });

async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.admins.findMany();
  console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
