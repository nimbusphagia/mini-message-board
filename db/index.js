import 'dotenv/config';
import { Pool } from "pg";
import { messages as seedMessages } from "../db.js";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

function query(text, params = []) {
  return pool.query(text, params);
}

async function getMessages() {
  const sql = "SELECT * FROM messages";
  const result = await query(sql);
  return result.rows;
}
async function getMessageById(id) {
  const sql = `SELECT * FROM messages WHERE id = $1`;
  const result = await query(sql, [id]);
  return result.rows[0] ?? null;
}
async function addMessage(user, text) {
  const sql = `
    INSERT INTO messages (username, text)
    VALUES ($1, $2)
  `;
  await query(sql, [user, text]);
}

async function populateDb() {
  try {
    for (const msg of seedMessages) {
      await addMessage(msg.user, msg.text);
    }
    console.log("messages populated");
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { query, getMessages, getMessageById, addMessage, populateDb };

