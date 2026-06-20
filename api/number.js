module.exports = async function handler(req, res) {
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

  const text = await response.text();
console.log(text);

return res.status(response.status).send(text);

} catch (err) {
  return res.status(500).json({
    error: err.message
  });
 }
};
