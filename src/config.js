"use strict";

import { config } from 'dotenv';
config();

export default {
    port: process.env.PORT || 3000,
    dbServer: process.env.SQL_SERVER || "",
    dbUser: process.env.SQL_USER || "",
    dbPassword: process.env.SQL_PASSWORD || "",
    dbDatabase: process.env.SQL_DATABASE || "",
    dbEncrypt: process.env.SQL_ENCRYPT || true
}