

import mysql from 'mysql2';
import fs from 'fs';
// const ca = [fs.readFileSync("C:\\Users\\91739\\OneDrive\\Desktop\\Bloggie\\api\\DigiCertGlobalRootCA.crt")]

export const db = mysql.createConnection({
  host:"goms-server.mysql.database.azure.com",
  user:"gomathi",
  password: "G0mathi@2004",
  database:"blog",
  ssl:{
    ca : fs.readFileSync("./DigiCertGlobalRootCA.crt.pem")
  }
})