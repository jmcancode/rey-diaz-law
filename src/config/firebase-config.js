import * as admin from "firebase-admin";

const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.applicationDefault(serviceAccount),
});

module.exports = admin;
