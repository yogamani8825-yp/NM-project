2. Dependencies
npm init -y
npm install express mongoose dotenv body-parser cors nodemon


Optional (for email or sentiment):

npm install nodemailer sentiment


1. Start the Server

Make sure your server is running:

node server.js


You should see:

Server running on port 5000
MongoDB connected

2. Test User Feedback Submission

Endpoint: POST http://localhost:5000/api/feedback/submit

Steps in Postman:

Open Postman → Click New → Request.

Enter the URL above.

Set Method to POST.

Go to the Body tab → Select raw → JSON.

Paste a sample feedback:

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Great service, very satisfied!",
  "rating": 5
}


Click Send.

You should get a response like:

{
  "message": "Feedback submitted successfully",
  "feedback": {
    "_id": "650f8e4f3d1b5a00123abcde",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Great service, very satisfied!",
    "rating": 5,
    "createdAt": "2025-10-04T12:34:56.789Z",
    "__v": 0
  }
}


✅ This confirms the feedback is saved in MongoDB.

3. Test Admin View Feedback

Endpoint: GET http://localhost:5000/api/admin/feedbacks

Steps in Postman:

Open Postman → Click New → Request.

Enter the URL above.

Set Method to GET.

Optional: Filter by rating, e.g., http://localhost:5000/api/admin/feedbacks?rating=5

Click Send.

You should get a JSON array of feedbacks:

[
  {
    "_id": "650f8e4f3d1b5a00123abcde",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Great service, very satisfied!",
    "rating": 5,
    "createdAt": "2025-10-04T12:34:56.789Z",
    "__v": 0
  }
]