
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import updatePreferences from "@/pages/api/updatePreferences";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const email = session.user.email;
  const notifications = req.query.notifications;
  const city = req.query.city;
  if (notifications == true && !city) {
    return res.status(400).json({ message: "No city provided" });
  }

  await updatePreferences(email, notifications, city);
  return res.status(200).json({ message: "successfull" })
}
  