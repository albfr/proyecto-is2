import getNotifiedUsers from "@/lib/query/getNotifiedUsers";

export default async function handler(req, res) {

  try {
    const data = await getNotifiedUsers();
    res.status(200).json(data);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
}
