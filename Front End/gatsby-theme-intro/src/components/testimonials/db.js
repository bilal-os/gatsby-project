import mysql from 'mysql2';

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function createNote(Name, Email, Subject, Description, ID)
{
    const result = await pool.query(`
    INSERT INTO testimonials (Name, Email, Subject, Description, ID)
    VALUES (?,?,?,?,?)
    `, [Name, Email, Subject, Description, ID]
    )
    return result.insertID
}

const result = await createNote('asdsa','qweqwe','asdsad','xcbzzvxcvz')
console.log(result);