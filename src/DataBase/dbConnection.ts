import mysql from 'mysql2/promise';

export const db = mysql.createPool({
host: 'localhost',
user: 'root',
password:'4!11%FullA*lexEa#t',
database: 'mediumstories_v1',
waitForConnections: true,
connectionLimit: 10,
});

