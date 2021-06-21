"use strict";

import sql from 'mssql';
import config from '../config';

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}


export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        console.log('Server connected on MS-SQL Server');
        return pool;
    } catch (err) {
        console.error(err);
    }
}

export { sql };