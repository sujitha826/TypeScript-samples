import mysql from "mysql";
import { logger_err } from "../loggerConfig/errlogg";
import { logger } from "../loggerConfig/logger";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "my_db",
    connectionLimit: 4
});

const dbconnect = function (): Promise<any> {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, conn) {
            if (err) {
                conn.release();
                reject(err);
                logger_err.error("Database Connection failed");
            }
            else {
                resolve(conn);
                logger.info("Successfully connected to the Database");
            }
        });
    });
};

export { pool, dbconnect };

// const conn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "123456",
//     database: "my_db"
// });

// conn.connect(error => {
//     if (error) throw error;
//     console.log("Successfully connected to the database.");
// });


// export { conn };