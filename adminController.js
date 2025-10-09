const Feedback = require('../models/Feedback');

// Get all feedback (optionally filter by rating)
exports.getAllFeedback = async (req, res) => {
  try {
    const { rating } = req.query;
    const filter = rating ? { rating: Number(rating) } : {};
    const feedbacks = await Feedback.find(filter).sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
