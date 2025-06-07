import connectionPool from "@/lib/db";

export default async function handler(req, res) {
    try {
        const query = 'SELECT * FROM public."User"';
        const query_result = await connectionPool.query(query);
        const rows = await query_result.rows;
        res.status(200).json(rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ "error": "Could not fetch from db" });
    }
};
