import { db } from "@vercel/postgres";

export default async function (request, response) {
  const client = await db.connect();
  const email = request.body.email.trim().toLowerCase();

  try {
    const existingEmail =
      await client.sql`SELECT * FROM mailing_list WHERE email = ${email}`;

    if (existingEmail.rows?.length) {
      response.status(201).json({ message: "oled juba liitunud :)" });
      return;
    } else {
      await client.sql`INSERT INTO mailing_list (email) VALUES (${email})`;
      response.status(200).json({ message: "liitumine õnnestus" });
    }
  } catch (error) {
    return response.status(500).json({ error });
  }
}
