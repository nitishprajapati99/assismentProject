
📝 user signup and login system

//descriptioj
A simple backend authentication system built using Node.js, Express, MongoDB, and JWT.
It includes user registration, login, validation, password hashing, and a protected profile route.



🚀 Tech Stack

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

bcrypt password hashing



📦 Installation
git clone < https://github.com/nitishprajapati99/assismentProject.git >
cd <day1Task>
npm install


📂 Project Structure
project/
  src/
    index.js
    Controllers/
    Models/
    Routes/
    Middlewares/
    DB/
  .env
  .gitignore
  package.json



📌 API Endpoints
1. Register User

POST /api/auth/register

Request Body:
{
  "email": "test@example.com",
  "password": "Test@123",
  "name": "Nitish"
}

Success Response:
{
  "message": "User registered successfully",
  "user": {
    "id": "1234",
    "email": "test@example.com"
  }
}

2. Login User

POST /api/auth/login

Request Body:
{
  "email": "test@example.com",
  "password": "Test@123"
}

Success Response:
{
  "token": "jwt-token-here"
}

3. Protected Profile Route

GET /api/auth/profile

Headers:
Authorization: Bearer <your_jwt_token>

Success Response:
{
  "id": "12345",
  "email": "test@example.com",
  "name": "Nitish"
}

Error Response (missing/invalid token):
{
  "error": "Access denied"
}


▶️ Run the Project
Development mode:
npm run dev

Production mode:
npm start




🔧 Environment Variables

Create a .env file in the root folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key




📎 Author

Nitish Kumar — Backend Developer