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
    // YOUR API CALL HERE

    return res.status(200).json({
      success: true,
      query,
      message: "number endpoint working"
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
}
