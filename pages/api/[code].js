import { db } from "@vercel/postgres";

export default async function handler(req, res) {
  const client = await db.connect();

  // Saame koodi dünaamiliselt URL-ist
  const { code } = req.query;

  // Kui kood ei ole olemas või pole 8-kohaline, tagastame vea
  if (!code || code.length !== 8) {
    return res.redirect("/");
  }

  try {
    // Otsime andmebaasist linki vastava koodi alusel
    const result = await client.sql`
      SELECT share_link FROM folders WHERE unique_code = ${code};
    `;

    // Kui kood ei leidu, tagastame 404
    if (result.rows.length === 0) {
      return res.redirect("/");
    }

    // Kui kood leitakse, siis suuname kasutaja vastavale Drive'i lingile
    const shareLink = result.rows[0].share_link;
    res.redirect(shareLink); // Suunab kasutaja õigesse kohta
  } catch (err) {
    console.error("Error fetching the folder link:", err);
    res.status(500).json({ error: "An error occurred" });
  }
}
