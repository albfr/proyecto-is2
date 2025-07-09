
import connectionPool from "@/lib/db";

export default async function getNotifiedUsers() {
  const query = `SELECT email, city_for_nots FROM public."User" WHERE notifications = true;`;
  const data = await connectionPool.query(query);
  return data.rows;
};
