import * as pg from 'pg'
// @ts-ignore
const { Pool } = pg.default
import dotenv from 'dotenv'
dotenv.config()

const pool = new Pool({
    connectionString: process.env.PG_URI
})

export default {
    query: (text, params) => {
        console.log('executed query ', text)
        return pool.query(text, params)
    }
}