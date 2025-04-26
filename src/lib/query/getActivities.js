import connectionPool from "@/lib/db";

export default async function getActivities() {
  const query = 'SELECT * FROM "Activity"';
  let activities = await connectionPool.query(query);
  return activities.rows;
};
