import { populateDb } from "../db/index.js";

async function seed() {
  try {
    await populateDb();
    console.log("Seeding finished");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
await seed();

