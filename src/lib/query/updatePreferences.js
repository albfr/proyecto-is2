
import connectionPool from "@/lib/db";

export default async function deleteActivity(email, notifications, city) {
  if (!city)
    city = "NULL"
  const query = `UPDATE public."User" SET notifications=${notifications}, city_for_nots='${city}' WHERE email='${email}'`;
  console.log(query);
  await connectionPool.query(query);
};
