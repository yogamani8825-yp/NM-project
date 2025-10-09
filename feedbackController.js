const Feedback = require('../models/Feedback');
const analyzeSentiment = require('../utils/sentiment'); // optional

// Submit feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;

    // Optional: sentiment analysis
    const sentimentScore = analyzeSentiment ? analyzeSentiment(message) : null;

    const feedback = new Feedback({
      name,
      email,
      message,
      rating,
      sentimentScore,
    });

    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully', feedback });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
