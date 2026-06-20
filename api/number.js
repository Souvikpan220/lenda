export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({
      error: "Missing query"
    });
  }

 try {
  const response = await fetch(
    `https://osint-bronx-ultra-2-0.onrender.com/api/key-bronx/number?key=op&num=${encodeURIComponent(query)}`
  );

  const data = await response.json();

  return res.status(200).json(data);

} catch (err) {
  return res.status(500).json({
    error: err.message
  });
}
