import db from "#db/client";

export async function getFolders() {
  const sql = `
    SELECT *
    FROM folders
    `;

  const { rows: folders } = await db.query(sql);
  return folders;
}
