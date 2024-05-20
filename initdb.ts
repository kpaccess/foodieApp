const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Classic Mac n Cheese",
    slug: "classic-mac-n-cheese-1",
    image: "/images/macncheese.jpg",
    summary:
      "Creamy and cheesy macaroni, a comforting classic that's always a crowd-pleaser.",
    instructions: `
      1. Cook the macaroni:
         Boil macaroni according to package instructions until al dente.

      2. Prepare cheese sauce:
         In a saucepan, melt butter, add flour, and gradually whisk in milk until thickened. Stir in grated cheese until melted.

      3. Combine:
         Mix the cheese sauce with the drained macaroni.

      4. Bake:
         Transfer to a baking dish, top with breadcrumbs, and bake until golden.

      5. Serve:
         Serve hot, garnished with parsley if desired.
    `,
    creator: "Laura Smith",
    creator_email: "laurasmith@example.com",
  },
];

db.prepare(
  `
     CREATE TABLE IF NOT EXISTS meals (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         slug TEXT NOT NULL UNIQUE,
         title TEXT NOT NULL,
         image TEXT NOT NULL,
         summary TEXT NOT NULL,
         instructions TEXT NOT NULL,
         creator TEXT NOT NULL,
         creator_email TEXT NOT NULL
      )
  `
).run();

async function initData() {
  const stmt = db.prepare(`
        INSERT INTO meals VALUES (
           null,
           @slug,
           @title,
           @image,
           @summary,
           @instructions,
           @creator,
           @creator_email
        )
     `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
